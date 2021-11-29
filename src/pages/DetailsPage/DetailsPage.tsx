import React from 'react';
import { useParams } from 'react-router';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import RealtyDetails from '../../components/RealtyDetails/RealtyDetails';

const DetailsPage = () => {
	let params = useParams().id;
	return (
		<div>
			<MainCarousel />
			<RealtyDetails params={params} />
		</div>
	);
};

export default DetailsPage;