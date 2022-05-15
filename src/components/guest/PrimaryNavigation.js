import React from 'react';
import {Link} from 'react-router-dom';

const PrimaryNavigation = () => {
	return (
		<nav class="hidden lg:block">
			<ul class="border bg-white rounded-b-md">
				<li class="relative" id="category">
					<a href="" class="block px-[1rem] py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div class="flex justify-between items-center">
							<span><i class="fa-solid fa-mars text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Men</span>
							<span><i class="fa-solid fa-angle-right text-[0.7rem] text-[#808080]"></i></span>
						</div>
					</a>
					<div class="border-b mx-[1rem]"></div>

					{/* Sub-category */}
					<ul class="hidden absolute z-[2] top-0 -right-[35.5rem] border bg-white p-[2rem] rounded-md shadow-md" id="sub-category">
						<div class="flex flex-wrap gap-[2%] max-w-[30rem]">
							<div class="flex basis-[49%] flex-col">
								<p class="uppercase font-bold mb-[0.5rem]">Tops</p>
								<li><a href="" class="hover:text-blue-500">Awesome</a></li>
								<li><a href="" class="hover:text-blue-500">Beachwear</a></li>
								<li><a href="" class="hover:text-blue-500">Beige</a></li>
								<li><a href="" class="hover:text-blue-500">Cool</a></li>
								<li><a href="" class="hover:text-blue-500">Dress</a></li>
							</div>
							<div class="flex basis-[49%] flex-col">
								<p class="uppercase font-bold mb-[0.5rem]">Bottoms</p>
								<li><a href="" class="hover:text-blue-500">Jeans</a></li>
								<li><a href="" class="hover:text-blue-500">Lacoste</a></li>
								<li><a href="" class="hover:text-blue-500">Nice</a></li>
								<li><a href="" class="hover:text-blue-500">Model</a></li>
							</div>
							<div class="relative mt-[2rem]">
								<div class="absolute mt-[2rem] ml-[3rem]">
									<p class="uppercase text-[1rem]">Summer <span class="font-bold text-blue-500">2022</span></p>
									<p class="uppercase font-bold text-[#ff8c1a] text-[1.625rem]">New Arrivals</p>
								</div>
								<img src="guest/images/index/01_1120x.png" alt="" class="object-cover"/>
							</div>
						</div>
					</ul>
				</li>
				<li class="relative" id="category">
					<a href="" class="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div class="flex justify-between items-center">
							<span><i class="fa-solid fa-venus text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Women</span>
							<span><i class="fa-solid fa-angle-right text-[0.7rem] text-[#808080]"></i></span>
						</div>
					</a>
					<div class="border-b mx-[1rem]"></div>

					{/* Sub-category */}
					<ul class="hidden absolute z-[2] top-0 -right-[35.5rem] border bg-white p-[2rem] rounded-md shadow-md" id="sub-category">
						<div class="flex flex-wrap gap-[2%] max-w-[30rem]">
							<div class="flex basis-[49%] flex-col">
								<p class="uppercase font-bold mb-[0.5rem]">Tops</p>
								<li><a href="" class="hover:text-blue-500">Awesome</a></li>
								<li><a href="" class="hover:text-blue-500">Beachwear</a></li>
								<li><a href="" class="hover:text-blue-500">Beige</a></li>
								<li><a href="" class="hover:text-blue-500">Cool</a></li>
								<li><a href="" class="hover:text-blue-500">Dress</a></li>
							</div>
							<div class="flex basis-[49%] flex-col">
								<p class="uppercase font-bold mb-[0.5rem]">Bottoms</p>
								<li><a href="" class="hover:text-blue-500">Jeans</a></li>
								<li><a href="" class="hover:text-blue-500">Lacoste</a></li>
								<li><a href="" class="hover:text-blue-500">Nice</a></li>
								<li><a href="" class="hover:text-blue-500">Model</a></li>
							</div>
							<div class="relative mt-[2rem]">
								<div class="absolute mt-[2rem] ml-[3rem]">
									<p class="uppercase text-[1rem]">Summer <span class="font-bold text-[#ff8c1a]">2022</span></p>
									<p class="uppercase font-bold text-[#ff8c1a] text-[1.625rem]">New Arrivals</p>
								</div>
								<img src="guest/images/index/01_1120x.png" alt="" class="object-cover"/>
							</div>
						</div>
					</ul>
				</li>
				<li class="relative" id="category">
					<a href="" class="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div class="flex justify-between items-center">
							<span><i class="fa-solid fa-glasses text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Accessories</span>
						</div>
					</a>
					<div class="border-b mx-[1rem]"></div>
				</li>
				<li class="relative" id="category">
					<a href="" class="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div class="flex justify-between items-center">
							<span><i class="fa-solid fa-shoe-prints text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> Shoes</span>
						</div>
					</a>
					<div class="border-b mx-[1rem]"></div>
				</li>
				<li class="relative" id="category">
					<a href="" class="block px-4 py-[0.813rem] text-[1rem] text-[#595959] hover:text-blue-500">
						<div class="flex justify-between items-center">
							<span><i class="fa-solid fa-medal text-[1.25rem] w-[1.563rem] h-[1.563rem] mr-[0.25rem]"></i> New Arrivals</span>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;