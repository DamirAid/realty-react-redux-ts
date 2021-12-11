import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import FilterPage from './pages/FilterPage/FilterPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import Login from './components/Auth/Login';
import AdminPage from './pages/AdminPage/AdminPage';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/category' element={<FilterPage />} />
			<Route path='/details/:id' element={<DetailsPage />} />
			<Route path='/favorites' element={<FavoritePage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/admin' element={<AdminPage />} />
		</Routes>
	)
};

export default MainRoutes;