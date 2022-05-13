import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

const IndexNews = () => {

	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	const index = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/news`);
		if(response.data.status === 200) {
			setNews(response.data.news);
			setLoading(false);
		}
	}

	const destroy = async(event, id) => {
		const deleting = event.currentTarget;
		deleting.innerText = 'Deleting';

		const response = await axios.delete(`http://127.0.0.1:8000/api/admin/news/${id}`);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			index();
		}
	}

	useEffect(() => {
		index();
	}, []);

	let newsTable = '';
	if(loading) {
		newsTable = <td className="px-[10px] py-[16px] text-left" colSpan="5">Loading...</td>
	} else {
		newsTable = news.map((item) => {
			return (
				<tr className="border-t" key={item.id}>
					<td className="px-[10px] py-[16px] text-left">{item.title}</td>
					<td className="px-[10px] py-[16px] text-left">{item.user.name}</td>
					<td className="px-[10px] py-[16px] text-left">{item.brief}</td>
					<td className="px-[10px] py-[16px] text-left">{item.image}</td>
					<td className="px-[10px] py-[16px] text-right">
						<Link to={`/admin/news/${item.id}/edit`} className="px-[10px] text-blue-500 duration-[500ms] hover:text-blue-700">
							<i className="fa-solid fa-pen-to-square"></i>
						</Link>
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
						<span className="text-[24px] font-[600] mr-[8px]">News</span>
						<Link to="/admin/news/create" className="text-[20px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]">
							<i className="fa-solid fa-circle-plus"></i>
						</Link>
					</div>
					
					<div className="flex overflow-auto">
						<table className="table-auto basis-[100%] min-w-[800px] bg-white rounded shadow-md">
							<thead>
								<tr>
									<th className="px-[10px] py-[16px] text-left">Title</th>
									<th className="px-[10px] py-[16px] text-left">Author</th>
									<th className="px-[10px] py-[16px] text-left">Brief</th>
									<th className="px-[10px] py-[16px] text-left">Image</th>
									<th className="px-[10px] py-[16px] text-right" rowSpan="2">Options</th>
								</tr>
							</thead>
							<tbody>
								{newsTable}
							</tbody>
						</table>
					</div>
				</section>
			</section>
		</div>
	</div>
	);
}

export default IndexNews;