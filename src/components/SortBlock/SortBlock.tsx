import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import history from '../../helpers/history';
import { useActions } from '../../hooks/useActions';
import './SortBlock.css'
const SortBlock: React.FC = () => {
	const [price, setPrice] = useState<string | null>(getPrice())
	const [search, setSearch] = useState<string | null>(getSearch())
	const { getRealty, getAllRealty } = useActions()
	useEffect(() => {
		getRealty(new URLSearchParams(history.location.search).toString())
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		getAllRealty(params.toString())
	}, [])
	function getPrice() {
		const search = new URLSearchParams(history.location.search);
		return search.get('_order')
	}
	function getSearch() {
		const search = new URLSearchParams(history.location.search);
		return search.get('q')
	}
	const handleChangeSort = (e: any) => {
		const search = new URLSearchParams(history.location.search)
		search.set('_sort', e.target.name)
		search.set('_order', e.target.value)
		history.push(`category?${search.toString()}`)
		getRealty(search.toString())
		setPrice(e.target.value)
	}
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const search = new URLSearchParams(history.location.search)
		search.set('q', e.target.value)
		search.set('_page', '1')
		history.push(`category?${search.toString()}`)
		const params = new URLSearchParams(history.location.search)
		params.delete('_page')
		getRealty(search.toString())
		getAllRealty(params.toString())
		setSearch(e.target.value)
	}
	return (
		<div className="sort__block">
			<Grid container spacing={2}>
				<Grid item md={3}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-autowidth-label">Сортировать по цене</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={price}
							name="price"
							onChange={handleChangeSort}
							autoWidth
							label="Сортировать по цене"
						>
							<MenuItem value="asc">Сначала дорогие</MenuItem>
							<MenuItem value="desc">Сначала дешевые</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={9}>
					<TextField
						onChange={handleSearch}
						fullWidth
						value={search}
						id="demo-helper-text-aligned-no-helper"
						label="Search..."
					/>
				</Grid>
			</Grid>

		</div>
	);
};

export default SortBlock;