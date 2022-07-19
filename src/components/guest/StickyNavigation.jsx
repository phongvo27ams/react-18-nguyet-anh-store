import React, {useEffect} from 'react';
import styled from 'styled-components';

import PrimaryNavigation from './PrimaryNavigation';

// ========== STYLED COMPONENTS ========== //
const StickyNavigationContainer = styled.nav`
	position: fixed;
	z-index: 3;
	top: -50px;
	width: 100%;
	background-color: white;
	box-shadow: var(--shadow-medium);
	transition: 800ms ease-in-out;
	&.active {
		top: 0;
	}
`;

const StickyNavigationContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
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

const StickyNavigationGroup = styled.ul`
	display: flex;
	align-items: center;
	& li:last-child a {
		padding-right: 0;
	}
`;

const NavigationToggleContainer = styled.nav`
	position: relative;
`;

const NavigationToggle = styled.button`
	display: none;
	text-transform: uppercase;
	text-align: left;
	font-size: 14px;
	font-weight: 500;
	padding: 10px 20px;
	margin-right: 20px;
	border-radius: 6px;
	color: white;
	background-color: var(--blue-400);
	width: 200px;
	transition: 800ms ease-in-out;
	@media screen and (min-width: 1024px) {
		display: block;
	}
	&.active {
		border-radius: 6px 6px 0px 0px;
	}
`;

const PrimaryNavigationContainer = styled.div`
	display: block;
	position: absolute;
	z-index: 4;
	width: 200px;
	height: 0;
	overflow: hidden;
	transition: 800ms ease-in-out;
	&.active {
		height: 500px;
	}
`;

const NavigationLink = styled.a`
	padding: 12px 8px;
	font-weight: 300;
	&:hover {
		color: var(--blue-400);
	}
`;

// ========== REACT FUNCTION COMPONENT ========== //
const StickyNavigation = () => {
	useEffect(() => {
		show_sticky_navigation();
		show_navigation();
	}, []);

	// ---------- Show the sticky navigation when scrolling down ---------- //
	const show_sticky_navigation = () => {
		const stickyNavigation = document.getElementById('stickyNavigation');

		window.addEventListener('scroll', function() {
			if(this.scrollY >= 200) {
				stickyNavigation.classList.add('active');
			} else {
				stickyNavigation.classList.remove('active');
			}
		});
	}

	// ---------- Show the navigation when clicking on button ---------- //
	const show_navigation = () => {
		const stickyNavigationButton = document.getElementById('stickyNavigationButton');
		const primaryNavigationContainer = document.getElementById('primaryNavigationContainer');

		primaryNavigationContainer.classList.toggle('active');
		stickyNavigationButton.classList.toggle('active');
	}

	return (
		<StickyNavigationContainer id="stickyNavigation">
			<StickyNavigationContent>
				<StickyNavigationGroup>
					<NavigationToggleContainer>
						<NavigationToggle id="stickyNavigationButton" onClick={show_navigation}>Categories</NavigationToggle>

						<PrimaryNavigationContainer id="primaryNavigationContainer">
							<PrimaryNavigation/>
						</PrimaryNavigationContainer>
					</NavigationToggleContainer>

					<li><NavigationLink href="">Home</NavigationLink></li>
					<li><NavigationLink href="">News</NavigationLink></li>
					<li><NavigationLink href="">About Us</NavigationLink></li>
					<li><NavigationLink href="">Contact Us</NavigationLink></li>
				</StickyNavigationGroup>

				<StickyNavigationGroup>
					<li><NavigationLink href="">Log In</NavigationLink></li>
					<li><NavigationLink href="">Register</NavigationLink></li>
				</StickyNavigationGroup>
			</StickyNavigationContent>
		</StickyNavigationContainer>
	);
}

export default StickyNavigation;