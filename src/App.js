import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import IndexCategory from './pages/admin/category/IndexCategory';
import CreateCategory from './pages/admin/category/CreateCategory';
import EditCategory from './pages/admin/category/EditCategory';
import IndexSubCategory from './pages/admin/sub-category/IndexSubCategory';
import CreateSubCategory from './pages/admin/sub-category/CreateSubCategory';
import EditSubCategory from './pages/admin/sub-category/EditSubCategory';
import IndexProduct from './pages/admin/product/IndexProduct';
import CreateProduct from './pages/admin/product/CreateProduct';
import EditProduct from './pages/admin/product/EditProduct';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/dashboard' element={<IndexCategory/>}/>
				<Route path='/admin/category' element={<IndexCategory/>}/>
				<Route path='/admin/category/create' element={<CreateCategory/>}/>
				<Route path='/admin/category/:id/edit' element={<EditCategory/>}/>
				<Route path='/admin/sub-category' element={<IndexSubCategory/>}/>
				<Route path='/admin/sub-category/create' element={<CreateSubCategory/>}/>
				<Route path='/admin/sub-category/:id/edit' element={<EditSubCategory/>}/>
				<Route path='/admin/product' element={<IndexProduct/>}/>
				<Route path='/admin/product/create' element={<CreateProduct/>}/>
				<Route path='/admin/product/:id/edit' element={<EditProduct/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;