import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/css/main.css';
import '../../assets/font-awesome-6/6.1.1/css/all.min.css';
import '../../assets/js/admin/dashboard';
import '../../assets/css/components/admin/Header.css';

const Header = () => {
	return (
		<header className="z-[1] h-fit w-full px-[36px] py-[12px] shadow-md">
			<div className="flex justify-between items-center">
				<div className="relative flex basis-[600px]">
					{/* Mobile Navigation Button */}
					<button className="inline-block lg:hidden text-[#15a362] font-[600] text-[20px] mr-[12px]" id="mobileNavigation">
						<i className="fa-solid fa-bars"></i>
					</button>
					{/* ------------------------ */}

					<label className="relative flex w-[100%]">
						<span className="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Search</span>
						<input type="text" className="w-[100%] p-[12px] rounded border outline-none duration-[500ms] focus:border-[#15a362]"/>
						<button className="absolute top-[12px] right-[12px] lg:right-[4%] text-[#5d6778] duration-[500ms] hover:text-[#15a362]">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</label>
				</div>
				<div className="relative basis-[36px]">
					<button id="account">
						<img src="https://via.placeholder.com/150x150" className="rounded-[50%]"/>
					</button>
					<ul className="hidden z-[1] absolute mt-[8px] right-[0px] w-[160px] bg-white rounded-md border shadow-md" id="accountOptions">
						<li>
							<Link to="#" className="block px-[14px] py-[10px] hover:bg-[#fafbff] hover:text-[#15a362]">My Account</Link>
						</li>
						<li>
							<Link to="#" className="block px-[14px] py-[10px] hover:bg-[#fafbff] hover:text-[#15a362]">Log Out</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;