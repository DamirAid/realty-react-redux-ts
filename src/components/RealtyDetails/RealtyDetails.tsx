import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ImageGallery from 'react-image-gallery';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import "react-image-gallery/styles/css/image-gallery.css";
import Alert from '@mui/material/Alert';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface RealtyDetailsProps {
	params: any
}
const RealtyDetails: React.FC<RealtyDetailsProps> = ({ params }) => {
	const { getDetails } = useActions()
	const details = useTypedSelector(state => state.realty.details)

	useEffect(() => {
		getDetails(params)
	}, [])

	const images: any[] = []
	if (details.image) {
		details.image.forEach(item => {
			const newImage = {
				original: item,
				thumbnail: item
			}
			images.push(newImage)
		})
	}

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Alert
						icon={<PhoneAndroidIcon fontSize="inherit" />} severity="success"
						variant="outlined"
						sx={{ fontWeight: 700, mt: '20px' }}>Телефон:  {details.phone}</Alert>
					<Alert
						icon={<LocationOnIcon fontSize="inherit" />} severity="success"
						variant="outlined"
						sx={{ fontWeight: 700, mt: '20px' }}>Регион:  {details.location}</Alert>
					<Alert
						icon={<AttachMoneyIcon fontSize="inherit" />} severity="success"
						variant="outlined"
						sx={{ fontWeight: 700, mt: '20px' }}>Цена:  {details.price} $</Alert>
				</Grid>
				<Grid item xs={6}>
					{details.image ? (
						<ImageGallery items={images} />
					) : (<CircularProgress />)
					}
				</Grid>
				<Grid item xs={6}>
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableBody>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Тип</TableCell>
									<TableCell align="left">{details.type}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">К-во комнат</TableCell>
									<TableCell align="left">{details.rooms}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Площадь</TableCell>
									<TableCell align="left">{details.area}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Площадь участка</TableCell>
									<TableCell align="left">{details.landArea}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Состояние</TableCell>
									<TableCell align="left">{details.condition}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Канализация</TableCell>
									<TableCell align="left">{details.severage}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Электричество</TableCell>
									<TableCell align="left">{details.severage}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Высота потолока</TableCell>
									<TableCell align="left">{details.ceilHeight}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Возможность рассрочки</TableCell>
									<TableCell align="left">{details.installment ? 'Есть' : 'Нет'}</TableCell>
								</TableRow>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="left">Возможность обмен</TableCell>
									<TableCell align="left">{details.exchange ? 'Есть' : 'Нет'}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Container>

	);
};

export default RealtyDetails;