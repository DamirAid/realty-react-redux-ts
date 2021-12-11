import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';

import firebase from 'firebase';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const Comments = ({ params }) => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)
	const [value, setValue] = useState('')


	const { addComment, getComments } = useActions()
	const { comments } = useTypedSelector(state => state.comments)
	useEffect(() => {
		getComments(params)
	}, [])
	const sendMessage = () => {
		const newComment = {
			productId: +params,
			uid: user.uid,
			displayName: user.displayName,
			photoURL: user.photoURL,
			text: value,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		}
		addComment(newComment)
		console.log(newComment)
		getComments(params)
		setValue('')
	}
	return (
		<Container>
			<Grid container style={{ height: window.innerHeight - 100, marginTop: 100 }} justifyContent={"center"}>
				<div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }}>
					{
						comments.map(comment => (
							<div>
								<Grid container>
									<Avatar src={comment.photoURL} />
									<div>{comment.displayName}</div>
								</Grid>
								<div>{comment.text}</div>
							</div>
						))
					}
				</div>

				{
					user ? (
						<Grid
							container
							direction={'column'}
							alignItems={"flex-end"}
							style={{ width: '80%' }}
						>

							<TextField variant={"outlined"} fullWidth rowMax={2} value={value} onChange={e => setValue(e.target.value)} />
							<Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
						</Grid>
					) : (
						<div>Зарегестрируйтесь</div>
					)
				}



			</Grid>
		</Container>
	);
};

export default Comments;