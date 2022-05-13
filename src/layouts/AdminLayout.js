import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';

import Header from '../components/admin/Header';
import PrimaryNavigation from '../components/admin/PrimaryNavigation';
import MobileNavigation from '../components/admin/MobileNavigation';

const AdminLayout = () => {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-[40%_60%] lg:grid-cols-[24%_76%] xl:grid-cols-[20%_80%]">
				<PrimaryNavigation/>
				<MobileNavigation/>

				<section className="col-span-2 lg:col-span-1 grid-rows-2">
					<Header/>
					<Outlet/>
				</section>
			</div>
		</div>
	);
}

export default AdminLayout;