import React from 'react';
import styled from 'styled-components';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Header from '../../components/guest/Header';
import PrimaryNavigation from '../../components/guest/PrimaryNavigation';
import StickyNavigation from '../../components/guest/StickyNavigation';
import MobileNavigation from '../../components/guest/MobileNavigation';
import BackToTop from '../../components/guest/BackToTop';
import Footer from '../../components/guest/Footer';

// ========== STYLED COMPONENTS ========== //
// ---------- Banner ---------- //
const BannerContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 20px;
	width: 100%;
	padding: 0 10px;
	margin: 0 auto;
	margin-bottom: 60px;
	@media screen and (min-width: 576px) {
		max-width: 546px;
	}
	@media screen and (min-width: 790px) {
		max-width: 770px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 990px;
		grid-template-columns: 228px 722px;
	}
	@media screen and (min-width: 1230px) {
		max-width: 1200px;
		grid-template-columns: 280px 880px;
	}
`;

const BannerSection = styled.section`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 20px;
	margin-top: 20px;
	@media screen and (min-width: 576px) {
		max-width: 546px;
	}
	@media screen and (min-width: 790px) {
		max-width: 770px;
		grid-template-columns: 493px 237px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 990px;
		grid-template-columns: 475px 227px;
	}
	@media screen and (min-width: 1230px) {
		max-width: 1200px;
		grid-template-columns: 580px 280px;
	}
`;

const PrimaryBanner = styled.div`
	position: relative;
	margin: 0 auto;
`;

const PrimaryBannerContent = styled.div`
	position: absolute;
	top: 34%;
	left: 7%;
	display: flex;
	flex-wrap: wrap;
	text-transform: uppercase;
	justify-content: space-between;
`;

const PrimaryBannerTitle = styled.p`
	font-size: 15px;
	width: 100%;
	font-weight: 400;
	@media screen and (min-width: 576px) {
		font-size: 26px;
	}
	@media screen and (min-width: 790px) {
		font-size: 16px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 16px;
	}
`;

const PrimaryBannerHeading = styled.p`
	font-size: 19px;
	font-weight: 500;
	letter-spacing: 0.6px;
	margin-bottom: 8px;
	width: 100%;
	@media screen and (min-width: 576px) {
		font-size: 36px;
	}
`;

const PrimaryBannerLink = styled.a`
	font-size: 12px;
	font-weight: 500;
	padding: 6px 28px;
	color: var(--blue-400);
	border: 1px solid var(--blue-400);
	border-radius: 6px;
	transition: 500ms ease-in-out;
	&:hover {
		color: white;
		background-color: var(--blue-400);
	}
	@media screen and (min-width: 790px) {
		font-size: 14px;
		padding: 12px 28px;
	}
`;

const PrimaryBannerImage = styled.img`
	border-radius: 6px;
	object-fit: cover;
`;

const SecondaryBanner = styled.a`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	padding: 20px;
	width: 80%;
	height: 374px;
	margin: 0 auto;
	@media screen and (min-width: 576px) {
		width: 48%;
		height: 394px;
	}
	@media screen and (min-width: 790px) {
		width: 100%;
		height: 100%;
	}

	&:hover .secondary-banner--content {
		color: white;
		background-color: rgba(40, 121, 254, 0.8);
	}
`;

const SecondaryBannerContent = styled.div`
	font-size: 15px;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	padding: 19px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 6px;
	transition: 500ms ease-in-out;
	@media screen and (min-width: 1024px) {
		font-size: 15px;
		padding: 14px;
	}
	@media screen and (min-width: 1230px) {
		font-size: 16px;
		padding: 26px;
	}
`;

const SecondaryBannerHeading = styled.h3`
	font-size: 23px;
	@media screen and (min-width: 1024px) {
		font-size: 26px;
	}
`;

const SecondaryBannerImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	border-radius: 6px;
	object-fit: cover;
`;

// ---------- Secondary Navigation ---------- //
const SecondaryNavigationContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 20px;
	padding: 0 10px;
	margin: 0 auto;
	margin-bottom: 60px;
	width: 100%;
	@media screen and (min-width: 576px) {
		max-width: 546px;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media screen and (min-width: 790px) {
		max-width: 770px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 990px;
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
	@media screen and (min-width: 1230px) {
		max-width: 1200px;
	}
`;

const SecondaryNavigationLink = styled.a`
	position: relative;
	display: block;
	width: 100%;
	height: 60px;
	@media screen and (min-width: 576px) {
		height: 70px;
	}
	@media screen and (min-width: 790px) {
		height: 80px;
	}

	& img {
		border-radius: 6px;
		object-fit: cover;
		width: 100%;
		height: 100%
	}
`;

const SecondaryNavigationTitle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: transparent;
	font-size: 16px;
	font-weight: 500;
	color: ${props => props.black ? 'black' : 'white'};
	border-radius: 6px;
	transition: 500ms ease-in-out;
	&:hover {
		color: white;
		background-color: var(--blue-400);
	}
	@media screen and (min-width: 1230px) {
		font-size: 18px;
	}

`;

// ---------- Product Slider ---------- //
const ProductSliderContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 20px;
	padding: 0 10px;
	margin: 0 auto;
	margin-bottom: 60px;
	width: 100%;
	@media screen and (min-width: 576px) {
		max-width: 546px;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media screen and (min-width: 790px) {
		max-width: 770px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 990px;
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
	@media screen and (min-width: 1230px) {
		max-width: 1200px;
	}
`;

const ProductSliderBanner = styled.div`
	position: relative;
	border-radius: 6px 0 0 6px;
	padding: 10px;
	@media screen and (min-width: 576px) {
		padding: 30px 15px;
	}

	& img {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		border-radius: 6px 0 0 6px;
	}
`;

const ProductSliderBannerHeading = styled.div`
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	color: var(--grey-800);
	padding: 0 15px;
	@media screen and (min-width: 576px) {
		font-size: 20px;
	}

	& h3 {
		font-size: 22px;
		letter-spacing: 0.78px;
		@media screen and (min-width: 576px) {
			font-size: 24px;
		}
		@media screen and (min-width: 790px) {
			font-size: 28px;
		}
	}
`;

const ProductSliderBannerUnorderList = styled.ul`
	display: block;
	padding: 0;
	margin-top: 8px;

	& a {
		display: block;
		padding: 6px;
		color: var(--grey-500);
		font-size: 13px;
		font-weight: 300;
		border-radius: 6px;
		&:hover,
		&.active {
			color: var(--blue-400);
			background-color: rgba(255, 255, 255, 0.9);
		}
		@media screen and (min-width: 576px) {
			font-size: 14px;
			padding: 6px 15px;
		}
	}
`;

const ProductSwiperContainer = styled.div`
	@media screen and (min-width: 576px) {
		grid-column: span 2 / span 2;
	}
	@media screen and (min-width: 1024px) {
		grid-column: span 4 / span 4;
	}

	& .product-swiper .swiper-button-prev,
	& .product-swiper .swiper-button-next  {
		top: 100px;
		color: var(--grey-800);
		background-color: white;
		border-radius: 50%;
		width: 26px;
		height: 26px;
		&:after {
			font-size: 12px;
		}
		&:hover {
			color: white;
			background-color: var(--blue-400);
		}
		@media screen and (min-width: 576px) {
			width: 38px;
			height: 38px;
			&:after {
				font-size: 18px;
			}
		}
		@media screen and (min-width: 790px) {
			top: 150px;
		}
	}
`;

const ProductContainer = styled.a`
	position: relative;
	display: block;
	width: 100%;
	height: 340px;
	overflow-y: hidden;
	@media screen and (min-width: 576px) {
		height: 360px;
		&:hover .product-content {
			bottom: 0px;
		}
	}
	@media screen and (min-width: 790px) {
		height: 404px;
	}
	@media screen and (min-width: 1024px) {
		height: 304px;
	}
	@media screen and (min-width: 1230px) {
		height: 375px;
	}

	& img {
		position: absolute;
		z-index: -1;
		top: 0;
		width: 100%;
	}
`;

const ProductLabel = styled.span`
	position: absolute;
	top: 8px;
	left: 8px;
	padding: 2px 4px;
	border-radius: 4px;
	color: white;
	font-size: 12px;
	font-weight: 500;
	background-color: var(--red-400);
`;

const ProductContent = styled.div`
	display: block;
	position: absolute;
	bottom: 0px;
	width: 100%;
	padding-top: 10px;
	background-color: white;
	transition: 500ms ease-in-out;
	@media screen and (min-width: 1024px) {
		bottom: -50px;
	}

	.product-vendor-container {
		display: flex;
		flex-direction: row;
		flex-direction: column-reverse;
		@media screen and (min-width: 790px) {
			flex-direction: row;
			justify-content: space-between;
		}

		.product-vendor {
			text-transform: uppercase;
			color: var(--grey-500);
			margin-bottom: 6px;
			font-size: 14px;
			@media screen and (min-width: 576px) {
				font-size: 12px;
			}
			@media screen and (min-width: 790px) {
				font-size: 14px;
			}
		}

		.product-rating svg {
			display: inline-block;
			fill: var(--orange-500);
			width: 12px;
			height: 12px;
			&:not(:first-child) {
				margin-left: 4px;
			}
			@media screen and (min-width: 790px) {
				width: 14px;
				height: 14px;
			}
		}
	}

	.product-title {
		font-size: 14px;
		font-weight: 400;
		color: var(--grey-800);
		&:hover {
			color: var(--blue-400);
		}
	}
`;

const ProductPrice = styled.span`
	display: inline-block;
	font-size: 16px;
	font-weight: 500;
	margin-left: ${props => props.sale ? '0' : '8px'};
	color: ${props => props.sale ? 'var(--red-400)' : 'var(--grey-800)'};
	text-decoration: ${props => props.sale ? 'none' : 'line-through' };
`;

const AddToCartButton = styled.button`
	font-size: 14px;
	font-weight: 400;
	color: var(--blue-400);
	background-color: white;
	border-width: 1px;
	border-color: var(--blue-400);
	padding: 8px;
	margin-top: 8px;
	border-radius: 6px;
	text-transform: uppercase;
	&:hover {
		color: white;
		background-color: var(--blue-400);
	}
	&:hover svg {
		color: white;
		background-color: var(--blue-400);
		fill: white;
	}
	@media screen and (min-width: 576px) {
		padding: 10px 16px;
	}
	@media screen and (min-width: 1024px) {
		margin-top: 10px;
	}
	@media screen and (min-width: 1230px) {
		margin-top: 20px;
	}
	
	svg {
		display: inline-block;
		width: 20px;
		height: 20px;
		fill: var(--blue-400);
		margin-right: 8px;
		@media screen and (min-width: 576px) {
			margin-right: 16px;
		}
	}
`;

// ---------- Sale & New Arrival Banner ---------- //
const SaleBannerContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 20px;
	width: 100%;
	padding: 0 10px;
	margin: 0 auto;
	margin-bottom: 60px;
	@media screen and (min-width: 576px) {
		max-width: 546px;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media screen and (min-width: 790px) {
		max-width: 770px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 990px;
	}
	@media screen and (min-width: 1230px) {
		max-width: 1200px;
	}
`;

const SaleBannerContainerContent = styled.div`
	position: relative;
	width: 100%;
	height: 176px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (min-width: 576px) {
		height: 157px;
	}
	@media screen and (min-width: 790px) {
		height: 220px;
	}
	@media screen and (min-width: 1024px) {
		height: 278px;
	}
	@media screen and (min-width: 1230px) {
		height: 340px;
	}

	& .sale-banner__link {
		z-index: 1;
		color: var(--grey-800);
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 6px;
		padding: 15px;
		transition: 500ms ease-in-out;
		&:hover {
			color: white;
			background-color: rgba(40, 121, 254, 0.9);
			padding: 30px 15px;
		}
		@media screen and (min-width: 790px) {
			&:hover {
				padding: 30px;
			}
		}
	}

	& .sale-banner__title-small {
		font-size: 15px;
		@media screen and (min-width: 1230px) {
			font-size: 16px;
		}
	}

	& .sale-banner__title-large {
		font-size: 20px;
		@media screen and (min-width: 576px) {
			font-size: 23px;
		}
		@media screen and (min-width: 1230px) {
			font-size: 26px;
		}
	}

	& img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 6px;
	}
`;

// ========== REACT FUNCTION COMPONENT ========== //
const Index = () => {
	return (
		<>
			<Header/>
			<StickyNavigation/>
			<MobileNavigation/>
			<BackToTop/>

			<BannerContainer>
				<PrimaryNavigation/>

				<BannerSection>
					<PrimaryBanner>
						<PrimaryBannerContent>
							<PrimaryBannerTitle>Summer 2022</PrimaryBannerTitle>
							<PrimaryBannerHeading>New Arrivals</PrimaryBannerHeading>
							<PrimaryBannerLink href="">Discover now</PrimaryBannerLink>
						</PrimaryBannerContent>

						<PrimaryBannerImage src="http://127.0.0.1:8000/guest/images/index/lay20_03_x1024.png" alt="primary-banner"/>
					</PrimaryBanner>

					<SecondaryBanner href="">
						<SecondaryBannerContent className="secondary-banner--content">
							<p>Top view in this week</p>
							<SecondaryBannerHeading>Trending</SecondaryBannerHeading>
						</SecondaryBannerContent>

						<SecondaryBannerImage src="http://127.0.0.1:8000/guest/images/index/lay20_04_x1024.png" alt="secondary-banner"/>
					</SecondaryBanner>
				</BannerSection>
			</BannerContainer>

			<SecondaryNavigationContainer>
				<SecondaryNavigationLink href="">
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_10_x80.png"/>
					<SecondaryNavigationTitle>Women</SecondaryNavigationTitle>
				</SecondaryNavigationLink>

				<SecondaryNavigationLink href="">
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_11_x80.png"/>
					<SecondaryNavigationTitle black>Men</SecondaryNavigationTitle>
				</SecondaryNavigationLink>

				<SecondaryNavigationLink href="">
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_12_x80.png"/>
					<SecondaryNavigationTitle>Accessories</SecondaryNavigationTitle>
				</SecondaryNavigationLink>

				<SecondaryNavigationLink href="">
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_13_x80.png"/>
					<SecondaryNavigationTitle black>Shoes</SecondaryNavigationTitle>
				</SecondaryNavigationLink>

				<SecondaryNavigationLink href="">
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_14_x80.png"/>
					<SecondaryNavigationTitle>New Arrivals</SecondaryNavigationTitle>
				</SecondaryNavigationLink>
			</SecondaryNavigationContainer>

			<ProductSliderContainer>
				<ProductSliderBanner>
					<ProductSliderBannerHeading>
						<p>Women's</p>
						<h3>Women</h3>
					</ProductSliderBannerHeading>

					<ProductSliderBannerUnorderList>
						<li><a href="" className="active">Denim Collection</a></li>
						<li><a href="">Party Collection</a></li>
						<li><a href="">Life Collection</a></li>
					</ProductSliderBannerUnorderList>
					
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_06_x750.png"/>
				</ProductSliderBanner>
				
				<ProductSwiperContainer>
					<Swiper
						modules = {[Navigation]}
						navigation = {true}
						speed = {400}
						spaceBetween = {20}
						slidesPerView = {1}
						breakpoints = {{
							576: {
								slidesPerView: 2
							},
							1024: {
								slidesPerView: 4
							}
						}}
						className = "product-swiper"
					>
						<SwiperSlide>
							<ProductContainer href="">
								<ProductLabel>Sale 13%</ProductLabel>

								<ProductContent className="product-content">
									<div className="product-vendor-container">
										<div className="product-vendor">Zara</div>
										
										<div className="product-rating">
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
										</div>
									</div>

									<h2 className="product-title">Tailored Fit Mesh-Panel Polo</h2>

									<div className="product-price-container">
										<ProductPrice sale>$400.00</ProductPrice>
										<ProductPrice>$460.00</ProductPrice>
									</div>

									<AddToCartButton>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
											<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
											<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
											<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
										</svg>

										<span>Add to cart</span>
									</AddToCartButton>
								</ProductContent>

								<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg"/>
							</ProductContainer>
						</SwiperSlide>
						
						<SwiperSlide>
							<ProductContainer href="">
								<ProductLabel>Sale 13%</ProductLabel>
								<ProductContent className="product-content">
									<div className="product-vendor-container">
										<div className="product-vendor">Zara</div>
										
										<div className="product-rating">
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
										</div>
									</div>

									<h2 className="product-title">Tailored Fit Mesh-Panel Polo</h2>

									<div className="product-price-container">
										<ProductPrice sale>$400.00</ProductPrice>
										<ProductPrice>$460.00</ProductPrice>
									</div>

									<AddToCartButton>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
											<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
											<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
											<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
										</svg>

										<span>Add to cart</span>
									</AddToCartButton>
								</ProductContent>
								<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg"/>
							</ProductContainer>
						</SwiperSlide>

						<SwiperSlide>
							<ProductContainer href="">
								<ProductLabel>Sale 13%</ProductLabel>
								<ProductContent className="product-content">
									<div className="product-vendor-container">
										<div className="product-vendor">Zara</div>
										
										<div className="product-rating">
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
										</div>
									</div>

									<h2 className="product-title">Tailored Fit Mesh-Panel Polo</h2>

									<div className="product-price-container">
										<ProductPrice sale>$400.00</ProductPrice>
										<ProductPrice>$460.00</ProductPrice>
									</div>

									<AddToCartButton>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
											<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
											<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
											<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
										</svg>

										<span>Add to cart</span>
									</AddToCartButton>
								</ProductContent>
								<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg"/>
							</ProductContainer>
						</SwiperSlide>

						<SwiperSlide>
							<ProductContainer href="">
								<ProductLabel>Sale 13%</ProductLabel>
								<ProductContent className="product-content">
									<div className="product-vendor-container">
										<div className="product-vendor">Zara</div>
										
										<div className="product-rating">
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
										</div>
									</div>

									<h2 className="product-title">Tailored Fit Mesh-Panel Polo</h2>

									<div className="product-price-container">
										<ProductPrice sale>$400.00</ProductPrice>
										<ProductPrice>$460.00</ProductPrice>
									</div>

									<AddToCartButton>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
											<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
											<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
											<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
										</svg>

										<span>Add to cart</span>
									</AddToCartButton>
								</ProductContent>
								<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg"/>
							</ProductContainer>
						</SwiperSlide>

						<SwiperSlide>
							<ProductContainer href="">
								<ProductLabel>Sale 13%</ProductLabel>
								<ProductContent className="product-content">
									<div className="product-vendor-container">
										<div className="product-vendor">Zara</div>
										
										<div className="product-rating">
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
										</div>
									</div>

									<h2 className="product-title">Tailored Fit Mesh-Panel Polo</h2>

									<div className="product-price-container">
										<ProductPrice sale>$400.00</ProductPrice>
										<ProductPrice>$460.00</ProductPrice>
									</div>

									<AddToCartButton>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
											<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
											<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
											<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
										</svg>

										<span>Add to cart</span>
									</AddToCartButton>
								</ProductContent>
								<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg"/>
							</ProductContainer>
						</SwiperSlide>

						<SwiperSlide>
							<ProductContainer href="">
								<ProductLabel>Sale 13%</ProductLabel>
								<ProductContent className="product-content">
									<div className="product-vendor-container">
										<div className="product-vendor">Zara</div>
										
										<div className="product-rating">
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
											<svg viewBox="0 0 478.53 478.53" xmlns="http://www.w3.org/2000/svg">
												<path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35 c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07 c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018 c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199 c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565 l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
											</svg>
										</div>
									</div>

									<h2 className="product-title">Tailored Fit Mesh-Panel Polo</h2>

									<div className="product-price-container">
										<ProductPrice sale>$400.00</ProductPrice>
										<ProductPrice>$460.00</ProductPrice>
									</div>

									<AddToCartButton>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.305 366.305">
											<path d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817 c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321 C180.658,340.705,171.545,349.817,160.336,349.817z"/>
											<path d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579 c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817 c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321 C295.287,340.705,286.158,349.817,274.965,349.817z"/>
											<path d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23 c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268 c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488 -0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36 s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768 c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131 L87.504,105.927h260.301L311.17,254.33z"/>
										</svg>

										<span>Add to cart</span>
									</AddToCartButton>
								</ProductContent>
								<img src="http://127.0.0.1:8000/guest/images/index/TailoredFitMesh-PanelPolo_4_600x.jpg"/>
							</ProductContainer>
						</SwiperSlide>
    				</Swiper>
				</ProductSwiperContainer>
			</ProductSliderContainer>

			<SaleBannerContainer>
				<SaleBannerContainerContent>
					<a href="" className="sale-banner__link">
						<p className="sale-banner__title-small">Fall-winter Clearance Sales</p>
						<p className="sale-banner__title-large">Get up to 50% off</p>
					</a>

					<img src="http://127.0.0.1:8000/guest/images/index/lay20_01_1024x.png"/>
				</SaleBannerContainerContent>

				<div className="max-w-[36.25rem] relative rounded-md">
					<div className="absolute flex justify-center items-center w-full h-full">
						<a href="" className="p-[0.875rem] md:p-[1rem] lg:p-[2rem] rounded bg-white-0.9 duration-500 hover:text-white hover:bg-blue-500-0.9 overflow-hidden hover:scale-[1.1]">
							<p className="block w-[13.75rem] md:w-[16.25rem] uppercase text-center text-[0.875rem] lg:text-[1rem]">Summer 2022</p>
							<p className="block w-[13.75rem] md:w-[16.25rem] uppercase text-center font-bold text-[1.375rem] md:text-[1.5rem] lg:text-[1.625rem]">New Arrivals</p>
						</a>
					</div>
					<img src="http://127.0.0.1:8000/guest/images/index/lay20_02_1024x.png" className="object-contain rounded-md"/>
				</div>
			</SaleBannerContainer>

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

			<Footer/>
		</>
	);
}

export default Index;