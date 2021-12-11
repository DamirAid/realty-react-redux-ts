import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './HeaderSearchBlock.css'


import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink } from 'react-router-dom';
import history from '../../helpers/history';
const HeaderSearchBlock: React.FC = () => {
	const searchRealty = useTypedSelector(state => state.realty.searchRealty)
	return (
		<div className="search__list">
			{
				searchRealty.map(item => (
					<ListItem component="div" disablePadding>

						<ListItemButton>

							<NavLink  to={`/details/${item.id}`} style={{ width: '100%', color: 'inherit' }} >
								<ListItemText primary={`${item.rooms}-комн. ${item.type}, ${item.price}$`} />
							</NavLink>

						</ListItemButton>

					</ListItem>
				))
			}
		</div>
	);
};

export default HeaderSearchBlock;