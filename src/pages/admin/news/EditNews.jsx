import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
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
		color: var(--red-400);
	}
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
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
		border: 2px solid var(--blue-400);
	}
	&:focus ~ .regular-label {
		z-index: 1;
		color: var(--blue-400);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
	&:not(:placeholder-shown).regular-input:not(:focus) ~ .regular-label {
		z-index: 1;
		color: var(--blue-400);
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
		border: 2px solid var(--blue-400);
	}
	&:focus ~ .regular-label {
		z-index: 1;
		color: var(--blue-400);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
	&:not(:placeholder-shown).regular-input:not(:focus) ~ .regular-label {
		z-index: 1;
		color: var(--blue-400);
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
	color: var(--grey-500);
	background-color: white;
	transition: 200ms ease-in-out;
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
	color: var(--red-400);
	font-size: 12px;
	margin: 6px 0;
`;

const SubmitButton = styled.button`
	text-transform: uppercase;
	font-weight: 600;
	padding: 12px 24px;
	border-width: 1px;
	border-color: var(--blue-400);
	border-radius: 5px;
	cursor: pointer;
	transition: 500ms ease-in-out;
	&:hover {
		color: white;
		background-color: var(--blue-400);
	}
`;

// ========== React Function Component ========== //
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
		editForm = <Loader/>
	} else {
		editForm =
			<Form encType="multipart/form-data" onSubmit={update}>
				<InputContainer regular>
					<RegularInput type="text" className="regular-input" name="title" value={newsInput.title} onChange={handleInput} placeholder=" "/>
					<RegularLabel className="regular-label">Title</RegularLabel>
					<InputError>{errors.title}</InputError>
				</InputContainer>

				<InputContainer regular>
					<Textarea className="regular-input" name="brief" value={newsInput.brief} onChange={handleInput} placeholder=" "></Textarea>
					<RegularLabel className="regular-label">Brief</RegularLabel>
					<InputError>{errors.brief}</InputError>
				</InputContainer>

				<InputContainer regular>
					<Textarea className="regular-input" name="content" value={newsInput.content} onChange={handleInput} placeholder=" "></Textarea>
					<RegularLabel className="regular-label">Content</RegularLabel>
					<InputError>{errors.content}</InputError>
				</InputContainer>

				<InputContainer>
					<FileInput type="file" name="image" onChange={handleImage}/>
					<InputError>{errors.image}</InputError>
				</InputContainer>

				<SubmitButton type="submit">Create</SubmitButton>
			</Form>		
	}

	return (
		<Main>
			<Navigation/>

			<Section>
				<Header/>

				<Content>
					<ContentTitle>News</ContentTitle>
						
					<ContentBody>
						<ContentHeader>
							<ContentHeaderTitle>Edit</ContentHeaderTitle>

							<LinkClose to="/admin/news">
								<i className="fa-solid fa-xmark"></i>
							</LinkClose>
						</ContentHeader>

						{editForm}
					</ContentBody>
				</Content>
			</Section>
		</Main>
	);
}

export default EditNews;