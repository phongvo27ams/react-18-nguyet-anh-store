import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import Navigation from '../../../components/admin/Navigation';
import Loader from '../../../components/admin/Loader';

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
		categoriesTable = 
			<tr>
				<td colSpan="3" className="loader"><Loader/></td>
			</tr>
	} else {
		// When finish loading, loop through categories as item
		categoriesTable = categories.map((item) => {
			return (
				<tr key={item.id}>
					<td>{item.name}</td>
					<td>
						<img src={`http://127.0.0.1:8000/assets/images/category/${item.image}`} atl="category-image"/>
					</td>
					<td>
						<Link to={`/admin/category/${item.id}/edit`}>
							<i className="fa-solid fa-pen-to-square"></i>
						</Link>
						{/* Call the destroy function with event and id */}
						<button onClick={(event) => destroy(event, item.id)}>
							<i className="fa-solid fa-trash-can"></i>
						</button>
					</td>
				</tr>
			);
		});
	}

	return (
		<section className="main-container">
			<Navigation/>
			<section className="content-wrapper">
				<Header/>
				<section className="content-container">
					<div className="content-title">
						<span>Categories</span>
						<Link to="/admin/category/create">
							<button>
								<i className="fa-solid fa-circle-plus"></i>
							</button>
						</Link>
					</div>
					
					<div className="table-container">
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Image</th>
									<th rowSpan="2">Options</th>
								</tr>
							</thead>
							<tbody>
								{categoriesTable}
							</tbody>
						</table>
					</div>
				</section>
			</section>
		</section>
	);
}

export default IndexCategory;