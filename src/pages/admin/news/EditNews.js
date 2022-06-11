import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

const EditNews = () => {
	const [newsInput, setNews] = useState({
		title: '',
		brief: '',
		content: '',
		image: '',
	});
	const [image, setImage] = useState('');
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(true);

	const {id} = useParams();
	const navigate = useNavigate();

	const handleInput = (event) => {
		event.persist();
		setNews({...newsInput, [event.target.name]: event.target.value});
	}

	const handleImage = (event) => {
		setImage({image: event.target.files[0]});
	}

	const edit = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/news/${id}/edit`);
		if(response.data.status === 200) {
			setNews(response.data.news);
			setLoading(false);
		} else if(response.data.status === 404) {
			swal('Warning', response.data.message);
			navigate('/admin/news');
		}
	}

	const update = async(event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('title', newsInput.title);
		formData.append('brief', newsInput.brief);
		formData.append('content', newsInput.content);
		formData.append('image', image.image);

		document.getElementById('updateButton').disabled = true;
		document.getElementById('updateButton').innerText = 'Updating...';

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/news/${id}`, formData);
		if(response.data.status === 200) {
			swal('Success', response.data.message);
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
			navigate('/admin/news');
		} else {
			document.getElementById('updateButton').disabled = false;
			document.getElementById('updateButton').innerText = 'Update';
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
				<label className="group relative basis-[100%]">
					<span className="absolute top-[12px] left-[10px] text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px] bg-white duration-[500ms]">Title</span>
					<input type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="title" value={newsInput.title} onChange={handleInput}/>
					<p className="text-red-600 text-[12px]">{errors.title}</p>
				</label>

				<label className="group relative basis-[100%]">
					<textarea type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="brief" value={newsInput.brief} onChange={handleInput} placeholder="Brief..."></textarea>
					<p className="text-red-600 text-[12px]">{errors.brief}</p>
				</label>

				<label className="group relative basis-[100%]">
					<textarea type="text" className="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" name="content" value={newsInput.content} onChange={handleInput} placeholder="Content..."></textarea>
					<p className="text-red-600 text-[12px]">{errors.content}</p>
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
							<span className="text-[24px] font-[600] mr-[8px]">News</span>
						</div>
							
						<section className="w-[100%] bg-white p-[20px] rounded-md shadow-md">
							<div className="flex justify-between items-center mb-[10px]">
								<p className="uppercase text-[20px] font-[600]">Edit</p>
								{/* Close Button */}
								<Link to="/admin/news">
									<button className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500">
										<i className="fa-solid fa-xmark"></i>
									</button>
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

export default EditNews;