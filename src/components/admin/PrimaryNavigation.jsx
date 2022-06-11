import React from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/css/components/admin/PrimaryNavigation.css';

const PrimaryNavigation = () => {
	return (
		<nav>
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
		</nav>
	);
}

export default PrimaryNavigation;