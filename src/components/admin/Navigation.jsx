import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

// ========== Styled Components ========== //
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
	&.show-menu {
		left: 0;
	}
	@media screen and (min-width: 1024px) {
		position: initial;
	}
`;

const Dashboard = styled.div`
	font-size: 1.25rem;
	padding: 1rem 1rem 1rem 1.375rem;
	margin-bottom: 1rem;
`;

const DashboardIcon = styled.i`
	color: white;
	background-color: var(--dark-green-color);
	padding: 0.625rem;
	margin-right: 0.625rem;
	border-radius: 50%;
`;

const DashboardHeading = styled.span`
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 0.1rem;
`;

const NavigationLink = styled(NavLink)`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 100%;
	padding: 1rem;
	color: var(--grey-text-color);
	padding-left: 1.375rem;
	transition: 500ms ease-in-out;
	&:hover {
		color: var(--dark-green-color);
	}
	&.active {
		color: var(--dark-green-color);
		background-color: var(--light-green-background-color);
		font-weight: 600;
		border-left-width: 0.375rem;
		border-color: var(--dark-green-color);
	}
`;

const NavigationIcon = styled.i`
	margin-right: 0.625rem;
	font-size: 0.875rem;
`;

const NavigationClose = styled.button`
	font-size: 24px;
	color: white;
	position: absolute;
	top: 10px;
	right: -40px;
	transition: 500ms ease-in-out;
	&:hover {
		color: var(--dark-green-color);
	}
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const Background = styled.div`
	visibility: hidden;
	opacity: 0;
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.7);
	transition: 500ms ease-in-out;
	&.show-menu {
		visibility: visible;
		opacity: 1;
	}
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

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
				navigation.classList.add('show-menu');
				navigationBackground.classList.add('show-menu');
			});
		}
		if(navigationClose) {
			navigationClose.addEventListener('click', () => {
				navigation.classList.remove('show-menu');
				navigationBackground.classList.remove('show-menu');
			});
		}
	}

	return (
		<>
			<NavigationContainer id="navigation">
				<Dashboard>
					<DashboardIcon className="fa-solid fa-building-columns"></DashboardIcon>
					<DashboardHeading>Dashboard</DashboardHeading>
				</Dashboard>

				<ul>
					<li>
						<NavigationLink to="/admin/category" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-folder"></NavigationIcon> Categories
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/admin/sub-category" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-folder-open"></NavigationIcon> Sub-categories
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/admin/product" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-shirt"></NavigationIcon> Products
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/admin/news" className={({isActive}) => isActive ? "active" : ""}>
							<NavigationIcon className="fa-solid fa-file-lines"></NavigationIcon> News
						</NavigationLink>
					</li>
				</ul>

				<NavigationClose id="navigationClose">
					<i className="fa-solid fa-xmark"></i>
				</NavigationClose>
			</NavigationContainer>
			
			<Background id="navigationBackground"></Background>
		</>
	);
}

export default Navigation;