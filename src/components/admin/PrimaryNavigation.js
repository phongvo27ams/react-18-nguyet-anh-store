import React from 'react';
import {NavLink} from 'react-router-dom';

const PrimaryNavigation = () => {
	return (
		<nav className="hidden lg:flex flex-col border-r min-h-screen">
			<div className="text-[20px] p-[16px] pl-[22px] mb-[16px]">
				<i className="fa-solid fa-building-columns bg-[#15a362] px-[10px] py-[10px] rounded-[50%] text-white mr-[10px]"></i>
				<span className="uppercase font-[600] tracking-[0.1rem]">Dashboard</span>
			</div>
			<ul>
				<li>
					<NavLink to="/admin/category" className={({isActive}) => isActive ? "flex justify-beetween items-center cursor-pointer w-full p-[16px] text-[#15a362] font-[600] bg-[#edfdf6] border-l-[6px] border-[#15a362]" : "flex justify-beetween items-center cursor-pointer w-full p-[16px] pl-[22px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]"}>
						<div className="basis-[94%]">
							<i className="fa-solid fa-folder mr-[10px] text-[14px]"></i><span>Categories</span>
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/sub-category" className={({isActive}) => isActive ? "flex justify-beetween items-center cursor-pointer w-full p-[16px] text-[#15a362] font-[600] bg-[#edfdf6] border-l-[6px] border-[#15a362]" : "flex justify-beetween items-center cursor-pointer w-full p-[16px] pl-[22px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]"} id="categoryLevel1">
						<div className="basis-[94%]">
							<i className="fa-solid fa-folder-open mr-[10px] text-[14px]"></i><span>Sub-categories</span>
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/product" className={({isActive}) => isActive ? "flex justify-beetween items-center cursor-pointer w-full p-[16px] text-[#15a362] font-[600] bg-[#edfdf6] border-l-[6px] border-[#15a362]" : "flex justify-beetween items-center cursor-pointer w-full p-[16px] pl-[22px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]"} id="categoryLevel1">
						<div className="basis-[94%]">
							<i className="fa-solid fa-shirt mr-[10px] text-[14px]"></i><span>Products</span>
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/news" className={({isActive}) => isActive ? "flex justify-beetween items-center cursor-pointer w-full p-[16px] text-[#15a362] font-[600] bg-[#edfdf6] border-l-[6px] border-[#15a362]" : "flex justify-beetween items-center cursor-pointer w-full p-[16px] pl-[22px] text-[#5d6778] duration-[500ms] hover:text-[#15a362]"} id="categoryLevel1">
						<div className="basis-[94%]">
							<i className="fa-solid fa-file-lines mr-[10px] text-[14px]"></i><span>News</span>
						</div>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;