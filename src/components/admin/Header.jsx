import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import '../../assets/css/main.css';
import '../../assets/font-awesome-6/6.1.1/css/all.min.css';

// ========== STYLED COMPONENTS ========== //
const HeaderContainer = styled.header`
	height: fit-content;
	padding: 12px 36px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
`;

const HeaderNavigationToggle = styled.button`
	display: inline-block;
	color: var(--blue-400);
	font-weight: 600;
	font-size: 20px;
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const HeaderSearch = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin: 0 24px;
	@media screen and (min-width: 1024px) {
		margin-left: 0;
	}
`;

const SearchInput = styled.input`
	background-color: transparent;
	width: 100%;
	padding: 12px;
	outline: none;
	border-radius: 6px;
	border-width: 1px;
	transition: 200ms ease-in-out;
	&:focus {
		border: 2px solid var(--blue-400);
	}
	&:focus ~ .label {
		z-index: 0;
		color: var(--blue-400);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: white;
	}
	&:focus ~ .search-button {
		color: var(--blue-400);
	}
	&:not(:placeholder-shown).input:not(:focus) ~ .label {
		z-index: 0;
		top: -8px;
		padding: 0 2px;
		background-color: white;
	}
`;

const SearchLabel = styled.label`
	z-index: -1;
	position: absolute;
	top: 12px;
	left: 12px;
	color: var(--grey-500);
	background-color: white;
	cursor: text;
	transition: 200ms ease-in-out;
`;

const SearchButton = styled.button`
	position: absolute;
	font-size: 16px;
	top: 12px;
	right: 12px;
	color: var(--grey-500);
	transition: 500ms ease-in-out;
`;

const HeaderAccount = styled.div`
	position: relative;
	flex-basis: 36px;
`;

const AccountImage = styled.img`
	cursor: pointer;
	border-radius: 50%;
`;

const AccountOptions = styled.ul`
	visibility: hidden;
	opacity: 0;
	z-index: 1;
	position: absolute;
	margin-top: 8px;
	top: 31px;
	right: 0;
	width: 160px;
	background-color: white;
	border-width: 1px;
	border-radius: 6px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
	transition: 400ms ease-in-out;
	&.active {
		visibility: visible;
		opacity: 1;
	}
`;

const AccountLink = styled(Link)`
	display: block;
	padding: 10px 14px;
	&:hover {
		color: var(--blue-400);
		background-color: var(--blue-100);
	}
`;

// ========== REACT FUNCTION COMPONENT ========== //
const Header = () => {
	// ========== Account Options Toogle ========== //	
	const account_toggle = () => {
		let accountOptions = document.getElementById('accountOptions');
		accountOptions.classList.toggle('active');
	}

	return (
		<HeaderContainer>
			<HeaderNavigationToggle id="navigationToggle">
				<i className="fa-solid fa-bars"></i>
			</HeaderNavigationToggle>

			<HeaderSearch>
				<SearchInput className="input" type="text" placeholder=" "/>
				<SearchLabel className="label">Search</SearchLabel>

				<SearchButton className="search-button">
					<i className="fa-solid fa-magnifying-glass"></i>
				</SearchButton>
			</HeaderSearch>

			<HeaderAccount>
				<AccountImage id="accountToggle" src="https://via.placeholder.com/150x150" onClick={account_toggle} alt="account"/>

				<AccountOptions id="accountOptions">
					<li>
						<AccountLink to="#">My Account</AccountLink>
					</li>
					<li>
						<AccountLink to="#">Log Out</AccountLink>
					</li>
				</AccountOptions>
			</HeaderAccount>
		</HeaderContainer>
	);
}

export default Header;