import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/css/main.css';
import '../../assets/css/components/admin/Header.css';
import '../../assets/font-awesome-6/6.1.1/css/all.min.css';

const Header = () => {
	const account_toggle = () => {
		let accountOptions = document.getElementById('accountOptions');
		accountOptions.classList.toggle('active');
	}

	return (
		<header>
			<div className="container">
				<button className="navigation-toggle" id="navigationToggle">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="search-container">
					<input type="text" className="search" placeholder=" "/>
					<label>Search</label>
					<button>
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
				<div className="account-container">
					<button id="accountToggle" onClick={account_toggle}>
						<img src="https://via.placeholder.com/150x150" alt="account"/>
					</button>
					<ul id="accountOptions">
						<li>
							<Link to="#">My Account</Link>
						</li>
						<li>
							<Link to="#">Log Out</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;