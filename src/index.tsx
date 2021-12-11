import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/fonts.css'
import './index.css'
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
	apiKey: "AIzaSyAEqfv8tt7h713fQXxIQXRDGajWxY8iA6o",
	authDomain: "realty-9aae0.firebaseapp.com",
	projectId: "realty-9aae0",
	storageBucket: "realty-9aae0.appspot.com",
	messagingSenderId: "943325796342",
	appId: "1:943325796342:web:2ce68cc26177444a1919d7"
};
firebase.initializeApp(firebaseConfig);


export const Context  = createContext({})



const auth = firebase.auth()
const firestore = firebase.firestore()





ReactDOM.render(
	<Context.Provider value={{
		firebase,
		auth,
		firestore
	}}>
		<App />
	</Context.Provider>
	, document.getElementById('root'));