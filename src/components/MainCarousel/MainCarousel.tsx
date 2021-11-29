import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './MainCarousel.css'
import slide1 from '../../assets/img/house1.jpg'
import slide2 from '../../assets/img/house2.jpg'
import slide3 from '../../assets/img/house3.jpg'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const MainCarousel: React.FC = () => {
	return (
		<section className="main__carousel-sec">
			<Swiper className="mySwiper">
				<Box className="text_wrap">
					<Typography variant="h3" gutterBottom component="h3" sx={{fontWeight: '700'}}>
					Жилые комплексы <br />Квартиры от строительных <span>компаний</span>
					</Typography>
				</Box>
				<SwiperSlide style={{ backgroundImage: `url(${slide1})` }}></SwiperSlide>
				<SwiperSlide style={{ backgroundImage: `url(${slide2})` }}></SwiperSlide>
				<SwiperSlide style={{ backgroundImage: `url(${slide3}` }}></SwiperSlide>
			</Swiper>
		</section>
	);
};

export default MainCarousel;