import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import history from '../../helpers/history';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const PaginationList: React.FC = () => {
	const realtyCount = useTypedSelector(state => state.realty.realtyCount)
	const realtyLimit = useTypedSelector(state => state.realty.realtyLimit)
	let realtyPage = useTypedSelector(state => state.realty.realtyPage)
	const { getRealty } = useActions()
	const [page, setPage] = useState<number>(getPagi())
	useEffect(() => {
		setPage(getPagi())
	}, [getPagi()])

	function getPagi(defaultPage = 1) {
		const search = new URLSearchParams(history.location.search)
		defaultPage = +search.get('_page')!
		return !defaultPage ? 1 : defaultPage
	}
	const handleChangePagi = (event: any, value: any) => {
		realtyPage = value
		const pagiSearch = new URLSearchParams(history.location.search);
		pagiSearch.set('_page', realtyPage.toString())
		history.push(`${history.location.pathname}?${pagiSearch.toString()}`);
		getRealty(pagiSearch.toString())
		setPage(value)
	}
	return (
		<>
			{
				realtyCount > realtyLimit ? (
					<Stack spacing={2} >
						<Pagination
							count={Math.ceil(realtyCount / realtyLimit)}
							defaultPage={realtyPage}
							sx={{ display: 'flex', justifyContent: 'center', pt: '30px' }}
							page={+page}
							color="primary"
							onChange={handleChangePagi} />
					</Stack>) : null
			}
		</>
	);
};

export default PaginationList;