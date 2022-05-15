import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GuestLayout from './layouts/GuestLayout';
import Index from './pages/guest/Index';

import AdminLayout from './layouts/AdminLayout';
import IndexCategory from './pages/admin/category/IndexCategory';
import CreateCategory from './pages/admin/category/CreateCategory';
import EditCategory from './pages/admin/category/EditCategory';
import IndexSubCategory from './pages/admin/sub-category/IndexSubCategory';
import CreateSubCategory from './pages/admin/sub-category/CreateSubCategory';
import EditSubCategory from './pages/admin/sub-category/EditSubCategory';
import IndexProduct from './pages/admin/product/IndexProduct';
import CreateProduct from './pages/admin/product/CreateProduct';
import EditProduct from './pages/admin/product/EditProduct';
import IndexNews from './pages/admin/news/IndexNews';
import CreateNews from './pages/admin/news/CreateNews';
import EditNews from './pages/admin/news/EditNews';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<GuestLayout/>}>
					<Route path='/' element={<Index/>}/>
				</Route>
				<Route path='/admin' element={<AdminLayout/>}>
					<Route path='/admin/category' element={<IndexCategory/>}/>
					<Route path='/admin/category/create' element={<CreateCategory/>}/>
					<Route path='/admin/category/:id/edit' element={<EditCategory/>}/>
					<Route path='/admin/sub-category' element={<IndexSubCategory/>}/>
					<Route path='/admin/sub-category/create' element={<CreateSubCategory/>}/>
					<Route path='/admin/sub-category/:id/edit' element={<EditSubCategory/>}/>
					<Route path='/admin/product' element={<IndexProduct/>}/>
					<Route path='/admin/product/create' element={<CreateProduct/>}/>
					<Route path='/admin/product/:id/edit' element={<EditProduct/>}/>
					<Route path='/admin/news' element={<IndexNews/>}/>
					<Route path='/admin/news/create' element={<CreateNews/>}/>
					<Route path='/admin/news/:id/edit' element={<EditNews/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;