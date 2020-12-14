import './App.css';

import NavBar from './NavBar';
/*
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionDate } from 'react-firebase-hooks/firestore';

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAALOxLXyi-vXcLC9YBWpyf0WprmOM-4Jc",
    authDomain: "blog-b04ce.firebaseapp.com",
    databaseURL: "https://blog-b04ce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-b04ce",
    storageBucket: "blog-b04ce.appspot.com",
    messagingSenderId: "584533134242",
    appId: "1:584533134242:web:1c2a8d7526ba8f673880fb",
    measurementId: "G-4B9X6SDN7J"
  });
} else {
  firebase.app();
}
*/
function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <h1 id="header">LIAM TOWNSLEY</h1>
      </main>
    </div>
  );
}

export default App;
