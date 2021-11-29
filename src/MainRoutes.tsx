import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import FilterPage from './pages/FilterPage/FilterPage';
import HomePage from './pages/HomePage/HomePage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

const MainRoutes: React.FC = () => {
  return (
  
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<FilterPage />} />
						<Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/favorites" element={<FavoritePage />} />						
          </Routes>
        </BrowserRouter>

  );
};

export default MainRoutes;