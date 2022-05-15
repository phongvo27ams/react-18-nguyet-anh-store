import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const IndexProduct = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const index = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/product`);
		if(response.data.status === 200) {
			setProducts(response.data.products);
			setLoading(false);
		}
	}

	const destroy = async(event, id) => {
		const deleting = event.currentTarget;
		deleting.innerText = 'Deleting';

		const response = await axios.delete(`http://127.0.0.1:8000/api/admin/product/${id}`);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			index();
		}
	}

	useEffect(() => {
		index();
	}, []);

	let productsTable = '';
	if(loading) {
		productsTable = <tr className="border-t"><td className="px-[10px] py-[16px] text-left">Loading...</td></tr>
	} else {
		productsTable = products.map((item) => {
			return (
				<tr className="border-t" key={item.id}>
					<td className="px-[10px] py-[16px] text-left">{item.name}</td>
					<td className="px-[10px] py-[16px] text-left">{item.sub_category.name}</td>
					<td className="px-[10px] py-[16px] text-left">{item.unit_price}</td>
					<td className="px-[10px] py-[16px] text-left">{item.sale_price}</td>
					<td className="px-[10px] py-[16px] text-left">{item.rate}</td>
					<td className="px-[10px] py-[16px] text-left">{item.vendor}</td>
					<td className="px-[10px] py-[16px] text-left">{item.sku}</td>
					<td className="px-[10px] py-[16px] text-left">{item.availability}</td>
					<td className="px-[10px] py-[16px] text-left">{item.color}</td>
					<td className="px-[10px] py-[16px] text-left">{item.size}</td>
					<td className="px-[10px] py-[16px]">
						<img className="w-[80px]" src={`http://127.0.0.1:8000/assets/images/product/${item.image}`}/>
					</td>
					<td className="px-[10px] py-[16px] text-right">
						<Link to={`/admin/product/${item.id}/edit`} className="px-[10px] text-blue-500 duration-[500ms] hover:text-blue-700">
							<i className="fa-solid fa-pen-to-square"></i>
						</Link>
						<button className="px-[10px] text-red-500 duration-[500ms] hover:text-red-700" onClick={(event) => destroy(event, item.id)}>
							<i className="fa-solid fa-trash-can"></i>
						</button>
					</td>
				</tr>
			);
		});
			
	}

	return (
		<section className="relative min-h-screen p-[36px] bg-[#f5f6fe]">
			<div className="mb-[16px]">
				<span className="text-[24px] font-[600] mr-[8px]">Products</span>
				<Link to="/admin/product/create" className="text-[20px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]" id="create">
					<i className="fa-solid fa-circle-plus"></i>
				</Link>
			</div>
			
			<div className="flex overflow-auto">
				<table className="table-auto basis-[100%] min-w-[800px] bg-white rounded shadow-md">
					<thead>
						<tr>
							<th className="px-[10px] py-[16px] text-left">Name</th>
							<th className="px-[10px] py-[16px] text-left">Sub-category</th>
							<th className="px-[10px] py-[16px] text-left">Unit Price</th>
							<th className="px-[10px] py-[16px] text-left">Sale Price</th>
							<th className="px-[10px] py-[16px] text-left">Rate</th>
							<th className="px-[10px] py-[16px] text-left">Vendor</th>
							<th className="px-[10px] py-[16px] text-left">SKU</th>
							<th className="px-[10px] py-[16px] text-left">Availability</th>
							<th className="px-[10px] py-[16px] text-left">Color</th>
							<th className="px-[10px] py-[16px] text-left">Size</th>
							<th className="px-[10px] py-[16px] text-left">Image</th>
							<th className="px-[10px] py-[16px] text-right" rowSpan="2">Options</th>
						</tr>
					</thead>
					<tbody>
						{productsTable}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default IndexProduct;