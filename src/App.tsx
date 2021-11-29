import React from 'react';
import MainRoutes from './MainRoutes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
let theme = createTheme({
	typography: {
		"fontFamily": 'Futura',
	},
	palette: {
		primary: {
			main: '#00dd9f',
		},
		secondary: {
			main: '#000',
		},
	},
});
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<MainRoutes />
			</Provider>
		</ThemeProvider>

	);
};

export default App;