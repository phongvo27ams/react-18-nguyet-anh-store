import React from 'react';
import styled from 'styled-components';

import '../../assets/css/main.css';

// ========== STYLED COMPONENTS ========== //
const HeaderContainer = styled.header`
	width: 100%;
	padding: 0 10px;
	margin: 0 auto;
	@media screen and (min-width: 576px) {
		max-width: 546px;
	}
	@media screen and (min-width: 790px) {
		max-width: 770px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 990px;
	}
	@media screen and (min-width: 1230px) {
		max-width: 1200px;
	}
`;

// ---------- Navigation Header ---------- //
const Navigation = styled.nav`
	display: none;
	margin: 0 auto;
	justify-content: space-between;
	height: 52px;
	
	font-weight: 300;
	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: center;
	}
`;

const UnorderedLists = styled.ul`
	display: flex;
	margin: 0;
`;

const ListItem = styled.li`
	&:first-child a {
		padding-left: 0;
	}
	&:last-child a {
		padding-right: 0;
	}
`;

const NavigationLink = styled.a`
	padding: 18px 8px;
	color: var(--grey-800);
	margin: 0px;
	&:hover {
		color: var(--blue-400);
	}
`;

// ---------- Navigation Body ---------- //
const NavigationBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	margin-bottom: 15px;
	min-height: 58px;
	justify-content: center;
	@media screen and (min-width: 1024px) {
		justify-content: space-between;
	}
`;

const HomeLink = styled.a`
	width: fit-content;
	display: block;
	text-align: center;
	font-family: 'Lobster';
	font-size: 36px;
	font-weight: 400;
	position: relative;
	-webkit-background-clip: text;
	color: transparent;
	background-image: linear-gradient(to right, var(--blue-400), var(--purple-300));
	transition: 500ms ease-in-out;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		bottom: 10px;
		left: 0;
		background-image: linear-gradient(to right, var(--blue-400), var(--purple-300));
		transform-origin: bottom right;
		transition: transform 700ms ease-in-out;
	}
	&:hover:after {
		transform: scaleX(1);
  		transform-origin: bottom left;
	}
	@media screen and (min-width: 1024px) {
		width: fit-content;
		display: flex;
	}
`;

const FlexDivision = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	@media screen and (min-width: 1024px) {
		width: fit-content;
	}
`;

const ContactInfomation = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;
	margin-top: 10px;
	font-weight: 300;
	@media screen and (min-width: 1024px) {
		margin-top: 0;
		text-align: right;
	}

	& p {
		width: 100%;
	}
`;

const ContactTelephone = styled.p`
	font-size: 18px;
	font-weight: 500;
	width: 100%;
`;

const CartContainer = styled.a`
	display: none;
	position: relative;
	margin-left: 48px;
	&:hover {
		& .cart-icon {
			fill: var(--grey-800);
		}
		& .cart-quantity {
			background-color: var(--grey-800);
		}
	}
	@media screen and (min-width: 1024px) {
		display: flex;
	}
`;

const CartIcon = styled.span`
	align-self: center;
	transition: 300ms ease-in-out;
	& .cart-icon {
		width: 36px;
		height: 36px;
		fill: var(--blue-400);
	}
`;

const CartQuantity = styled.span`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 60px;
	font-size: 12px;
	font-weight: 600;
	padding: 2px 8px;
	color: white;
	background-color: var(--red-400);
	border-radius: 50%;
	transition: 300ms ease-in-out;
`;

const CartTitle = styled.p`
	align-self: center;
	margin-left: 16px;
	font-size: 14px;
	text-transform: uppercase;
	transition: 300ms ease-in-out;
`;

// ---------- Navigation Footer ---------- //
const NavigationFooter = styled.div`
	display: none;
	@media screen and (min-width: 1024px) {
		display: grid;
		grid-template-columns: 228px 722px;
		margin: 0 auto;
		gap: 20px;
	}
	@media screen and (min-width: 1230px) {
		grid-template-columns: 280px 880px;
	}
`;

const CategoryTitle = styled.div`
	text-transform: uppercase;
	font-size: 17px;
	font-weight: 500;
	padding: 12px 18px;
	border-radius: 6px 6px 0 0;
	color: white;
	background-color: var(--blue-400);
	cursor: default;
`;

const InputContainer = styled.div`
	position: relative;
`;

const Input = styled.input`
	z-index: 1;
	position: relative;
	background-color: transparent;
	width: 100%;
	padding: 13.5px 48px;
	border-width: 1px;
	border-radius: 6px;
	outline: none;
	transition: 400ms ease-in-out;
	&:focus,
	&:not(:placeholder-shown).input:not(:focus) {
		border: 1px solid var(--blue-400);
	}

	&:focus + .search-link,
	&:not(:placeholder-shown).input:not(:focus) + .search-link {
		color: var(--blue-400);
	}

	&:focus ~ .label,
	&:not(:placeholder-shown).input:not(:focus) ~ .label {
		z-index: 1;
		top: -8px;
		left: 24px;
		color: var(--blue-400);
		padding: 0 4px;
		font-size: 12px;
		font-weight: 600;
		background-color: white;
	}
`;

const SearchLink = styled.a`
	z-index: 2;
	position: absolute;
	left: 0;
	color: var(--grey-500);
	font-size: 16px;
	padding: 0 10px;
	margin: 14px 0 0 8px;
	transition: 400ms ease-in-out;
	&:hover {
		color: var(--blue-400);
	}

	& svg {
		width: 22px;
		height: 22px;
	}
`;

const Label = styled.label`
	position: absolute;
	top: 14px;
	left: 48px;
	color: var(--grey-500);
	transition: 400ms ease-in-out;
`;

// ========== REACT FUNCTION COMPONENT ========== //
const Header = () => {
	return (
		<HeaderContainer>
			<Navigation>
				<UnorderedLists>
					<ListItem><NavigationLink href="">Home</NavigationLink></ListItem>
					<ListItem><NavigationLink href="">News</NavigationLink></ListItem>
					<ListItem><NavigationLink href="">About Us</NavigationLink></ListItem>
					<ListItem><NavigationLink href="">Contact Us</NavigationLink></ListItem>
				</UnorderedLists>
				<UnorderedLists>
					<ListItem><NavigationLink href="">Log In</NavigationLink></ListItem>
					<ListItem><NavigationLink href="">Register</NavigationLink></ListItem>
				</UnorderedLists>
			</Navigation>

			<NavigationBody>
				<HomeLink href="">Nguyet Anh Store</HomeLink>

				<FlexDivision>
					<ContactInfomation>
						<ContactTelephone>Call Us: +84 3951 08473</ContactTelephone>
						<p>From 8:00 to 21:00 (Mon-Sun)</p>
					</ContactInfomation>

					<CartContainer href="">
						<CartIcon>
							<svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
								<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
								<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
								<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
							</svg>
						</CartIcon>
						<CartQuantity className="cart-quantity">1</CartQuantity>
						<CartTitle>My cart</CartTitle>
					</CartContainer>
				</FlexDivision>
			</NavigationBody>

			<NavigationFooter>
				<CategoryTitle>Categories</CategoryTitle>
				
				<form action="">
					<InputContainer>
						<Input type="text" className="input" placeholder=" "/>
						<SearchLink href="" className="search-link">
							<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  								<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
							</svg>
						</SearchLink>
						<Label className="label">Search Products</Label>
					</InputContainer>
				</form>
			</NavigationFooter>
		</HeaderContainer>
	);
}

export default Header;