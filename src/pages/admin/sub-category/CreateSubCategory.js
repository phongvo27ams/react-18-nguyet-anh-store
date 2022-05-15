import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const CreateSubCategory = () => {
	// Use to display category options in select
	const [categories, setCategories] = useState([]);
	// Use to handle input
	const [subCategoryInput, setSubCategory] = useState({
		name: '',
		category_id: ''
	});
	const [errors, setErrors] = useState([]);

	const handleInput = (event) => {
		event.persist();
		setSubCategory({...subCategoryInput, [event.target.name]: event.target.value});
	}

	const create = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/sub-category/create`);
		if(response.status === 200) {
			setCategories(response.data.categories);
		}
	}

	const store = async(event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('name', subCategoryInput.name);
		formData.append('category_id', subCategoryInput.category_id);

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/sub-category`, formData);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			// Clear the input
			setSubCategory({...subCategoryInput,
				name: ''
			});
			// Clear errors
			setErrors([]);
		} else {
			// Show the errors
			setErrors(response.data.errors);
		}
	}

	useEffect(() => {
		create()
	}, []);

	return (
		<section className="relative min-h-screen p-[36px] bg-[#f5f6fe]">
			<div className="mb-[16px]">
				<span className="text-[24px] font-[600] mr-[8px]">Sub-categories</span>
			</div>

			<section className="w-[100%] bg-white p-[20px] rounded-md shadow-md">
				<div className="flex justify-between items-center mb-[10px]">
					<p className="uppercase text-[20px] font-[600]">Create</p>
					<Link to="/admin/sub-category" className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500" id="closeCreateModal">
						<i className="fa-solid fa-xmark"></i>
					</Link>
				</div>
				<form encType="multipart/form-data" className="flex flex-wrap gap-[12px]" onSubmit={store}>
					<label className="group relative basis-[100%]">
						<span className="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Name</span>
						<input type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="name" value={subCategoryInput.name} onChange={handleInput}/>
						<p className="text-red-600 text-[12px]">{errors.name}</p>
						
						<select className="w-[100%] p-[12px] my-[6px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="category_id" value={subCategoryInput.category_id} onChange={handleInput}>
							<option value="">Select a category...</option>
							{categories.map((item) => {
								return (
									<option value={item.id} key={item.id}>{item.name}</option>
								)
							})}
						</select>
						<p className="text-red-600 text-[12px]">{errors.category_id}</p>
					</label>
					<button type="submit" className="basis-fit uppercase font-[600] py-[12px] px-[24px] border-[#15a362] rounded border cursor-pointer duration-[500ms] hover:text-white hover:bg-[#15a362]">Create</button>
				</form>
			</section>
		</section>
	);
}

export default CreateSubCategory;