import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
const FavoriteList: React.FC = () => {


	const favorite = useTypedSelector(state => state.realty.favorite)
	const favoriteLength = useTypedSelector(state => state.realty.favoriteLength)
	const { getFavorite } = useActions()
	useEffect(() => {
		getFavorite()
	}, [favoriteLength])

	return (
		<section className="home__list-sec">
			<Container>
				<Grid container spacing={2}>
					<Grid item md={12}>
						<Typography variant="h3" gutterBottom component="h3" sx={{ fontWeight: '300' }}>
							Избранное
						</Typography>
						<Grid container spacing={2}>
							{favorite.realties ? (
								favorite.realties.map(item => (
									<Grid key={item.id} item md={3}>
										<FavoriteItem item={item.item} />
									</Grid>
								))
							) : null}


						</Grid>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default FavoriteList;