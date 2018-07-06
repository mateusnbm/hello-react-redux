//
// firebase.js
//


import * as firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCd4BEhVQP7FFN_GV4nXECq9g5sDCe8n6k",
    authDomain: "go-coach-93efe.firebaseapp.com",
    databaseURL: "https://go-coach-93efe.firebaseio.com",
    projectId: "go-coach-93efe",
    storageBucket: "",
    messagingSenderId: "905739915023"
}

export const firebase_app = firebase.initializeApp(config)
export const firebase_db_goals = firebase.database().ref('goals')
export const firebase_db_completed = firebase.database().ref('completed')
