import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import Navigation from '../../../components/admin/Navigation';

import '../../../assets/css/pages/admin/category/CreateCategory.css';

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
		<section className="main-container">
			<Navigation/>
			<section className="content-wrapper">
				<Header/>
				<section className="content-container">
					<div className="content-title">
						<span>Categories</span>
					</div>
					
					<section className="content-body">
						<div className="header">
							<h3>Create</h3>
							<Link to="/admin/category">
								<button>
									<i className="fa-solid fa-xmark"></i>
								</button>
							</Link>
						</div>
						<form encType="multipart/form-data" onSubmit={store}>
							<div className="input-container">
								{/* When the input changed, set the name as current typed value (event.target.value) */}
								<input type="text" className="name" name="name" value={categoryInput.name} onChange={handleInput} placeholder=" "/>
								<label>Name</label>
								<p>{errors.name}</p>
							</div>
							<div className="file-container">
								<input type="file" name="image" onChange={handleImage}/>
								<p>{errors.image}</p>
							</div>
							<button type="submit">Store</button>
						</form>
					</section>
				</section>
			</section>
		</section>
	);
}

export default CreateCategory;