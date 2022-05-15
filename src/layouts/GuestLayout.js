import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../components/guest/Header';
import StickyNavigation from '../components/guest/StickyNavigation';
import MobileNavigation from '../components/guest/MobileNavigation';
import BackToTop from '../components/guest/BackToTop';
import Footer from '../components/guest/Footer';

const GuestLayout = () => {
	return (
		<>
			<Header/>
			<StickyNavigation/>
			<MobileNavigation/>
			<BackToTop/>
			<Outlet/>
			<Footer/>
		</>
	);
}

export default GuestLayout;