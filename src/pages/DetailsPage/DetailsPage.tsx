import React from 'react';
import { useParams } from 'react-router';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import RealtyDetails from '../../components/RealtyDetails/RealtyDetails';
import Comments from '../../components/Comments/Comments'
const DetailsPage = () => {
	let params = useParams().id;
	return (
		<div>
			<MainCarousel />
			<RealtyDetails params={params} />
			<Comments params={params}/>
		</div>
	);
};

export default DetailsPage;