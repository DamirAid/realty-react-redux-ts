import React from 'react';
import ApartmentList from '../../components/ApartmentList/ApartmentList';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import HouseList from '../../components/HouseList/HouseList';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
const HomePage = () => {
	return (
		<div>
			<MainCarousel />
			<FilterBlock/>
			<HouseList/>
			<ApartmentList/>
		</div>
	);
};

export default HomePage;