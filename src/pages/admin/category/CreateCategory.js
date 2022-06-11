import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

const CreateCategory = () => {
	// Define the initial value
	const [categoryInput, setCategory] = useState({
		name: ''
	});
	const [image, setImage] = useState('');
	const [errors, setErrors] = useState([]);

	// When the inputs change
	const handleInput = (event) => {
		event.persist();
		setCategory({...categoryInput, [event.target.name]: event.target.value});
	}
	// When the image change
	const handleImage = (event) => {
		setImage({image: event.target.files[0]});
	}

	// Store the category
	const store = async(event) => {
		event.preventDefault();
		// Append name and image (Line 17-19) to data
		const formData = new FormData();
		formData.append('name', categoryInput.name);
		formData.append('image', image.image);

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/category`, formData);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			// Clear the input
			setCategory({...categoryInput,
				name: ''
			});
			// Clear errors
			setErrors([]);
		} else {
			// Show the errors
			setErrors(response.data.errors);
		}
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
						</div>

						<section className="w-[100%] bg-white p-[20px] rounded-md shadow-md">
							<div className="flex justify-between items-center mb-[10px]">
								<p className="uppercase text-[20px] font-[600]">Create</p>
								{/* Close Button */}
								<Link to="/admin/category">
									<button className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500">
										<i className="fa-solid fa-xmark"></i>
									</button>
								</Link>
							</div>
							<form className="flex flex-wrap gap-[12px]" encType="multipart/form-data" onSubmit={store}>
								<label className="group relative basis-[100%]">
									<span className="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Name</span>
									{/* When the input changed, set the name as current typed value (event.target.value) */}
									<input type="text" name="name" className="w-[100%] p-[12px] mb-[6px] rounded border outline-none duration-[500ms] focus:border-[#15a362]" value={categoryInput.name} onChange={handleInput}/>
									<p className="text-red-600 text-[12px]">{errors.name}</p>

									<input type="file" name="image" className="w-[100%] py-[12px] mb-[6px] rounded outline-none duration-[500ms] focus:border-[#15a362]" onChange={handleImage}/>
									<p className="text-red-600 text-[12px]">{errors.image}</p>
								</label>
								<button type="submit" className="basis-fit uppercase font-[600] py-[12px] px-[24px] border-[#15a362] rounded border cursor-pointer duration-[500ms] hover:text-white hover:bg-[#15a362]">Store</button>
							</form>
						</section>
					</section>
				</section>
			</div>
		</div>
	);
}

export default CreateCategory;