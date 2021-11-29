import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardList from '../CardList/CardList';
import './ApartmentList.css'
const ApartmentList: React.FC = () => {
	const { getApartments } = useActions()
	const apartments = useTypedSelector(state => state.realty.apartments)
	useEffect(() => {
		getApartments()
	}, [])
	return (
		<section className="home__list-sec">
			<Container>
				<Grid container spacing={2}>
					<Grid item md={12}>
						<Typography variant="h3" gutterBottom component="h3" sx={{ fontWeight: '300' }}>
							Продажа квартир
						</Typography>
						<CardList housesList={apartments} />
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default ApartmentList;