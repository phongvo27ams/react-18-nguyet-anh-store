import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const IndexSubCategory = () => {
	const [subCategories, setSubCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	const index = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/sub-category`);
		if(response.data.status === 200) {
			setSubCategories(response.data.subCategories);
			setLoading(false);
		}
	}

	const destroy = async(event, id) => {
		const deleting = event.currentTarget;
		deleting.innerHTML = 'Deleting...';

		const response = await axios.delete(`http://127.0.0.1:8000/api/admin/sub-category/${id}`);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			index();
		}
	}

	useEffect(() => {
		index();
	}, []);

	let subCategoryTable = '';
	if(loading) {
		subCategoryTable = <tr className="border-t"><td className="px-[10px] py-[16px]"><p colSpan="3">Loading...</p></td></tr>
	} else {
		subCategoryTable = subCategories.map((item) => {
			return (
				<tr className="border-t" key={item.id}>
					<td className="px-[10px] py-[16px]">{item.name}</td>
					<td className="px-[10px] py-[16px]">{item.category.name}</td>
					<td className="px-[10px] py-[16px] text-right">
						<Link to={`/admin/sub-category/${item.id}/edit`} className="px-[10px] text-blue-500 duration-[500ms] hover:text-blue-700">
							<i className="fa-solid fa-pen-to-square"></i>
						</Link>
						{/* Call the destroy function with event and id */}
						<button className="px-[10px] text-red-500 duration-[500ms] hover:text-red-700" onClick={(event) => destroy(event, item.id)}>
							<i className="fa-solid fa-trash-can"></i>
						</button>
					</td>
				</tr>
			);
		})
	}

	return (
		<section className="relative min-h-screen p-[36px] bg-[#f5f6fe]">
			<div className="mb-[16px]">
				<span className="text-[24px] font-[600] mr-[8px]">Sub-categories</span>
				<Link to="/admin/sub-category/create" className="text-[20px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]">
					<i className="fa-solid fa-circle-plus"></i>
				</Link>
			</div>
			
			<div className="flex overflow-auto">
				<table className="table-auto basis-[100%] min-w-[500px] bg-white rounded shadow-md">
					<thead>
						<tr>
							<th className="px-[10px] py-[16px] text-left w-[60%]">Name</th>
							<th className="px-[10px] py-[16px] text-left w-[20%]">Category</th>
							<th className="px-[10px] py-[16px] text-right w-[20%]" rowSpan="2">Options</th>
						</tr>
					</thead>
					<tbody>
						{subCategoryTable}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default IndexSubCategory;