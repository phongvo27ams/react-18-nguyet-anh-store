import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import '../../assets/css/main.css';
import '../../assets/font-awesome-6/6.1.1/css/all.min.css';

// ========== Styled Components ========== //
const HeaderContainer = styled.header`
	height: fit-content;
	width: 100%;
	padding: 0.75rem 2.25rem;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
`;

const NavigationToggle = styled.button`
	display: inline-block;
	color: var(--dark-green-color);
	font-weight: 600;
	font-size: 1.25rem;
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const Search = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin: 0 1.5rem;
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
		border: 2px solid var(--dark-green-color);
	}
	&:focus ~ .search-label {
		z-index: 0;
		color: var(--dark-green-color);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: #ffffff;
	}
	&:focus ~ .search-button {
		color: var(--dark-green-color);
	}
	&:not(:placeholder-shown).search-input:not(:focus) ~ .search-label {
		z-index: 0;
		color: var(--dark-green-color);
		top: -8px;
		padding: 0 2px;
		font-size: 12px;
		font-weight: bold;
		background-color: #ffffff;
	}
`;

const SearchLabel = styled.label`
	z-index: -1;
	position: absolute;
	top: 12px;
	left: 12px;
	color: var(--grey-text-color);
	background-color: white;
	cursor: text;
	transition: 200ms ease-in-out;
`;

const SearchButton = styled.button`
	position: absolute;
	font-size: 1rem;
	top: 12px;
	right: 12px;
	color: var(--grey-text-color);
	transition: 500ms ease-in-out;
`;

const Account = styled.div`
	position: relative;
	flex-basis: 36px;
`;

const AccountImage = styled.img`
	cursor: pointer;
	border-radius: 50%;
`;

const AccountList = styled.ul`
	visibility: hidden;
	z-index: 1;
	position: absolute;
	opacity: 0;
	margin-top: 8px;
	top: 10px;
	right: 0;
	width: 160px;
	background-color: white;
	border-width: 1px;
	border-radius: 6px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
	transition: 500ms ease-in-out;
	&.active {
		visibility: visible;
		opacity: 1;
		top: 34px;
	}
`;

const AccountLink = styled(Link)`
	display: block;
	padding: 10px 14px;
	&:hover {
		color: var(--dark-green-color);
		background-color: var(--light-green-background-color);
	}
`;

const Header = () => {
	// ========== JavaScript ========== //
	const account_toggle = () => {
		let accountOptions = document.getElementById('accountOptions');
		accountOptions.classList.toggle('active');
	}

	return (
		<HeaderContainer>
			<Container>
				<NavigationToggle id="navigationToggle">
					<i className="fa-solid fa-bars"></i>
				</NavigationToggle>

				<Search>
					<SearchInput className="search-input" type="text" placeholder=" "/>
					<SearchLabel className="search-label">Search</SearchLabel>

					<SearchButton className="search-button">
						<i className="fa-solid fa-magnifying-glass"></i>
					</SearchButton>
				</Search>

				<Account>
					<AccountImage id="accountToggle" src="https://via.placeholder.com/150x150" onClick={account_toggle} alt="account"/>

					<AccountList id="accountOptions">
						<li>
							<AccountLink to="#">My Account</AccountLink>
						</li>
						<li>
							<AccountLink to="#">Log Out</AccountLink>
						</li>
					</AccountList>
				</Account>
			</Container>
		</HeaderContainer>
	);
}

export default Header;