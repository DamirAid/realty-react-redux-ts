import { Container, Grid } from '@mui/material';
import React from 'react';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import CardList from '../CardList/CardList';
import SortBlock from '../SortBlock/SortBlock';
import PaginationList from '../PaginationList/PaginationList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const FilterList: React.FC = () => {
	const realty = useTypedSelector(state => state.realty.realty)
	return (
		<section className="filter__list-sec" style={{ paddingTop: '140px' }}>
			<Container>
				<Grid container spacing={2}>
					<Grid item md={3}>
						<SidebarFilter />
					</Grid>
					<Grid item md={9}>
						<SortBlock />
						<CardList housesList={realty} />
						<PaginationList />
					</Grid>


				</Grid>
			</Container>
		</section>
	);
};

export default FilterList;