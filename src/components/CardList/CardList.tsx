import React from 'react';
import Grid from '@mui/material/Grid';
import CardItem from '../CardItem/CardItem'


interface CardListProps {
	housesList: any[]
}
const CardList: React.FC<CardListProps> = ({ housesList }) => {



	return (
		<Grid container spacing={2}>
			{housesList ? (
				housesList.map(item => (
					<Grid key={item.id} item md={3}>
						<CardItem item={item} />
					</Grid>
				))
			) : null}


		</Grid>
	);
};

export default CardList;