import React, { useEffect } from 'react';
import Card from '@mui/material/Card';

import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, {
	Autoplay
} from 'swiper';
import { Button, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { checkRealtyInFavorite } from '../../helpers/favoriteFunctions'
import { Link } from 'react-router-dom';
import { IDetails } from '../../types/realty';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
SwiperCore.use([Autoplay]);

interface FavoriteItemProps {
	item: IDetails
}

const CardItem: React.FC<FavoriteItemProps> = ({ item }) => {
	const { addRealtyToFavoriteList } = useActions()
	const favoriteLength = useTypedSelector(state => state.realty.favoriteLength)
	useEffect(() => {
		checkRealtyInFavorite(item.id)
	}, [favoriteLength])

	return (
		<Card sx={{ maxWidth: 345 }}>
			<Swiper
				className="mySwiper"
				loop={true}
				autoplay={{
					"delay": 2000,
					"disableOnInteraction": false
				}}>

				{item.image ? (item.image.map(img => (
					<SwiperSlide >
						<CardMedia
							component="img"
							image={img}
							alt="дом"
							loading="lazy"
						/>
					</SwiperSlide>
				))) : null}

			</Swiper>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{`${item.area} кв.м`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`${item.rooms}-комн. кв`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`${item.price}$`}
				</Typography>
			</CardContent>
			<CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
				<IconButton aria-label="add to favorites" onClick={() => addRealtyToFavoriteList(item)} color={checkRealtyInFavorite(item.id) ? 'primary' : 'secondary'}>
					<FavoriteIcon />
				</IconButton>

				<Button variant="outlined" endIcon={<MoreHorizIcon />}>
					<Link to={`/details/${item.id}`}>
						Подробнее
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
}

export default CardItem;
