import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AdminLayout from './layouts/AdminLayout';
import IndexCategory from './pages/admin/category/IndexCategory';
import CreateCategory from './pages/admin/category/CreateCategory';
import EditCategory from './pages/admin/category/EditCategory';
import IndexSubCategory from './pages/admin/sub-category/IndexSubCategory';
import CreateSubCategory from './pages/admin/sub-category/CreateSubCategory';
import EditSubCategory from './pages/admin/sub-category/EditSubCategory';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/dashboard' element={<AdminLayout/>}>
					<Route path='/dashboard/category' element={<IndexCategory/>}/>
					<Route path='/dashboard/category/create' element={<CreateCategory/>}/>
					<Route path='/dashboard/category/:id/edit' element={<EditCategory/>}/>
					<Route path='/dashboard/sub-category' element={<IndexSubCategory/>}/>
					<Route path='/dashboard/sub-category/create' element={<CreateSubCategory/>}/>
					<Route path='/dashboard/sub-category/:id/edit' element={<EditSubCategory/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;