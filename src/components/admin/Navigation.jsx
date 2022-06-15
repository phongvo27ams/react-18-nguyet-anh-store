import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/css/components/admin/Navigation.css';

const Navigation = () => {
	// ---------- Navigation Toggle on Mobile Devices ---------- //
	// Use the Effect Hook to get the element after the DOM is rendered to avoid returning null
	useEffect(() => {
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
	}, []);

	return (
		<>
			<nav id="navigation">
				<div className="dashboard">
					<i className="fa-solid fa-building-columns"></i>
					<span>Dashboard</span>
				</div>
				<ul>
					<li>
						<NavLink to="/admin/category" className={({isActive}) => isActive ? "active" : "inactive"}>
							<div>
								<i className="fa-solid fa-folder"></i><span>Categories</span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/admin/sub-category" className={({isActive}) => isActive ? "active" : "inactive"}>
							<div>
								<i className="fa-solid fa-folder-open"></i><span>Sub-categories</span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/admin/product" className={({isActive}) => isActive ? "active" : "inactive"}>
							<div>
								<i className="fa-solid fa-shirt"></i><span>Products</span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/admin/news" className={({isActive}) => isActive ? "active" : "inactive"}>
							<div>
								<i className="fa-solid fa-file-lines"></i><span>News</span>
							</div>
						</NavLink>
					</li>
				</ul>
				<button className="navigation-close" id="navigationClose">
					<i className="fa-solid fa-xmark"></i>
				</button>
			</nav>
			<div className="background" id="navigationBackground"></div>
		</>
	);
}

export default Navigation;