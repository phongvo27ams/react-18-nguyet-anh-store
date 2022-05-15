import React from 'react';
import {Link} from 'react-router-dom';

const StickyNavigation = () => {
	return (
		<nav class="fixed top-[-3rem] z-[2] w-full bg-white shadow-md duration-[800ms]" id="sticky-navigation-bar">
			<div class="flex justify-between items-center mx-auto px-[0.625rem] h-[3rem] max-w-[75rem]">
				<ul class="flex items-center my-2">
					<nav class="relative">
						<button class="hidden lg:block pl-[1rem] pr-[6.25rem] py-[0.5rem] font-[700] uppercase text-white bg-blue-500 rounded-md duration-500 hover:bg-blue-600" id="sticky-navigation-button">Categories</button>

						{/* Sticky Navigation: Content */}
						<ul class="hidden absolute z-[2] top-[36px] bg-white rounded-b-md shadow-lg w-[200px]" id="sticky-navigation-content">
							<li>
								<a href="" class="block px-[1rem] py-[8px] hover:text-blue-500">
									<div class="flex justify-between items-center">
										<span><i class="fa-solid fa-mars text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Men</span>
									</div>
								</a>
								<div class="border-b mx-[1rem]"></div>
							</li>
							<li>
								<a href="" class="block px-[1rem] py-[8px] hover:text-blue-500">
									<div class="flex justify-between items-center">
										<span><i class="fa-solid fa-venus text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Women</span>
									</div>
								</a>
								<div class="border-b mx-[1rem]"></div>
							</li>
							<li>
								<a href="" class="block px-[1rem] py-[8px] hover:text-blue-500">
									<div class="flex justify-between items-center">
										<span><i class="fa-solid fa-glasses text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Accessories</span>
									</div>
								</a>
								<div class="border-b mx-[1rem]"></div>
							</li>
							<li>
								<a href="" class="block px-[1rem] py-[8px] hover:text-blue-500">
									<div class="flex justify-between items-center">
										<span><i class="fa-solid fa-shoe-prints text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Shoes</span>
									</div>
								</a>
								<div class="border-b mx-[1rem]"></div>
							</li>
							<li>
								<a href="" class="block px-[1rem] py-[8px] hover:text-blue-500">
									<div class="flex justify-between items-center">
										<span><i class="fa-solid fa-medal text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> New Arrivals</span>
									</div>
								</a>
							</li>
						</ul>
					</nav>

					<li><a href="" class="px-[0.5rem] py-[0.5rem] duration-500 hover:text-blue-500">Home</a></li>
					<li><a href="" class="px-[0.5rem] py-[0.5rem] duration-500 hover:text-blue-500">News</a></li>
					<li><a href="" class="px-[0.5rem] py-[0.5rem] duration-500 hover:text-blue-500">About Us</a></li>
					<li><a href="" class="pl-[0.5rem] py-[0.5rem] duration-500 hover:text-blue-500">Contact Us</a></li>
				</ul>
				<ul class="flex my-2">
					<li><a href="" class="px-[0.5rem] py-[0.5rem] duration-500 hover:text-blue-500">Log In</a></li>
					<li><a href="" class="pl-[0.5rem] py-[0.5rem] duration-500 hover:text-blue-500">Register</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default StickyNavigation;