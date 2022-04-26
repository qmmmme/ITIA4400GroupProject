// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
// import {getAuth} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
// import {getFirestore, collection} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDrorYAMNWPUYwLni9GcwbFFlPqCElWRCE",
    authDomain: "go-go-31591.firebaseapp.com",
    projectId: "go-go-31591",
    storageBucket: "go-go-31591.appspot.com",
    messagingSenderId: "470863027693",
    appId: "1:470863027693:web:5ec21c4427b5b9d42a9be4",
    measurementId: "G-SH5H2TEHX7"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

const txtEmail = document.querySelector('#txtEmail')
const txtPassword = document.querySelector('#txtPassword')
const btnLogin = document.querySelector('#btnLogin')
const btnSignup = document.querySelector('#btnSignup')
const btnLogout = document.querySelector('#btnLogout')
//set up register function
function register() {
    auth.createUserWithEmailAndPassword(txtEmail, txtPassword)
    .then(function() {
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            email: txtEmail,
            last_login : Date.now()
        }
        database_ref.child("users/" + user.uid).set(user_data)
    })
    .catch(function (error) {
        var error_code = error.error_code
        var error_message = error.message
        alert(errror)
    })
}