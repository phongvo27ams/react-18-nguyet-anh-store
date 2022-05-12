import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

const Product = () => {
	const [subCategories, setSubCategories] = useState([]);
	const [productInput, setProduct] = useState({
		name: '',
		sub_category_id: '',
		unit_price: '',
		sale_price: '',
		rate: '',
		vendor: '',
		sku: '',
		availability: '',
		description: '',
		color: '',
		size: ''
	});
	const [image, setImage] = useState('');
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(true);

	const {id} = useParams();
	const navigate = useNavigate();

	const handleInput = (event) => {
		event.persist();
		setProduct({...productInput, [event.target.name]: event.target.value});
	}

	const handleImage = (event) => {
		setImage({image: event.target.files[0]});
	}

	const edit = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/product/${id}/edit`);
		if(response.data.status === 200) {
			setSubCategories(response.data.subCategories);
			setProduct(response.data.product);
			setLoading(false);
		} else if(response.data.status === 404) {
			swal('Warning', response.data.message);
			navigate('/admin/product');
		}
	}

	const update = async(event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('name', productInput.name);
		formData.append('sub_category_id', productInput.sub_category_id);
		formData.append('unit_price', productInput.unit_price);
		formData.append('sale_price', productInput.sale_price);
		formData.append('rate', productInput.rate);
		formData.append('vendor', productInput.vendor);
		formData.append('sku', productInput.sku);
		formData.append('availability', productInput.availability);
		formData.append('description', productInput.description);
		formData.append('color', productInput.color);
		formData.append('size', productInput.size);
		formData.append('image', image.image);

		document.getElementById('updateButton').disabled = true;
		document.getElementById('updateButton').innerText = 'Updating...';

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/product/${id}`, formData);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
			// Return to category page
			navigate('/admin/product');
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

	let editForm = '';
	if(loading) {
		editForm = <p>Loading...</p>
	} else {
		editForm =
		<form className="flex flex-wrap gap-[10px]" encType="multipart/form-data" onSubmit={update}>
		<label className="group relative basis-[60%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Name</span>
			<input type="text" className="w-[100%] p-[12px] mb-[6px] rounded border outline-none duration-[500ms] focus:border-[#15a362]" name="name" value={productInput.name} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.name}</p>
		</label>

		<label className="group relative basis-[36%]">
			<select className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="sub_category_id" value={productInput.sub_category_id} onChange={handleInput}>
				<option value="">Select a sub-category...</option>
				{subCategories.map((item) => {
					return (
						<option key={item.id} value={item.id}>{item.name}</option>
					)
				})}
			</select>
			<p className="text-red-600 text-[12px]">{errors.sub_category_id}</p>
		</label>

		<label className="group relative basis-[30%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Unit Price</span>
			<input type="number" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="unit_price" value={productInput.unit_price} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.unit_price}</p>
		</label>

		<label className="group relative basis-[30%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Sale Price</span>
			<input type="number" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="sale_price" value={productInput.sale_price} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.sale_price}</p>
		</label>

		<label className="group relative basis-[30%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Rate</span>
			<input type="number" min="1" max="5" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="rate" value={productInput.rate} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.rate}</p>
		</label>

		<label className="group relative basis-[30%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Vendor</span>
			<input type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="vendor" value={productInput.vendor} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.vendor}</p>
		</label>

		<label className="group relative basis-[30%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">SKU</span>
			<input type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="sku" value={productInput.sku} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.sku}</p>
		</label>

		<label className="group relative basis-[30%]">
			<select className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="availability" value={productInput.availability} onChange={handleInput}>
				<option value="">Select availability...</option>
				<option value="In stock">In stock</option>
				<option value="Out of stock">Out of stock</option>
			</select>
			<p className="text-red-600 text-[12px]">{errors.availability}</p>
		</label>

		<label className="group relative basis-[100%]">
			<textarea type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="description" value={productInput.description} onChange={handleInput} placeholder="Description..."></textarea>
			<p className="text-red-600 text-[12px]">{errors.description}</p>
		</label>

		<label className="group relative basis-[45%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Color</span>
			<input type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="color" value={productInput.color} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.color}</p>
		</label>

		<label className="group relative basis-[45%]">
			<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Size</span>
			<input type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="size" value={productInput.size} onChange={handleInput}/>
			<p className="text-red-600 text-[12px]">{errors.size}</p>
		</label>

		<input type="file" className="w-[100%] py-[12px] mb-[6px] rounded outline-none duration-[100ms] focus:border-[#15a362]" name="image" onChange={handleImage}/>
		<p className="w-[100%] text-red-600 text-[12px]">{errors.image}</p>

		<button type="submit" id="updateButton" className="basis-fit uppercase font-[600] py-[12px] px-[24px] border-[#15a362] rounded border cursor-pointer duration-[500ms] hover:text-white hover:bg-[#15a362]">Update</button>
	</form>
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
							<span className="text-[24px] font-[600] mr-[8px]">Products</span>
						</div>

						<section className="w-[100%] bg-white p-[20px] rounded-md shadow-md">
							<div className="flex justify-between items-center mb-[10px]">
								<p className="uppercase text-[20px] font-[600]">Edit</p>
								<Link to="/admin/product" className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500">
									<i className="fa-solid fa-xmark"></i>
								</Link>
							</div>
							{editForm}
						</section>
					</section>
				</section>
			</div>
		</div>
	);
}

export default Product;