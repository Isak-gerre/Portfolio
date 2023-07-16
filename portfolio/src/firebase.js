// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDcFDFgv4wRm-AAOYp5yMwZvMsOR-H2z6g',
	authDomain: 'portfolio-397ea.firebaseapp.com',
	projectId: 'portfolio-397ea',
	storageBucket: 'portfolio-397ea.appspot.com',
	messagingSenderId: '380546582194',
	appId: '1:380546582194:web:25f38614a8d6ab04422bab',
	measurementId: 'G-HP3VREZRGV'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
