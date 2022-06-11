import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

const EditSubCategory = () => {
	const [categories, setCategories] = useState([]);
	const [subCategoryInput, setSubCategory] = useState({
		name: '',
		category_id: ''
	});
	const [errors, setErrors] = useState([]);

	const {id} = useParams();
	const navigate = useNavigate();

	const handleInput = (event) => {
		event.persist();
		setSubCategory({...subCategoryInput, [event.target.name]: event.target.value});
	}

	const edit = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/sub-category/${id}/edit`);
		if(response.status === 200) {
			setCategories(response.data.categories);
			setSubCategory(response.data.subCategory);
		}
	}

	// Update the category
	const update = async(event) => {
		event.preventDefault();

		// Append name and image (Line 17-19) to data
		const data = new FormData();
		data.append('name', subCategoryInput.name);
		data.append('category_id', subCategoryInput.category_id);

		document.getElementById('updateButton').disabled = true;
		document.getElementById('updateButton').innerText = 'Updating...';

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/sub-category/${id}`, data);
		console.log(response.data);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
			// Return to category page
			navigate('/admin/sub-category');
		} else {
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
			// Show the errors
			setErrors(response.data.errors);
		}
	}

	useEffect(() => {
		edit();
	}, []);

	return (
		<div className="container mx-auto">
		<div className="grid grid-cols-[40%_60%] lg:grid-cols-[24%_76%] xl:grid-cols-[20%_80%]">
			<PrimaryNavigation/>
			<MobileNavigation/>

			<section className="col-span-2 lg:col-span-1 grid-rows-2">
				<Header/>
				
				<section className="relative min-h-screen p-[36px] bg-[#f5f6fe]">
						<div className="mb-[16px]">
							<span className="text-[24px] font-[600] mr-[8px]">Sub-categories</span>
						</div>

						<section className="w-[100%] bg-white p-[20px] rounded-md shadow-md">
							<div className="flex justify-between items-center mb-[10px]">
								<p className="uppercase text-[20px] font-[600]">Edit</p>
								<Link to="/admin/sub-category" className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500" id="closeCreateModal">
									<i className="fa-solid fa-xmark"></i>
								</Link>
							</div>
							<form encType="multipart/form-data" className="flex flex-wrap gap-[12px]" onSubmit={update}>
								<label className="group relative basis-[100%]">
									<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Name</span>
									<input type="text" className="w-[100%] p-[12px] mb-[6px] rounded border outline-none duration-[500ms] focus:border-[#15a362]" name="name" value={subCategoryInput.name} onChange={handleInput}/>
									<p className="hidden text-red-600 text-[12px]">{errors.name}</p>

									<select className="w-[100%] p-[12px] my-[6px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="category_id" value={subCategoryInput.category_id} onChange={handleInput}>
										<option value="">Select a category...</option>
										{categories.map((item) => {
											return (
												<option value={item.id} key={item.id}>{item.name}</option>
											)
										})}
									</select>
									<p className="hidden text-red-600 text-[12px]">{errors.category_id}</p>
								</label>
								<button type="submit" id="updateButton" className="basis-fit uppercase font-[600] py-[12px] px-[24px] border-[#15a362] rounded border cursor-pointer duration-[500ms] hover:text-white hover:bg-[#15a362]">Update</button>
							</form>
						</section>
					</section>
			</section>
		</div>
	</div>
	);
}

export default EditSubCategory;