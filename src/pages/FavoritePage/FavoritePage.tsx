import React from 'react';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import MainCarousel from '../../components/MainCarousel/MainCarousel';

const FavoritePage = () => {
	return (
		<div>
			<MainCarousel />
			<FavoriteList/>
		</div>
	);
};

export default FavoritePage;