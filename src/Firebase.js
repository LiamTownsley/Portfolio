import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Card from './Components/Card';
import ReactDOM from 'react-dom';

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAUJ0pMHjk9sf7jRmoYJuGFgJcIlEVMrgw",
        authDomain: "portfolio-eb1e4.firebaseapp.com",
        projectId: "portfolio-eb1e4",
        storageBucket: "portfolio-eb1e4.appspot.com",
        messagingSenderId: "400331934991",
        appId: "1:400331934991:web:daee24326bb83d06e7027a",
        measurementId: "G-K1872J54KT"
    });
  } else {
    firebase.app();
  }

document.addEventListener('DOMContentLoaded', event => {
    const db = firebase.firestore();
    const posts = db.collection('work').orderBy("createdAt");
    posts.get().then(portfolio => {
        portfolio.forEach(preparsed => {
            const data = preparsed.data();
            ReactDOM.render(<Card name={data.name} shorttext={data["short-text"]} url={data.url} />, document.getElementById('work-content'));
        })
    })
});

