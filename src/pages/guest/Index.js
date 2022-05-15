import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import PrimaryNavigation from '../../components/guest/PrimaryNavigation';

const Index = () => {
	const settings = {
		loop: false,
		nav: true,
		navText: [
			"<div class='nav-button owl-prev'><i class='fa-solid fa-angle-left'></i></div>",
			"<div class='nav-button owl-next'><i class='fa-solid fa-angle-right'></i></div>"
		],
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			640: {
				items: 2,
				margin: 16
			},
			768: {
				items: 2,
				margin: 19
			},
			1024: {
				items: 4,
				margin: 17
			},
			1280: {
				items: 4,
				margin: 20
			}
		}
	};

	return (
		<>
			<section className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-[14.25rem_45.188rem] xl:grid-cols-[17.5rem_55rem] gap-[1.25rem] mx-auto max-w-[61.875rem] xl:max-w-[75rem] px-[0.625rem] mb-[3.75rem]">
					<PrimaryNavigation/>

					<section className="grid grid-cols-1 md:grid-cols-[30.813rem_14.813rem] lg:grid-cols-[29.688rem_14.25rem] xl:grid-cols-[36.25rem_17.5rem] gap-[1.25rem] pt-[1.25rem]">
						<div className="relative mx-auto max-w-[32.875rem] md:max-w-full">
							<div className="absolute flex justify-center items-end">
								<div className="flex flex-wrap justify-between max-w-[17.625rem] max-h-[9.188rem] mt-[5rem] sm:mt-[6.25rem] md:mt-[7.75rem] ml-[3.125rem]">
									<p className="uppercase w-full text-[0.938rem] sm:text-[1rem]">Summer 2022</p>
									<p className="uppercase w-full mb-[0.5rem] font-bold lg:tracking-wider text-[1.188rem] sm:text-[1.875rem]">New Arrivals</p>
									<a href="" className="uppercase text-[0.75rem] sm:text-[0.875rem] font-bold px-[1.625rem] py-3 text-blue-500 rounded-md border border-blue-500 duration-500 hover:text-white hover:bg-blue-500">Discover now</a>
								</div>
							</div>
							<img src="http://127.0.0.1:8000/guest/images/index/lay20_03_x1024.png" className="object-cover rounded-md" alt=""/>
						</div>
						<div className="mx-auto max-w-[15.813rem] md:max-w-full">
							<a href="" className="relative group block mx-auto">
								<div className="absolute flex justify-center bottom-[0rem] pb-[1.25rem] px-[1.75rem]">
									<div className="uppercase p-[1.25rem] text-center font-bold rounded-md bg-white-0.7 duration-500 group-hover:text-white group-hover:bg-blue-500-0.8">
										<p className="text-[0.938rem] lg:text-[1rem]">Top view in this week</p>
										<p className="text-[1.438rem] lg:text-[1.625rem]">Trending</p>
									</div>
								</div>
								<img src="http://127.0.0.1:8000/guest/images/index/lay20_04_x1024.png" className="object-cover rounded-md" alt=""/>
							</a>
						</div>
					</section>
				</div>
			</section>

			<section className="container mx-auto">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1.25rem] mx-auto max-w-[61.875rem] xl:max-w-[75rem] px-[0.625rem] mb-[5rem]">
					<a href="" className="relative block group rounded-md h-[5rem]">
						<div className="absolute rounded-md w-full h-full duration-500 flex justify-center items-center text-white text-lg font-bold group-hover:text-white group-hover:bg-blue-500">Women</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_10_x80.png" className="object-cover rounded-md w-full h-full"/>
					</a>
					<a href="" className="relative block group rounded-md">
						<div className="absolute rounded-md w-full h-full duration-500 flex justify-center items-center text-white text-lg font-bold text-black group-hover:text-white group-hover:bg-blue-500">Men</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_11_x80.png" className="object-cover rounded-md w-full h-full"/>
					</a>
					<a href="" className="relative block group rounded-md">
						<div className="absolute rounded-md w-full h-full duration-500 flex justify-center items-center text-white text-lg font-bold group-hover:text-white group-hover:bg-blue-500">Accessories</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_12_x80.png" className="object-cover rounded-md w-full h-full"/>
					</a>
					<a href="" className="relative block group rounded-md">
						<div className="absolute rounded-md w-full h-full duration-500 flex justify-center items-center text-white text-lg font-bold text-black group-hover:text-white group-hover:bg-blue-500">Shoes</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_13_x80.png" className="object-cover rounded-md w-full h-full"/>
					</a>
					<a href="" className="relative block group rounded-md">
						<div className="absolute rounded-md w-full h-full duration-500 flex justify-center items-center text-white text-lg font-bold group-hover:text-white group-hover:bg-blue-500">New Arrivals</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_14_x80.png" className="object-cover rounded-md w-full h-full"/>
					</a>
				</div>
			</section>

			<section className="container mx-auto">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1.25rem] px-[0.625rem] mb-[2.5rem] mx-auto max-w-[61.875rem] xl:max-w-[75rem]">
					<div className="relative rounded-md">
						<div className="absolute w-full">
							<div className="px-8 pt-8 pb-2">
								<p className="uppercase font-extrabold text-[1rem]">Women's</p>
								<p className="uppercase font-medium text-[1.75rem] tracking-wider">Women</p>
							</div>
							<div className="px-4">
								<a href="" className="block px-4 py-1 text-[14px] rounded-md hover:text-blue-500 hover:bg-white-0.7">Denim Collection</a>
								<a href="" className="block px-4 py-1 text-[14px] rounded-md hover:text-blue-500 hover:bg-white-0.7">Party Collection</a>
								<a href="" className="block px-4 py-1 text-[14px] rounded-md hover:text-blue-500 hover:bg-white-0.7">Life Collection</a>
							</div>
						</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_06_x750.png" className="object-contain rounded-md"/>
					</div>
					
					<div className="sm:col-span-2 lg:col-span-4">
						<OwlCarousel {...settings}>
							<div>
								<a href="">
									<div className="relative flex flex-wrap group h-[26.25rem] sm:h-[25.125rem] md:h-[26.75rem] lg:h-[20rem] xl:h-[23.438rem] overflow-hidden">
										<span className="z-[1] absolute text-sm font-bold top-[0.625rem] left-[0.625rem] px-[0.375rem] py-[0.125rem] rounded text-white bg-[#F8353E]">Sale 13%</span>
										<div className="absolute">
											<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg" className="relative z-[-1] w-[220px] object-contain rounded-md"/>
											<div className="bg-white w-full pt-[0.375rem] mt-[0rem] lg:mt-[-0.5rem] xl:mt-[1.25rem] duration-500 lg:group-hover:mt-[-3.75rem] xl:group-hover:mt-[-2.125rem]">
												<div className="flex justify-between items-center text-sm pb-[0rem] xl:pb-[0.375rem]">
													<span className="uppercase text-[0.75rem]">Zara</span>
													<ul className="flex justify-center">
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li>
															<i className="fa-regular fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
													</ul>
												</div>
												<p className="text-sm font-bold pb-[0.15rem]">Tailored Fit Mesh-Panel Polo</p>
												<span className="text-red-500 text-[1rem] mr-2">$399.00</span>
												<span className="line-through text-[1rem]">$449.00</span>
												<a href="" className="flex items-center w-[9.019rem] mt-[0.625rem] text-sm p-2 rounded-md border border-blue-500 duration-500 text-blue-500 hover:text-white hover:bg-blue-500">
													<i className="fa-solid fa-cart-plus text-[1rem] mr-[0.5rem]"></i><span className="uppercase">Add to cart</span>
												</a>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div>
								<a href="">
									<div className="relative flex flex-wrap group h-[26.25rem] sm:h-[25.125rem] md:h-[26.75rem] lg:h-[20rem] xl:h-[23.438rem] overflow-hidden">
										<span className="z-[0] absolute text-sm font-bold top-[0.625rem] left-[0.625rem] px-[0.375rem] py-[0.125rem] rounded text-white bg-[#F8353E]">Sale 13%</span>
										<div className="absolute">
											<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg" className="relative z-[-1] w-[220px] object-contain rounded-md"/>
											<div className="bg-white w-full pt-[0.375rem] mt-[0rem] lg:mt-[-0.5rem] xl:mt-[1.25rem] duration-500 lg:group-hover:mt-[-3.75rem] xl:group-hover:mt-[-2.125rem]">
												<div className="flex justify-between items-center text-sm pb-[0rem] xl:pb-[0.375rem]">
													<span className="uppercase text-[0.75rem]">Zara</span>
													<ul className="flex justify-center">
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li>
															<i className="fa-regular fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
													</ul>
												</div>
												<p className="text-sm font-bold pb-[0.15rem]">Tailored Fit Mesh-Panel Polo</p>
												<span className="text-red-500 text-[1rem] mr-2">$399.00</span>
												<span className="line-through text-[1rem]">$449.00</span>
												<a href="" className="flex items-center w-[9.019rem] mt-[0.625rem] text-sm p-2 rounded-md border border-blue-500 duration-500 text-blue-500 hover:text-white hover:bg-blue-500">
													<i className="fa-solid fa-cart-plus text-[1rem] mr-[0.5rem]"></i><span className="uppercase">Add to cart</span>
												</a>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div>
								<a href="">
									<div className="relative flex flex-wrap group h-[26.25rem] sm:h-[25.125rem] md:h-[26.75rem] lg:h-[20rem] xl:h-[23.438rem] overflow-hidden">
										<span className="z-[1] absolute text-sm font-bold top-[0.625rem] left-[0.625rem] px-[0.375rem] py-[0.125rem] rounded text-white bg-[#F8353E]">Sale 13%</span>
										<div className="absolute">
											<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg" className="relative z-[-1] w-[220px] object-contain rounded-md"/>
											<div className="bg-white w-full pt-[0.375rem] mt-[0rem] lg:mt-[-0.5rem] xl:mt-[1.25rem] duration-500 lg:group-hover:mt-[-3.75rem] xl:group-hover:mt-[-2.125rem]">
												<div className="flex justify-between items-center text-sm pb-[0rem] xl:pb-[0.375rem]">
													<span className="uppercase text-[0.75rem]">Zara</span>
													<ul className="flex justify-center">
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li>
															<i className="fa-regular fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
													</ul>
												</div>
												<p className="text-sm font-bold pb-[0.15rem]">Tailored Fit Mesh-Panel Polo</p>
												<span className="text-red-500 text-[1rem] mr-2">$399.00</span>
												<span className="line-through text-[1rem]">$449.00</span>
												<a href="" className="flex items-center w-[9.019rem] mt-[0.625rem] text-sm p-2 rounded-md border border-blue-500 duration-500 text-blue-500 hover:text-white hover:bg-blue-500">
													<i className="fa-solid fa-cart-plus text-[1rem] mr-[0.5rem]"></i><span className="uppercase">Add to cart</span>
												</a>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div>
								<a href="">
									<div className="relative flex flex-wrap group h-[26.25rem] sm:h-[25.125rem] md:h-[26.75rem] lg:h-[20rem] xl:h-[23.438rem] overflow-hidden">
										<span className="z-[1] absolute text-sm font-bold top-[0.625rem] left-[0.625rem] px-[0.375rem] py-[0.125rem] rounded text-white bg-[#F8353E]">Sale 13%</span>
										<div className="absolute">
											<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg" className="relative z-[-1] w-[220px] object-contain rounded-md"/>
											<div className="bg-white w-full pt-[0.375rem] mt-[0rem] lg:mt-[-0.5rem] xl:mt-[1.25rem] duration-500 lg:group-hover:mt-[-3.75rem] xl:group-hover:mt-[-2.125rem]">
												<div className="flex justify-between items-center text-sm pb-[0rem] xl:pb-[0.375rem]">
													<span className="uppercase text-[0.75rem]">Zara</span>
													<ul className="flex justify-center">
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li>
															<i className="fa-regular fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
													</ul>
												</div>
												<p className="text-sm font-bold pb-[0.15rem]">Tailored Fit Mesh-Panel Polo</p>
												<span className="text-red-500 text-[1rem] mr-2">$399.00</span>
												<span className="line-through text-[1rem]">$449.00</span>
												<a href="" className="flex items-center w-[9.019rem] mt-[0.625rem] text-sm p-2 rounded-md border border-blue-500 duration-500 text-blue-500 hover:text-white hover:bg-blue-500">
													<i className="fa-solid fa-cart-plus text-[1rem] mr-[0.5rem]"></i><span className="uppercase">Add to cart</span>
												</a>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div>
								<a href="">
									<div className="relative flex flex-wrap group h-[26.25rem] sm:h-[25.125rem] md:h-[26.75rem] lg:h-[20rem] xl:h-[23.438rem] overflow-hidden">
										<span className="z-[1] absolute text-sm font-bold top-[0.625rem] left-[0.625rem] px-[0.375rem] py-[0.125rem] rounded text-white bg-[#F8353E]">Sale 13%</span>
										<div className="absolute">
											<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg" className="relative z-[-1] w-[220px] object-contain rounded-md"/>
											<div className="bg-white w-full pt-[0.375rem] mt-[0rem] lg:mt-[-0.5rem] xl:mt-[1.25rem] duration-500 lg:group-hover:mt-[-3.75rem] xl:group-hover:mt-[-2.125rem]">
												<div className="flex justify-between items-center text-sm pb-[0rem] xl:pb-[0.375rem]">
													<span className="uppercase text-[0.75rem]">Zara</span>
													<ul className="flex justify-center">
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li className="mr-[0.188rem]">
															<i className="fa-solid fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
														<li>
															<i className="fa-regular fa-star text-[1rem] lg:text-[0.75rem] xl:text-[1rem] text-yellow-500"></i>
														</li>
													</ul>
												</div>
												<p className="text-sm font-bold pb-[0.15rem]">Tailored Fit Mesh-Panel Polo</p>
												<span className="text-red-500 text-[1rem] mr-2">$399.00</span>
												<span className="line-through text-[1rem]">$449.00</span>
												<a href="" className="flex items-center w-[9.019rem] mt-[0.625rem] text-sm p-2 rounded-md border border-blue-500 duration-500 text-blue-500 hover:text-white hover:bg-blue-500">
													<i className="fa-solid fa-cart-plus text-[1rem] mr-[0.5rem]"></i><span className="uppercase">Add to cart</span>
												</a>
											</div>
										</div>
									</div>
								</a>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</section>

			<section className="container mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.25rem] mx-auto max-w-[75rem] px-[0.625rem] mb-[60px]">
					<div className="max-w-[36.25rem] relative rounded-md">
						<div className="absolute flex justify-center items-center w-full h-full">
							<a href="" className="p-[0.625rem] sm:p-[0.875rem] md:p-[1rem] lg:p-[2rem] rounded bg-white-0.9 duration-500 hover:text-white hover:bg-blue-500-0.9 overflow-hidden hover:scale-[1.1]">
								<p className="block w-[21.25rem] sm:w-[13.75rem] md:w-[16.25rem] uppercase text-center text-[1.25rem] sm:text-[0.875rem] lg:text-[1rem]">Fall-winter Clearance Sales</p>
								<p className="block w-[21.25rem] sm:w-[13.75rem] md:w-[16.25rem] uppercase text-center font-bold text-[1.625rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.625rem]">Get up to 50% off</p>
							</a>
						</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_01_1024x.png" className="object-contain rounded-md"/>
					</div>
					<div className="max-w-[36.25rem] relative rounded-md">
						<div className="absolute flex justify-center items-center w-full h-full">
							<a href="" className="p-[0.875rem] md:p-[1rem] lg:p-[2rem] rounded bg-white-0.9 duration-500 hover:text-white hover:bg-blue-500-0.9 overflow-hidden hover:scale-[1.1]">
								<p className="block w-[13.75rem] md:w-[16.25rem] uppercase text-center text-[0.875rem] lg:text-[1rem]">Summer 2022</p>
								<p className="block w-[13.75rem] md:w-[16.25rem] uppercase text-center font-bold text-[1.375rem] md:text-[1.5rem] lg:text-[1.625rem]">New Arrivals</p>
							</a>
						</div>
						<img src="http://127.0.0.1:8000/guest/images/index/lay20_02_1024x.png" className="object-contain rounded-md"/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem] max-w-[75rem] px-[0.625rem] mx-auto mb-[60px]">
					<div className="flex">
						<i className="fa-solid fa-truck-fast text-blue-500 text-[45px] duration-500 group-hover:text-blue-500"></i>
						<div className="pl-[21px]">
							<p className="uppercase font-bold text-[16px]">Free shipping</p>
							<p className="text-[14px]">Free shipping on all Ho Chi Minh City or order above $99.00</p>
						</div>
					</div>
					<div className="flex">
						<i className="fa-solid fa-headset text-blue-500 text-[45px] duration-500 group-hover:text-blue-500"></i>
						<div className="pl-[21px]">
							<p className="uppercase font-bold text-[16px]">Support 24/7</p>
							<p className="text-[14px]">Contact us 24 hours a day, 7 days a week</p>
						</div>
					</div>
					<div className="flex">
						<i className="fa-solid fa-arrows-rotate text-blue-500 text-[45px] duration-500 group-hover:text-blue-500"></i>
						<div className="pl-[21px]">
							<p className="uppercase font-bold text-[16px]">30 days return</p>
							<p className="text-[14px]">Simply return it within 24 days for an exchange</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Index;