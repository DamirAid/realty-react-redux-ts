import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Paper, FormGroup, Checkbox, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import history from '../../helpers/history';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useActions } from "../../hooks/useActions";


const SidebarFilter: React.FC = () => {

	const [type, setType] = useState<string | null>(getType())
	const [price, setPrice] = useState<any[] | number>(getPrice)
	const [rooms, setRooms] = useState<string | null>(getRooms())
	const [location, setLocation] = useState<string | null>(getLocation())
	const [installment, setInstallment] = useState<boolean>(Boolean(getInstallment()))
	const [exchange, setExchange] = useState<boolean>(Boolean(getExchange()))

	const { getRealty, getAllRealty } = useActions()
	useEffect(() => {
		getRealty(new URLSearchParams(history.location.search).toString())
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		getAllRealty(params.toString())
	}, [])
	function getType() {
		const search = new URLSearchParams(history.location.search);
		return search.get('type')
	}
	function getPrice() {
		const search = new URLSearchParams(history.location.search);
		return [+search.get('price_gte')!, +search.get('price_lte')!]
	}
	function getRooms() {
		const search = new URLSearchParams(history.location.search);
		return search.get('rooms')
	}
	function getLocation() {
		const search = new URLSearchParams(history.location.search);
		return search.get('location')
	}
	function getInstallment() {
		const search = new URLSearchParams(history.location.search);
		return search.get('installment')
	}
	function getExchange() {
		const search = new URLSearchParams(history.location.search);
		return search.get('exchange')
	}


	const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = new URLSearchParams(history.location.search);
		search.set('type', e.target.value)
		search.set('_page', '1')
		history.push(`category?${search.toString()}`);
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		decodeURIComponent(search.toString())
		getRealty(search.toString())
		getAllRealty(params.toString())
		setType(e.target.value)
	}
	const handleChangePrice = (e: any) => {
		const search = new URLSearchParams(history.location.search);
		search.set('price_gte', e.target.value[0])
		search.set('price_lte', e.target.value[1])
		search.set('_page', '1')
		history.push(`category?${search.toString()}`);
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		decodeURIComponent(search.toString())
		getRealty(search.toString())
		getAllRealty(params.toString())
		setPrice([+e.target.value[0], +e.target.value[1]]);
	}
	const handleChangeRooms = (e: any) => {

		const search = new URLSearchParams(history.location.search);
		search.set('rooms', e.target.value)
		search.set('_page', '1')
		history.push(`category?${search.toString()}`)
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		decodeURIComponent(search.toString())
		getRealty(search.toString())
		getAllRealty(params.toString())
		setRooms(e.target.value);
	}
	const handleChangeLocation = (e: any) => {
		const search = new URLSearchParams(history.location.search);
		search.set('location', e.target.value)
		search.set('_page', '1')
		history.push(`category?${search.toString()}`)
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		decodeURIComponent(search.toString())
		getRealty(search.toString())
		getAllRealty(params.toString())
		setLocation(e.target.value)
	}
	const handleChangeInstallment = (e: React.ChangeEvent<HTMLInputElement>) => {

		const search = new URLSearchParams(history.location.search)
		if (e.target.checked) {
			search.set('installment', e.target.checked.toString())
			search.set('_page', '1')
			history.push(`category?${search.toString()}`)
			const params = new URLSearchParams(history.location.search)
			params.delete('_page')
			getRealty(search.toString())
			getAllRealty(search.toString())
			setInstallment(e.target.checked)
		} else {
			search.delete('installment')
			search.set('_page', '1')
			history.push(`category?${search.toString()}`)
			const params = new URLSearchParams(history.location.search)
			params.delete('_page')
			getRealty(search.toString())
			getAllRealty(params.toString())
			setInstallment(e.target.checked)
		}
	}
	const handleChangeExchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = new URLSearchParams(history.location.search)
		if (e.target.checked) {
			search.set('exchange', e.target.checked.toString())
			search.set('_page', '1')
			history.push(`category?${search.toString()}`)
			const params = new URLSearchParams(history.location.search)
			params.delete('_page')
			getRealty(search.toString())
			getAllRealty(params.toString())
			setExchange(e.target.checked)
		} else {
			search.delete('exchange')
			search.set('_page', '1')
			history.push(`category?${search.toString()}`)
			const params = new URLSearchParams(history.location.search)
			params.delete('_page')
			getRealty(search.toString())
			getAllRealty(params.toString())
			setExchange(e.target.checked)
		}
	}

	const handleReset = () => {
		const search = new URLSearchParams(history.location.search)
		search.delete('type')
		search.delete('price_gte')
		search.delete('price_lte')
		search.delete('rooms')
		search.delete('location')
		search.delete('installment')
		search.delete('exchange')
		search.delete('_page')
		history.push(`category?${search.toString()}`)
		getRealty(search.toString())
		getAllRealty(search.toString())
		setType(getType())
		setPrice(getPrice())
		setRooms(getRooms())
		setLocation(getLocation())
		setInstallment(Boolean(getInstallment()))
		setExchange(Boolean(getExchange()))
	}
	const handleApply = () => {
		getRealty(new URLSearchParams(history.location.search).toString())
		getAllRealty(new URLSearchParams(history.location.search).toString())
	}
	// function valuetext(value: string) {
	// 	return `${value}`;
	// }
	return (
		<Paper sx={{ p: '20px' }}>
			<Box sx={{ mb: 2 }}>
				<FormLabel sx={{ mb: 1, display: 'block' }}>Тип недвижимости</FormLabel>
				<FormControl component="fieldset">
					<RadioGroup value={type} onChange={handleChangeType} aria-label="type" name="type">
						<FormControlLabel value="Дом" control={<Radio />} label="Дом" />
						<FormControlLabel value="Квартира" control={<Radio />} label="Квартира" />
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ mb: 2 }}>
				<FormLabel sx={{ mb: 1, display: 'block' }}>Price</FormLabel>
				<Slider
					getAriaLabel={() => 'Price range'}
					value={price}
					onChange={handleChangePrice}
					valueLabelDisplay="auto"
	
					min={150}
					max={500000}
				/>
			</Box>
			<Box sx={{ mb: 2 }}>
				<FormLabel sx={{ mb: 2, display: 'block' }}>К-во комнат</FormLabel>
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
			</Box>
			<Box sx={{ mb: 2 }}>
				<FormLabel sx={{ mb: 2, display: 'block' }}>Регион</FormLabel>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-autowidth-label3">Регион</InputLabel>
					<Select
						labelId="demo-simple-select-autowidth-label3"
						id="demo-simple-select-autowidth3"
						value={location}
						onChange={handleChangeLocation}
						autoWidth
						label="Регион"
					>
						<MenuItem value="Иссык-кульская область">Иссык-кульская область</MenuItem>
						<MenuItem value="Чуйская область">Чуйская область</MenuItem>
						<MenuItem value="Ошская область">Ошская область</MenuItem>
						<MenuItem value="Нарынская область">Нарынская область</MenuItem>
						<MenuItem value="Баткенская область">Баткенская область</MenuItem>
						<MenuItem value="Таласская область">Таласская область</MenuItem>
						<MenuItem value="Джалал-абадская область">Джалал-абадская область</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ mb: 2 }}>
				<FormGroup>
					<FormControlLabel control={<Checkbox
						checked={installment}
						onChange={handleChangeInstallment} />} label="Возможна рассрочка" />
					<FormControlLabel control={<Checkbox
						checked={exchange}
						onChange={handleChangeExchange} />} label="Возможен обмен" />
				</FormGroup>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleReset}
					size="large"
				>
					Сброс
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleApply}
					sx={{ color: "#fff" }}
					size="large"
				>
					Применить
				</Button>
			</Box>
		</Paper>
	);
};

export default SidebarFilter;