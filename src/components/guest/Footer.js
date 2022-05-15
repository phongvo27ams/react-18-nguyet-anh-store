import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div class="bg-[#f7f8fa]">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.25rem] max-w-[34.75rem] md:max-w-[48.75rem] lg:max-w-[62.5rem] xl:max-w-[75rem] px-[0.625rem] py-[3.375rem] mx-auto" id="accordion">
					<div>
						<div class="flex md:block justify-between items-center pb-[0.75rem] md:pb-[0rem] border-b md:border-none cursor-pointer md:cursor-default" id="accordion-header">
							<p class="uppercase text-[1rem] font-bold">Categories</p>
							<i class="fa-solid fa-angle-down md:hidden"></i>
						</div>
						<div class="hidden md:block pt-[0.75rem]" id="accordion-body">
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">Women</a>
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">Men</a>
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">Accessories</a>
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">Shoes</a>
						</div>
					</div>
					<div>
						<div class="flex md:block justify-between items-center pb-[0.75rem] md:pb-[0rem] border-b md:border-none cursor-pointer md:cursor-default" id="accordion-header">
							<p class="uppercase text-[1rem] font-bold">Buy with us</p>
							<i class="fa-solid fa-angle-down md:hidden"></i>
						</div>
						<div class="hidden md:block pt-[0.75rem]" id="accordion-body">
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">About Us</a>
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">Contact Us</a>
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">FAQs</a>
							<a href="" class="block text-[14px] pb-[7px] text-[#888888] hover:text-blue-500">Terms and Conditions</a>
						</div>
					</div>
					<div>
						<div class="flex md:block justify-between items-center pb-[0.75rem] md:pb-[0rem] border-b md:border-none cursor-pointer md:cursor-default" id="accordion-header">
							<p class="uppercase text-[1rem] font-bold">Contacts</p>
							<i class="fa-solid fa-angle-down md:hidden"></i>
						</div>
						<div class="hidden md:block pt-[0.75rem]" id="accordion-body">
							<p class="block text-[14px] pb-[7px] text-[#888888]"><span class="text-black">Address: </span>1464 Summer Shoals</p>
							<p class="block text-[14px] pb-[7px] text-[#888888]"><span class="text-black">Phone: </span> +84 5572 16666; +84 5572 16667</p>
							<p class="block text-[14px] pb-[7px] text-[#888888]"><span class="text-black">Hours: </span> All week from 9 A.M to 9 P.M</p>
							<p class="block text-[14px] pb-[7px] text-[#888888]"><span class="text-black">Email: </span> info@nguyetanhstore.com</p>
						</div>
					</div>
					<div>
						<div class="flex md:block justify-between items-center pb-[0.75rem] md:pb-[0rem] border-b md:border-none cursor-pointer md:cursor-default" id="accordion-header">
							<p class="uppercase text-[1rem] font-bold">Newsletter signup</p>
							<i class="fa-solid fa-angle-down md:hidden"></i>
						</div>
						<div class="hidden md:block pt-[0.75rem]" id="accordion-body">
							<p class="block text-[14px] pb-[7px] text-[#888888] mb-[23px]">Sign up for our e-mail and be the first who know our special offers! Furthermore, we will give a 15% discount on the next order after you sign up.</p>
							<a href="https://facebook.com" target="blank">
								<img src="assets/social-icons/icons8-facebook.svg" class="inline-block w-[26px] h-[26px] mr-[0.625rem] opacity-40 duration-500 hover:opacity-100"/>
							</a>
							<a href="https://twitter.com" target="blank">
								<img src="assets/social-icons/icons8-twitter.svg" class="inline-block w-[26px] h-[26px] mr-[0.625rem] opacity-40 duration-500 hover:opacity-100"/>
							</a>
							<a href="https://google.com" target="blank">
								<img src="assets/social-icons/icons8-google.svg" class="inline-block w-[26px] h-[26px] mr-[0.625rem] opacity-40 duration-500 hover:opacity-100"/>
							</a>
							<a href="https://youtube.com" target="blank">
								<img src="assets/social-icons/icons8-youtube.svg" class="inline-block w-[26px] h-[26px] mr-[0.625rem] opacity-40 duration-500 hover:opacity-100"/>
							</a>
							<a href="https://pinterest.com" target="blank">
								<img src="assets/social-icons/icons8-pinterest.svg" class="inline-block w-[26px] h-[26px] mr-[0.625rem] opacity-40 duration-500 hover:opacity-100"/>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="container mx-auto">
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-[1.25rem] max-w-[75rem] px-[0.625rem] mx-auto">
					<div class="flex items-center h-[4.375rem] justify-center lg:justify-between">
						<p class="text-[#888888] text-[0.875rem]">&copy; Nguyet Anh Store 2022. All Rights Reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;