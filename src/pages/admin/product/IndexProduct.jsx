import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import Navigation from '../../../components/admin/Navigation';
import Loader from '../../../components/admin/Loader';

// ========== Styled Components ========== //
const Main = styled.main`
	max-width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 40% 60%;
	@media screen and (min-width: 1024px) {
		grid-template-columns: 24% 76%;
	}
	@media screen and (min-width: 1280px) {
		grid-template-columns: 20% 80%;
	}
`;

const Section = styled.section`
	grid-column: span 2 / span 2;
	grid-template-rows: repeat(2, minmax(0, 1fr));
	@media screen and (min-width: 1024px) {
		grid-column: span 1 / span 1;
	}
`;

const Content = styled.section`
	position: relative;
	min-height: 100vh;
	padding: 36px;
	background-color: var(--grey-100);
`;

const ContentTitle = styled.div`
	margin-bottom: 16px;
	font-size: 24px;
	font-weight: 600;
`;

const LinkCreate = styled(Link)`
	font-size: 20px;
	color: var(--grey-500);
	margin-left: 8px;
	transition: 500ms ease-in-out;
	&:hover {
		color: var(--blue-400);
	}
`;

const TableContainer = styled.div`
	display: flex;
	overflow: auto;
	@media screen and (min-width: 768px) {
		overflow: visible;
	}
`;

const Table = styled.table`
	table-layout: auto;
	flex-basis: 100%;
	min-width: 640px;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
	padding: 16px 10px;
	text-align: left;
	&:last-child {
		text-align: right;
	}
`;

const TableRow = styled.tr`
	border-top-width: 1px;
`;

const TableData = styled.td`
	padding: 16px 10px;
	&:last-child {
		text-align: right;
	}
`;

const TableDataImage = styled.img`
	width: 80px;
`;

const LinkEdit = styled(Link)`
	padding: 0 10px;
	color: rgb(59 130 246);
	transition: 500ms linear;
	&:hover {
		color: rgb(29 78 216);
	}
`;

const LinkDestroy = styled.button`
	padding: 0 10px;
	color: rgb(239 68 68);
	transition: 500ms linear;
	&:hover {
		color: rgb(185 28 28);
	}
`;

const TableDataLoader = styled.td`
	padding: 16px 10px;
`;

// ========== React Function Component ========== //
const IndexProduct = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const index = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/product`);
		if(response.data.status === 200) {
			setProducts(response.data.products);
			setLoading(false);
		}
	}

	const destroy = async(event, id) => {
		const deleting = event.currentTarget;
		deleting.innerText = 'Deleting';

		const response = await axios.delete(`http://127.0.0.1:8000/api/admin/product/${id}`);
		if(response.data.status === 200) {
			// Sweet Alert
			swal('Success', response.data.message);
			index();
		}
	}

	useEffect(() => {
		index();
	}, []);

	let productsTable = '';
	if(loading) {
		productsTable =
			<TableRow>
				<TableDataLoader colSpan="12"><Loader/></TableDataLoader>
			</TableRow>
	} else {
		productsTable = products.map((item) => {
			return (
				<TableRow key={item.id}>
					<TableData>{item.name}</TableData>
					<TableData>{item.sub_category.name}</TableData>
					<TableData>{item.unit_price}</TableData>
					<TableData>{item.sale_price}</TableData>
					<TableData>{item.rate}</TableData>
					<TableData>{item.vendor}</TableData>
					<TableData>{item.sku}</TableData>
					<TableData>{item.availability}</TableData>
					<TableData>{item.color}</TableData>
					<TableData>{item.size}</TableData>
					<TableData>
						<TableDataImage src={`http://127.0.0.1:8000/assets/images/product/${item.image}`}/>
					</TableData>

					<TableData>
						<LinkEdit to={`/admin/product/${item.id}/edit`}>
							<i className="fa-solid fa-pen-to-square"></i>
						</LinkEdit>

						<LinkDestroy onClick={(event) => destroy(event, item.id)}>
							<i className="fa-solid fa-trash-can"></i>
						</LinkDestroy>
					</TableData>
				</TableRow>
			);
		});
			
	}

	return (
		<Main>
			<Navigation/>

			<Section>
				<Header/>

				<Content>
					<ContentTitle>
						Products

						<LinkCreate to="/admin/product/create">
							<i className="fa-solid fa-circle-plus"></i>
						</LinkCreate>
					</ContentTitle>
					
					<TableContainer>
						<Table>
							<thead>
								<tr>
									<TableHeader>Name</TableHeader>
									<TableHeader>Sub-category</TableHeader>
									<TableHeader>Unit Price</TableHeader>
									<TableHeader>Sale Price</TableHeader>
									<TableHeader>Rate</TableHeader>
									<TableHeader>Vendor</TableHeader>
									<TableHeader>SKU</TableHeader>
									<TableHeader>Availability</TableHeader>
									<TableHeader>Color</TableHeader>
									<TableHeader>Size</TableHeader>
									<TableHeader>Image</TableHeader>
									
									<TableHeader rowSpan="2">Options</TableHeader>
								</tr>
							</thead>

							<tbody>
								{productsTable}
							</tbody>
						</Table>
					</TableContainer>
				</Content>
			</Section>
		</Main>
	);
}

export default IndexProduct;