import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const PrimaryNavigation = () => {
	return (
		<nav className="hidden lg:block">
			<ul className="border bg-white rounded-b-md">
				<li className="relative">
					<a href="" className="block px-[1rem] py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div className="flex justify-between items-center">
							<span><i className="fa-solid fa-mars text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Men</span>
							<span><i className="fa-solid fa-angle-right text-[0.7rem] text-[#808080]"></i></span>
						</div>
					</a>
					<div className="border-b mx-[1rem]"></div>

					{/* Sub-category */}
					<ul className="hidden absolute z-[2] top-0 -right-[35.5rem] border bg-white p-[2rem] rounded-md shadow-md duration-[500ms]" id="subCategory">
						<div className="flex flex-wrap gap-[2%] max-w-[30rem]">
							<div className="flex basis-[49%] flex-col">
								<p className="uppercase font-bold mb-[0.5rem]">Tops</p>
								<li><a href="" className="hover:text-blue-500">Awesome</a></li>
								<li><a href="" className="hover:text-blue-500">Beachwear</a></li>
								<li><a href="" className="hover:text-blue-500">Beige</a></li>
								<li><a href="" className="hover:text-blue-500">Cool</a></li>
								<li><a href="" className="hover:text-blue-500">Dress</a></li>
							</div>
							<div className="flex basis-[49%] flex-col">
								<p className="uppercase font-bold mb-[0.5rem]">Bottoms</p>
								<li><a href="" className="hover:text-blue-500">Jeans</a></li>
								<li><a href="" className="hover:text-blue-500">Lacoste</a></li>
								<li><a href="" className="hover:text-blue-500">Nice</a></li>
								<li><a href="" className="hover:text-blue-500">Model</a></li>
							</div>
							<div className="relative mt-[2rem]">
								<div className="absolute mt-[2rem] ml-[3rem]">
									<p className="uppercase text-[1rem]">Summer <span className="font-bold text-blue-500">2022</span></p>
									<p className="uppercase font-bold text-[#ff8c1a] text-[1.625rem]">New Arrivals</p>
								</div>
								<img src="http://127.0.0.1:8000/guest/images/index/01_1120x.png" alt="" className="object-cover"/>
							</div>
						</div>
					</ul>
				</li>
				<li className="relative" id="category">
					<a href="" className="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div className="flex justify-between items-center">
							<span><i className="fa-solid fa-venus text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Women</span>
							<span><i className="fa-solid fa-angle-right text-[0.7rem] text-[#808080]"></i></span>
						</div>
					</a>
					<div className="border-b mx-[1rem]"></div>

					{/* Sub-category */}
					<ul className="hidden absolute z-[2] top-0 -right-[35.5rem] border bg-white p-[2rem] rounded-md shadow-md" id="sub-category">
						<div className="flex flex-wrap gap-[2%] max-w-[30rem]">
							<div className="flex basis-[49%] flex-col">
								<p className="uppercase font-bold mb-[0.5rem]">Tops</p>
								<li><a href="" className="hover:text-blue-500">Awesome</a></li>
								<li><a href="" className="hover:text-blue-500">Beachwear</a></li>
								<li><a href="" className="hover:text-blue-500">Beige</a></li>
								<li><a href="" className="hover:text-blue-500">Cool</a></li>
								<li><a href="" className="hover:text-blue-500">Dress</a></li>
							</div>
							<div className="flex basis-[49%] flex-col">
								<p className="uppercase font-bold mb-[0.5rem]">Bottoms</p>
								<li><a href="" className="hover:text-blue-500">Jeans</a></li>
								<li><a href="" className="hover:text-blue-500">Lacoste</a></li>
								<li><a href="" className="hover:text-blue-500">Nice</a></li>
								<li><a href="" className="hover:text-blue-500">Model</a></li>
							</div>
							<div className="relative mt-[2rem]">
								<div className="absolute mt-[2rem] ml-[3rem]">
									<p className="uppercase text-[1rem]">Summer <span className="font-bold text-[#ff8c1a]">2022</span></p>
									<p className="uppercase font-bold text-[#ff8c1a] text-[1.625rem]">New Arrivals</p>
								</div>
								<img src="http://127.0.0.1:8000/guest/images/index/01_1120x.png" alt="" className="object-cover"/>
							</div>
						</div>
					</ul>
				</li>
				<li className="relative" id="category">
					<a href="" className="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div className="flex justify-between items-center">
							<span><i className="fa-solid fa-glasses text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Accessories</span>
						</div>
					</a>
					<div className="border-b mx-[1rem]"></div>
				</li>
				<li className="relative" id="category">
					<a href="" className="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div className="flex justify-between items-center">
							<span><i className="fa-solid fa-shoe-prints text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Shoes</span>
						</div>
					</a>
					<div className="border-b mx-[1rem]"></div>
				</li>
				<li className="relative" id="category">
					<a href="" className="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div className="flex justify-between items-center">
							<span><i className="fa-solid fa-medal text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> New Arrivals</span>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;