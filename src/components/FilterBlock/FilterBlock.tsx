import { Button, Container, Grid, TextField } from '@mui/material';
import React, {ChangeEvent, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import history from '../../helpers/history';
import './FilterBlock.css'
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
const FilterBlock: React.FC = () => {
	const [type, setType] = useState<string | null>(getType())
	const [rooms, setRooms] = useState<string | null>(getRooms())
	const [priceFrom, setPriceFrom] = useState<string | null>(getPriceFrom())
	const [priceTo, setPriceTo] = useState<string | null>(getPriceTo())

	const {getRealty} = useActions()

	function getType() {
		const search = new URLSearchParams(history.location.search);
		return search.get('type')
	}
	function getRooms() {
		const search = new URLSearchParams(history.location.search);
		return search.get('rooms')
	}
	function getPriceFrom() {
		const search = new URLSearchParams(history.location.search);
		return search.get('price_gte')!
	}
	function getPriceTo() {
		const search = new URLSearchParams(history.location.search);
		return search.get('price_lte')!
	}
	const handleChangeType = (e:any) => {
		const search = new URLSearchParams(history.location.search);
		search.set('type', e.target.value)
		history.push(`${history.location.pathname}?${search.toString()}`)
		setType(e.target.value);
	};
	const handleChangeRooms = (e:any) => {
		const search = new URLSearchParams(history.location.search);
		search.set('rooms', e.target.value)
		history.push(`${history.location.pathname}?${search.toString()}`)
		setRooms(e.target.value);
	};
	const handleChangePriceFrom = (e: ChangeEvent<HTMLInputElement>) => {
		const search = new URLSearchParams(history.location.search);
		search.set('price_gte', e.target.value)
		history.push(`${history.location.pathname}?${search.toString()}`)
		setPriceFrom(e.target.value)
	}
	const handleChangePriceTo = (e: ChangeEvent<HTMLInputElement>) => {
		const search = new URLSearchParams(history.location.search);
		search.set('price_lte', e.target.value)
		history.push(`${history.location.pathname}?${search.toString()}`)
		setPriceTo(e.target.value)
	}
	const handleClick = () => {
		const search = new URLSearchParams(history.location.search);

		decodeURIComponent(search.toString())
		getRealty(search.toString())
	}
	return (
		<section className="filter__sec">
			<Container>
				<Grid container spacing={1} sx={{ boxShadow: 1, padding: '7px 15px 15px 7px', backgroundColor: '#fff' }}>
					<Grid item md={3}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-autowidth-label">Тип недвижимости</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={type}
								onChange={handleChangeType}
								autoWidth
								label="Тип недвижимости"
							>
								<MenuItem value="Квартира">Квартиру</MenuItem>
								<MenuItem value="Дом">Дом</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item md={3}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-autowidth-label2">К-во комнат</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label2"
								id="demo-simple-select-autowidth2"
								value={rooms}
								onChange={handleChangeRooms}
								autoWidth
								label="К-во комнат"
							>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
								<MenuItem value={5}>5</MenuItem>
								<MenuItem value={6}>6</MenuItem>
								<MenuItem value="Свободная планировка">Свободная планировка</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item md={2}>
						<TextField
							value={priceFrom}
							fullWidth={true}
							id="outlined-textarea"
							label="Цена от"
							placeholder="Цена от"
							onChange={handleChangePriceFrom}
						/>
					</Grid>
					<Grid item md={2}>
						<TextField
							value={priceTo}
							fullWidth={true}
							id="outlined-textarea2"
							label="Цена до"
							placeholder="Цена до"
							onChange={handleChangePriceTo}
						/>
					</Grid>
					<Grid item md={2}>
						<Link to={`/category?${new URLSearchParams(history.location.search).toString()}`} 	onClick={handleClick}>
							<Button
								variant="contained"
								fullWidth={true}
								sx={{
									height: '100%',
									color: '#fff'
								}}
								startIcon={<SearchIcon />}
							
							>
								Найти
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default FilterBlock;