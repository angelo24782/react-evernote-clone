import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyA5oRvH8mk-_3IXV2JXOVpPUzAG9ijaUgI",
  authDomain: "evernote-clone-41f32.firebaseapp.com",
  databaseURL: "https://evernote-clone-41f32.firebaseio.com",
  projectId: "evernote-clone-41f32",
  storageBucket: "evernote-clone-41f32.appspot.com",
  messagingSenderId: "302676449477",
  appId: "1:302676449477:web:bc0bca5a3097fbedfe78ac",
  measurementId: "G-PNMPZ241RX"
});
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
