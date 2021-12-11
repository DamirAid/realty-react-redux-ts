import React, { useContext } from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import { Context } from '../../index';
import firebase from 'firebase';

const Login = () => {

	const { auth } = useContext(Context)
	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		const { user } = await auth.signInWithPopup(provider)
		console.log(user)
	}
	return (
		<Container>
			<Grid container style={{ height: window.innerHeight - 100 }} alignItems={"center"} justifyContent={"center"}>
				<Grid style={{ width: 400, background: 'lightgray' }}>
					<Box p={5}>
						<Button onClick={login} variant='outlined'>Войти с помощью Google</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;