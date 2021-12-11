import React from 'react';
import MainRoutes from './MainRoutes';
import Header from './components/Header/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
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
				<BrowserRouter>
					<Header />
					<MainRoutes />
				</BrowserRouter>
			</Provider>
		</ThemeProvider>

	);
};

export default App;