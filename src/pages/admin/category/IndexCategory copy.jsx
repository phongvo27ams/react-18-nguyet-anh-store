import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

import '../../../assets/css/pages/admin/category/IndexCategory.css';

const IndexCategory = () => {
	// Set the state
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	const index = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/category`);
		if(response.data.status === 200) {
			setCategories(response.data.categories);
			setLoading(false);
		}
	}

	const destroy = async(event, id) => {
		// Deleting process message
		const deleting = event.currentTarget;
		deleting.innerText = 'Deleting...';

		const response = await axios.delete(`http://127.0.0.1:8000/api/admin/sub-category/${id}`);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			index();
		}
	}

	// Show the list of categories
	useEffect(() => {
		index();
	}, []);

	let categoriesTable = '';
	if(loading) {
		// While getting data from server, display Loading...
		categoriesTable = <tr className="border-t"><td className="px-[10px] py-[16px]"><p>Loading...</p></td></tr>
	} else {
		// When finish loading, loop through categories as item
		categoriesTable = categories.map((item) => {
			return (
				<tr className="border-t" key={item.id}>
					<td className="px-[10px] py-[16px]">{item.name}</td>
					<td className="px-[10px] py-[16px]">
						<img src={`http://127.0.0.1:8000/assets/images/category/${item.image}`}/>
					</td>
					<td className="px-[10px] py-[16px] text-right">
						<Link to={`/admin/category/${item.id}/edit`} className="px-[10px] text-blue-500 duration-[500ms] hover:text-blue-700">
							<i className="fa-solid fa-pen-to-square"></i>
						</Link>
						{/* Call the destroy function with event and id */}
						<button className="px-[10px] text-red-500 duration-[500ms] hover:text-red-700" onClick={(event) => destroy(event, item.id)}>
							<i className="fa-solid fa-trash-can"></i>
						</button>
					</td>
				</tr>
			);
		});
	}

	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-[40%_60%] lg:grid-cols-[24%_76%] xl:grid-cols-[20%_80%]">
				<PrimaryNavigation/>
				<MobileNavigation/>

				<section className="col-span-2 lg:col-span-1 grid-rows-2">
					<Header/>
					
					<section className="relative min-h-screen p-[36px] bg-[#f5f6fe]">
						<div className="mb-[16px]">
							<span className="text-[24px] font-[600] mr-[8px]">Categories</span>
							{/* Close Button */}
							<Link to="/admin/category/create">
								<button className="text-[20px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]">
									<i className="fa-solid fa-circle-plus"></i>
								</button>
							</Link>
							{/* ------------ */}
						</div>
						
						<div className="flex overflow-auto">
							<table className="table-auto basis-[100%] min-w-[500px] bg-white rounded shadow-md">
								<thead>
									<tr>
										<th className="px-[10px] py-[16px] text-left w-[60%]">Name</th>
										<th className="px-[10px] py-[16px] text-left w-[20%]">Image</th>
										<th className="px-[10px] py-[16px] text-right w-[20%]" rowSpan="2">Options</th>
									</tr>
								</thead>
								<tbody>
									{categoriesTable}
								</tbody>
							</table>
						</div>
					</section>
				</section>
			</div>
		</div>
	);
}

export default IndexCategory;