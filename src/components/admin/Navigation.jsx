import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

// ========== STYLED COMPONENTS ========== //
const NavigationContainer = styled.nav`
	display: flex;
	position: fixed;
	z-index: 3;
	left: -100%;
	background-color: white;
	flex-direction: column;
	border-right-width: 1px;
	min-height: 100vh;
	transition: 500ms ease-in-out;
	&.active {
		left: 0;
	}
	@media screen and (min-width: 1024px) {
		position: initial;
	}
`;

const NavigationDashboard = styled.div`
	font-size: 20px;
	padding: 16px 16px 16px 22px;
	margin-bottom: 16px;
`;

const NavigationDashboardIcon = styled.i`
	color: white;
	background-color: var(--blue-400);
	padding: 10px;
	margin-right: 10px;
	border-radius: 50%;
`;

const NavigationDashboardHeading = styled.span`
	color: var(--blue-400);
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 1.6px;
	cursor: default;
`;

const NavigationNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 100%;
	padding: 16px;
	color: var(--grey-500);
	padding-left: 22px;
	transition: 500ms ease-in-out;
	&:hover {
		color: var(--blue-400);
	}
	&.active {
		color: var(--blue-400);
		background-color: var(--blue-100);
		font-weight: 600;
		border-left-width: 6px;
		border-color: var(--blue-400);
	}
`;

const NavigationIcon = styled.i`
	margin-right: 10px;
	font-size: 14px;
`;

const NavigationClose = styled.button`
	font-size: 24px;
	color: white;
	position: absolute;
	top: 10px;
	right: -40px;
	transition: 500ms ease-in-out;
	&:hover {
		color: var(--blue-400);
	}
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const NavigationBackground = styled.div`
	visibility: hidden;
	opacity: 0;
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.7);
	transition: 500ms ease-in-out;
	&.active {
		visibility: visible;
		opacity: 1;
	}
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

// ========== REACT FUNCTION COMPONENT ========== //
const Navigation = () => {
	// ========== Navigation Toggle on Mobile Devices ========== //
	// Use the Effect Hook to get the element after the DOM is rendered to avoid returning null
	useEffect(() => {
		navigation_toggle();
	}, []);

	const navigation_toggle = () => {
		const navigationBackground = document.getElementById('navigationBackground');
		const navigation = document.getElementById('navigation');
		const navigationToggle = document.querySelector('button#navigationToggle');
		const navigationClose = document.getElementById('navigationClose');

		if(navigationToggle) {
			navigationToggle.addEventListener('click', () => {
				navigation.classList.add('active');
				navigationBackground.classList.add('active');
			});
		}
		if(navigationClose) {
			navigationClose.addEventListener('click', () => {
				navigation.classList.remove('active');
				navigationBackground.classList.remove('active');
			});
		}
	}

	return (
		<>
			<NavigationContainer id="navigation">
				<NavigationDashboard>
					<NavigationDashboardIcon className="fa-solid fa-building-columns"></NavigationDashboardIcon>
					<NavigationDashboardHeading>Dashboard</NavigationDashboardHeading>
				</NavigationDashboard>

				<ul>
					<li>
						<NavigationNavLink to="/admin/category" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-folder"></NavigationIcon> Categories
						</NavigationNavLink>
					</li>
					<li>
						<NavigationNavLink to="/admin/sub-category" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-folder-open"></NavigationIcon> Sub-categories
						</NavigationNavLink>
					</li>
					<li>
						<NavigationNavLink to="/admin/product" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-shirt"></NavigationIcon> Products
						</NavigationNavLink>
					</li>
					<li>
						<NavigationNavLink to="/admin/news" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-file-lines"></NavigationIcon> News
						</NavigationNavLink>
					</li>
				</ul>

				<NavigationClose id="navigationClose">
					<i className="fa-solid fa-xmark"></i>
				</NavigationClose>
			</NavigationContainer>
			
			<NavigationBackground id="navigationBackground"></NavigationBackground>
		</>
	);
}

export default Navigation;