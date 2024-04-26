// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBO-Em4eVW-yrGrKuO5UhXE2eXx-U_X8I",
  authDomain: "assignment-10-ebc0a.firebaseapp.com",
  projectId: "assignment-10-ebc0a",
  storageBucket: "assignment-10-ebc0a.appspot.com",
  messagingSenderId: "174996659716",
  appId: "1:174996659716:web:b7793ed5e21c7c70ba1f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;