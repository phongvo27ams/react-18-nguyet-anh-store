import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import Navigation from '../../../components/admin/Navigation';

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
	background-color: var(--light-grey-background-color);
`;

const ContentTitle = styled.div`
	margin: 0 8px 16px 0;
	font-size: 24px;
	font-weight: 600;
`;

const ContentBody = styled.section`
	width: 100%;
	background-color: white;
	padding: 20px;
	border-radius: 6px;
	box-shadow: var(--shadow-medium);
`;

const ContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	font-size: 20px;
`;

const ContentHeaderTitle = styled.h3`
	text-transform: uppercase;
	font-weight: 600;
`;

const LinkClose = styled(Link)`
	padding: 1px 10px;
	border-radius: 6px;
	transition: 400ms ease-in-out;
	&:hover {
		color: var(--light-red-color);
	}
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	row-gap: 12px;
`;

const InputColumn = styled.div`
	display: grid;
	grid-template-columns: ${props => props.small ? "repeat(3, minmax(0, 1fr));" : "repeat(2, minmax(0, 1fr));"};
	width: 100%;
	column-gap: 12px;
`;

const InputContainer = styled.div`
	position: ${props => props.regular ? "relative" : "initial"};
	flex-basis: 100%;
`;

const RegularInput = styled.input`
	position: relative;
	z-index: 1;
	background-color: transparent;
	width: 100%;
	padding: 12px;
	border-width: 1px;
	border-radius: 6px;
	outline: none;
	transition: 300ms ease-in-out;
	&:focus {
		border: 2px solid var(--dark-green-color);
	}
	&:focus ~ .regular-label {
		z-index: 1;
		color: var(--dark-green-color);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
	&:not(:placeholder-shown).regular-input:not(:focus) ~ .regular-label {
		z-index: 1;
		color: var(--dark-green-color);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
`;

const Textarea = styled.textarea`
	position: relative;
	z-index: 1;
	background-color: transparent;
	width: 100%;
	padding: 12px;
	border-width: 1px;
	border-radius: 6px;
	outline: none;
	transition: 300ms ease-in-out;
	&:focus {
		border: 2px solid var(--dark-green-color);
	}
	&:focus ~ .regular-label {
		z-index: 1;
		color: var(--dark-green-color);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
	&:not(:placeholder-shown).regular-input:not(:focus) ~ .regular-label {
		z-index: 1;
		color: var(--dark-green-color);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
`;

const RegularLabel = styled.label`
	position: absolute;
	top: 14px;
	left: 12px;
	color: var(--grey-text-color);
	background-color: white;
	transition: 300ms ease-in-out;
`;

const Select = styled.select`
	width: 100%;
	padding: 12px;
	margin-bottom: 6px;
	border-radius: 6px;
	border-width: 1px;
	outline: none;
	transition: 300ms ease-in-out;
	&:hover {
		border-color: var(--dark-green-color);
	}
`;

const FileInput = styled.input`
	width: 100%;
	padding: 12px;
	border-width: 1px;
	border-radius: 6px;
	cursor: pointer;
	transition: 200ms ease-in-out;
	&:hover {
		box-shadow: var(--shadow-medium);
	}
`;

const InputError = styled.p`
	color: var(--dark-red-color);
	font-size: 12px;
	margin: 6px 0;
`;

const SubmitButton = styled.button`
	text-transform: uppercase;
	font-weight: 600;
	padding: 12px 24px;
	border-width: 1px;
	border-color: var(--dark-green-color);
	border-radius: 5px;
	cursor: pointer;
	transition: 500ms ease-in-out;
	&:hover {
		color: white;
		background-color: var(--dark-green-color);
	}
`;

// ========== React Function Component ========== //
const CreateProduct = () => {
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

	const handleInput = (event) => {
		event.persist();
		setProduct({...productInput, [event.target.name]: event.target.value});
	}

	const handleImage = (event) => {
		setImage({image: event.target.files[0]});
	}

	const create = async() => {
		const response = await axios.get(`http://127.0.0.1:8000/api/admin/product/create`);
		if(response.status === 200) {
			setSubCategories(response.data.subCategories);
		}
	}

	const store = async(event) => {
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

		const response = await axios.post(`http://127.0.0.1:8000/api/admin/product`, formData);
		if(response.data.status === 200) {
			setProduct({...productInput,
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
			swal('Success', response.data.message);
			setErrors([]);
		} else {
			setErrors(response.data.errors);
		}
	}

	useEffect(() => {
		create()
	}, []);

	return(
		<Main>
			<Navigation/>

			<Section>
				<Header/>

				<Content>
					<ContentTitle>Products</ContentTitle>
						
					<ContentBody>
						<ContentHeader>
							<ContentHeaderTitle>Create</ContentHeaderTitle>
							
							<LinkClose to="/admin/product">
								<i className="fa-solid fa-xmark"></i>
							</LinkClose>
						</ContentHeader>
						
						<Form encType="multipart/form-data" onSubmit={store}>
							<InputColumn>
								<InputContainer regular>
									<RegularInput type="text" className="regular-input" name="name" value={productInput.name} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Name</RegularLabel>
									<InputError>{errors.name}</InputError>
								</InputContainer>

								<InputContainer regular>
									<Select name="sub_category_id" value={productInput.sub_category_id} onChange={handleInput}>
										<option value="">Select a sub-category...</option>
										{subCategories.map((item) => {
											return (
												<option key={item.id} value={item.id}>{item.name}</option>
											)
										})}
									</Select>
									<InputError>{errors.sub_category_id}</InputError>
								</InputContainer>
							</InputColumn>
							
							<InputColumn small>
								<InputContainer regular>
									<RegularInput type="number" className="regular-input" name="unit_price" value={productInput.unit_price} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Unit Price</RegularLabel>
									<InputError>{errors.unit_price}</InputError>
								</InputContainer>

								<InputContainer regular>
									<RegularInput type="number" className="regular-input" name="sale_price" value={productInput.sale_price} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Sale Price</RegularLabel>
									<InputError>{errors.sale_price}</InputError>
								</InputContainer>

								<InputContainer regular>
									<RegularInput type="number" className="regular-input" min="1" max="5" name="rate" value={productInput.rate} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Rate</RegularLabel>
									<InputError>{errors.rate}</InputError>
								</InputContainer>
							</InputColumn>
							
							<InputColumn small>
								<InputContainer regular>
									<RegularInput type="text" className="regular-input" name="vendor" value={productInput.vendor} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Vendor</RegularLabel>
									<InputError>{errors.vendor}</InputError>
								</InputContainer>

								<InputContainer regular>
									<RegularInput type="text" className="regular-input" name="sku" value={productInput.sku} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">SKU</RegularLabel>
									<InputError>{errors.sku}</InputError>
								</InputContainer>

								<InputContainer regular>
									<Select name="availability" onChange={handleInput}>
										<option value="">Select availability...</option>
										<option value="In stock">In stock</option>
										<option value="Out of stock">Out of stock</option>
									</Select>
									<InputError>{errors.availability}</InputError>
								</InputContainer>
							</InputColumn>

							<InputContainer regular>
								<Textarea type="text" className="regular-input" name="description" value={productInput.description} onChange={handleInput} placeholder=" "></Textarea>
								<RegularLabel className="regular-label">Description</RegularLabel>
								<InputError>{errors.description}</InputError>
							</InputContainer>

							<InputColumn>
								<InputContainer regular>
									<RegularInput type="text" className="regular-input" name="color" value={productInput.color} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Color</RegularLabel>
									<InputError>{errors.color}</InputError>
								</InputContainer>

								<InputContainer regular>
									<RegularInput type="text" className="regular-input" name="size" value={productInput.size} onChange={handleInput} placeholder=" "/>
									<RegularLabel className="regular-label">Size</RegularLabel>
									<InputError>{errors.size}</InputError>
								</InputContainer>
							</InputColumn>

							<InputContainer>
								<FileInput type="file" name="image" onChange={handleImage}/>
								<InputError>{errors.image}</InputError>
							</InputContainer>

							<SubmitButton type="submit">Create</SubmitButton>
						</Form>
					</ContentBody>
				</Content>
			</Section>
		</Main>
	)
}

export default CreateProduct;