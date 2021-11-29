import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardList from '../CardList/CardList';
import './HouseList.css'
const HouseList: React.FC = () => {

	const { getHouses } = useActions()
	const houses = useTypedSelector(state => state.realty.houses)
	useEffect(() => {
		getHouses()
	}, [])

	return (
		<section className="home__list-sec">
			<Container>
				<Grid container spacing={2}>
					<Grid item md={12}>
						<Typography variant="h3" gutterBottom component="h3" sx={{ fontWeight: '300' }}>
							Продажа домов
						</Typography>
						<CardList housesList={houses} />
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default HouseList;