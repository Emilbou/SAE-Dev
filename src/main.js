import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzD4p1felAUd7TNdUVqrmqRwxSGN1wHaw",
    authDomain: "sae-dev-7195d.firebaseapp.com",
    projectId: "sae-dev-7195d",
    storageBucket: "sae-dev-7195d.appspot.com",
    messagingSenderId: "922037219541",
    appId: "1:922037219541:web:640317aa4879b46837325c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')
