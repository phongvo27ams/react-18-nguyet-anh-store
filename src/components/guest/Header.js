import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import '../../assets/css/main.css';
import '../../assets/js/guest/main';

const Header = () => {
	return (
		<header class="container mx-auto">
			<nav class="hidden lg:flex lg:items-center justify-between mx-auto max-w-[61.875rem] xl:max-w-[75rem] px-[0.625rem] h-[3.25rem]">
				<ul class="flex my-2">
					<li><a href="" class="pr-[0.5rem] py-[1.75rem] duration-500 hover:text-blue-500">Home</a></li>
					<li><a href="" class="px-[0.5rem] py-[1.75rem] duration-500 hover:text-blue-500">News</a></li>
					<li><a href="" class="px-[0.5rem] py-[1.75rem] duration-500 hover:text-blue-500">About Us</a></li>
					<li><a href="" class="pl-[0.5rem] py-[1.75rem] duration-500 hover:text-blue-500">Contact Us</a></li>
				</ul>
				<ul class="flex mt-2">
					<li><a href="" class="px-[0.5rem] py-[1.75rem] duration-500 hover:text-blue-500">Log In</a></li>
					<li><a href="" class="pl-[0.5rem] py-[1.75rem] duration-500 hover:text-blue-500">Register</a></li>
				</ul>
			</nav>
			<div class="flex flex-wrap justify-center lg:justify-between mx-auto max-w-[61.875rem] xl:max-w-[75rem] px-[0.625rem] min-h-[3.625rem] mb-[0.938rem]">
				<a href="" class="w-full lg:w-fit lg:flex text-[2.25rem]">
					<span class="font-['Lobster'] block text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600 duration-500 hover:text-blue-400">Nguyet Anh Store</span>
				</a>
				<div class="flex flex-wrap">
					<div class="text-center mt-[0.625rem] lg:mt-[0rem] lg:text-right">
						<p class="font-bold text-[1.125rem]">Call Us: +84 3951 08473</p>
						<p class="">From 8:00 to 21:00 (Mon-Sun)</p>
					</div>
					<a href="" class="hidden relative lg:flex group ml-8">
						<i class="fa-solid fa-cart-shopping self-center text-blue-300 text-3xl duration-500 group-hover:text-blue-500"></i>
						<span class="absolute top-[0rem] right-[3.75rem] z-[1] font-[600] text-[12px] p-[2px_8px] text-white bg-red-400 rounded-[50%] duration-500 group-hover:bg-red-600">1</span>
						<p class="self-center ml-2 text-[0.875rem] uppercase duration-500 font-[600] group-hover:text-blue-500">My cart</p>
					</a>
				</div>
			</div>
			<div class="hidden lg:grid lg:grid-cols-[14.25rem_45.188rem] xl:grid-cols-[17.5rem_55rem] gap-[1.25rem] mx-auto max-w-[61.875rem] xl:max-w-[75rem] px-[0.625rem]">
				<div class="uppercase font-bold rounded-t-md px-[1.125rem] py-[13px] text-[1rem] text-white bg-blue-500 cursor-default">Categories</div>
				
				<form action="" class="">
					<a href="">
						<i class="fa-solid fa-magnifying-glass text-[1.25rem] text-gray-300 absolute z-[1] px-[0.625rem] ml-[0.5rem] mt-[0.875rem] duration-500 hover:text-blue-500"></i>
					</a>
					<input type="text" class="relative w-full bg-gray-50 pl-[2.875rem] py-[0.875rem] border rounded-md text-sm outline-none duration-[500ms] focus:border-blue-500" placeholder="Search Products..."/>
				</form>
			</div>
		</header>
	);
}

export default Header;