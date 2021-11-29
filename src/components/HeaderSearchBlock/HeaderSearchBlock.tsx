import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './HeaderSearchBlock.css'
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
const HeaderSearchBlock: React.FC = () => {
	const searchRealty = useTypedSelector(state => state.realty.searchRealty)
	return (
		<div className="search__list">
			{
				searchRealty.map(item => (
					<ListItem component="div" disablePadding>

						<ListItemButton>

							<Link to={`/details/${item.id}`} style={{ width: '100%', color: 'inherit' }} >
								<ListItemText primary={`${item.rooms}-комн. ${item.type}, ${item.price}$`} />
							</Link>

						</ListItemButton>

					</ListItem>
				))
			}
		</div>
	);
};

export default HeaderSearchBlock;