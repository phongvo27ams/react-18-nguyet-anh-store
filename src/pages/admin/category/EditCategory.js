import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const EditCategory = () => {
	// Set the initial value 
	const [categoryInput, setCategory] = useState({
		name: ''
	});
	const [image, setImage] = useState([]);
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(true);

	// Get the id from URL
	const {id} = useParams();
	const navigate = useNavigate();

	// When the inputs change
	const handleInput = (event) => {
		event.persist();
		setCategory({...categoryInput, [event.target.name]: event.target.value});
	}
	// When the image change
	const handleImage = (event) => {
		setImage({image: event.target.files[0]});
	}

	// Get the category
	const edit = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/category/${id}/edit`);
		if(response.data.status === 200) {
			setCategory(response.data.category);
			setImage(response.data.category.image);
			setLoading(false);
		} else if(response.data.status === 404) {
			// If the id is not found
			// Sweet Alert
			swal('Warning', response.data.message);
			// Return to category index page
			navigate('/admin/category');
		}
	}

	// Update the category
	const update = async(event) => {
		event.preventDefault();

		// Append name and image (Line 17-19) to data
		const data = new FormData();
		data.append('name', categoryInput.name);
		data.append('image', image.image);

		document.getElementById('updateButton').disabled = true;
		document.getElementById('updateButton').innerText = 'Updating...';

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/category/${id}`, data);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
			// Return to category page
			navigate('/admin/category');
		} else {
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
			// Show the errors
			setErrors(response.data.errors);
		}
	}

	// Show the detail of category
	useEffect(() => {
		edit();
	}, []);

	let editForm = '';
	if(loading) {
		// While getting data from server, display Loading...
		editForm = <p>Loading...</p>
	} else {
		// When finish loading, loop through categories as item
		editForm =
			<form className="flex flex-wrap gap-[12px]" encType="multipart/form-data" onSubmit={update}>
				<label className="group relative basis-[100%]">
					<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Name</span>
					<input type="text" className="w-[100%] p-[12px] mb-[6px] rounded border outline-none duration-[500ms] focus:border-[#15a362]" name="name" value={categoryInput.name} onChange={handleInput}/>
					<p className="text-red-600 text-[12px]">{errors.name}</p>

					<img src={`http://127.0.0.1:8000/assets/images/category/${image}`} className="mt-[8px]"/>
					<input type="file" className="w-[100%] py-[12px] mb-[6px] rounded outline-none duration-[500ms] focus:border-[#15a362]" name="image" onChange={handleImage}/>
					<p className="text-red-600 text-[12px]">{errors.image}</p>
				</label>
				<button type="submit" className="basis-fit uppercase font-[600] py-[12px] px-[24px] border-[#15a362] rounded border cursor-pointer duration-[500ms] hover:text-white hover:bg-[#15a362]" id="updateButton">Update</button>
			</form>
	}

	return (
		<section className="relative min-h-screen p-[36px] bg-[#f5f6fe]">
			<div className="mb-[16px]">
				<span className="text-[24px] font-[600] mr-[8px]">Categories</span>
			</div>

			<section className="w-[100%] bg-white p-[20px] rounded-md shadow-md">
				<div className="flex justify-between items-center mb-[10px]">
					<p className="uppercase text-[20px] font-[600]">Edit</p>
					{/* Close Button */}
					<Link to="/admin/category">
						<button className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500">
							<i className="fa-solid fa-xmark"></i>
						</button>
					</Link>
				</div>
				{editForm}
			</section>
		</section>
	);
}

export default EditCategory;