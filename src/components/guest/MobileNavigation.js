import React from 'react';
import {Link} from 'react-router-dom';

const MobileNavigation = () => {
	return (
		<nav>
			<div class="flex relative lg:hidden justify-between items-center px-[1.25rem] mt-[0.938rem] mb-[0.938rem] basis-[100%] max-w-[100%] h-[3.25rem] border-y">
				{/* Button */}
				<button id="mobile-navigation-open">
					<i class="fa-solid fa-bars self-center text-white te px-[0.5rem] py-[0.25rem] bg-blue-500 rounded-md cursor-pointer text-2xl duration-500 hover:bg-blue-600"></i>
				</button>
				<div>
					{/* Search Button */}
					<button id="mobile-search-button">
						<i class="fa-solid fa-magnifying-glass text-blue-400 self-center pr-[0.25rem] text-2xl duration-500 hover:text-blue-600"></i>
					</button>

					{/* Search Input */}
					<input type="text" class="hidden text-[1.125rem] absolute top-[0rem] left-[0rem] z-[1] px-[1.25rem] py-[14.5px] w-[100%] border-y outline-none focus:border-blue-500" id="mobile-search-input" placeholder="Search Products..."/>
					<button class="hidden absolute z-[2] top-[0.563rem] right-[3.438rem]" id="mobile-search-submit">
						<i class="fa-solid fa-magnifying-glass text-blue-400 self-center pr-[0.25rem] text-2xl duration-500 hover:text-blue-600"></i>
					</button>
					<button class="hidden absolute z-[2] top-[0.563rem] right-[1.5rem]" id="mobile-search-close">
						<i class="fa-solid fa-xmark text-red-400 self-center pl-[0.25rem] text-2xl duration-500 hover:text-red-600"></i>
					</button>

					{/* Cart Link */}
					<a href="">
						<i class="fa-solid fa-cart-shopping text-blue-400 self-center pl-[0.25rem] text-2xl duration-500 hover:text-blue-600"></i>
					</a>
				</div>
			</div>

			{/* Content */}
			<ul class="block lg:hidden h-screen w-[16.875rem] fixed top-0 left-[-16.875rem] z-[1] bg-white shadow-md" id="mobile-navigation-content">
				{/* Close Button */}
				<button class="flex items-center px-[1.875rem] py-[0.75rem] cursor-pointer duration-500 hover:text-blue-500" id="mobile-navigation-close"><i class="fa-solid fa-xmark self-center text-[0.75rem]"></i> <span class="ml-[0.5rem]">Close</span></button>
				<div class="border-b"></div>
				<li>
					<button class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500" id="sub-category">Women</button>
					
					{/* Sub-category: Content */}
					<ul class="fixed w-[16.875rem] top-[0rem] left-[-16.875rem] bg-white h-screen z-[1] shadow-md" id="sub-category-content">
						{/* Back Button */}
						<button class="flex items-center px-[1.875rem] py-[0.75rem] cursor-pointer duration-500 hover:text-blue-500" id="mobile-navigation-back"><i class="fa-solid fa-angle-left self-center text-[0.75rem]"></i> <span class="ml-[0.5rem]">Back</span></button>
						<div class="border-b"></div>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Women 1</li>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Women 2</li>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Women 3</li>
					</ul>
				</li>
				<li>
					<button class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500" id="sub-category">Men</button>
					
					{/* Sub-category: Content */}
					<ul class="fixed w-[16.875rem] top-[0rem] left-[-16.875rem] bg-white h-screen z-[1] shadow-md" id="sub-category-content">
						{/* Back Button */}
						<button class="flex items-center px-[1.875rem] py-[0.75rem] cursor-pointer duration-500 hover:text-blue-500" id="mobile-navigation-back"><i class="fa-solid fa-angle-left self-center text-[0.75rem]"></i> <span class="ml-[0.5rem]">Back</span></button>
						<div class="border-b"></div>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Men 1</li>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Men 2</li>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Men 3</li>
					</ul>
				</li>
				<li>
					<button class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500" id="sub-category">Accessories</button>
					
					{/* Sub-category: Content */}
					<ul class="fixed w-[16.875rem] top-[0rem] left-[-16.875rem] bg-white h-screen z-[1] shadow-md" id="sub-category-content">
						{/* Back Button */}
						<button class="flex items-center px-[1.875rem] py-[0.75rem] cursor-pointer duration-500 hover:text-blue-500" id="mobile-navigation-back"><i class="fa-solid fa-angle-left self-center text-[0.75rem]"></i> <span class="ml-[0.5rem]">Back</span></button>
						<div class="border-b"></div>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Accessories 1</li>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Accessories 2</li>
						<li class="block px-[1.875rem] py-[0.75rem] duration-500 hover:text-blue-500">Accessories 3</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default MobileNavigation;