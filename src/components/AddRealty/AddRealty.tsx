import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import { useActions } from '../../hooks/useActions';
import { IDetails } from '../../types/realty';


const AddRealty = () => {
	const [type, setType] = useState<string | undefined>('')
	const [price, setPrice] = useState<number | undefined>(0)
	const [rooms, setRooms] = useState<number | string | undefined>(0)
	const [area, setArea] = useState<number | undefined>(0)
	const [image, setImage] = useState<string[]>([])
	const [images, setImages] = useState<any[]>([])

	const { addRealty } = useActions()

	const handleClick = () => {
		const newRealty: IDetails = {
			type,
			rooms,
			area,
			price,
			image
		}
		addRealty(newRealty)
		setType('')
		setPrice(0)
		setRooms(0)
		setArea(0)
	}
	const onAddBtnClick = (e: any) => {
		setImages(images.concat(<TextField
			fullWidth
			label="Outlined secondary"
			color="primary"
			onChange={(e) => setImage([...image, e.target.value])}
			
			key={images.length} />));
	};

	return (
		<div style={{ marginTop: '100px' }}>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Тип</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={type}
						label="Тип"
						onChange={(e) => setType(e.target.value)}
					>
						<MenuItem value={'Дом'}>Дом</MenuItem>
						<MenuItem value={'Квартира'}>Квартира</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">К-во комнат</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={rooms}
						label="К-во комнат"
						onChange={(e) => setRooms(e.target.value)}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value='Свободная планировка'>Свободная планировка</MenuItem>
					</Select>
				</FormControl>

				<TextField
					value={price}
					fullWidth
					label="Outlined secondary"
					color="primary"
					onChange={(e) => setPrice(+e.target.value)} />
				<TextField
					value={area}
					fullWidth
					label="Outlined secondary"
					color="primary"
					onChange={(e) => setArea(+e.target.value)} />
				<button onClick={onAddBtnClick}>Add input</button>
				{images}
			</Box>
			<Button
				variant='contained'
				onClick={handleClick}
			>Добавить недвижимость</Button>
		</div>
	);
};

export default AddRealty;