// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3ajHxcJk8R7IQg9a6q-MQMUBQQIAaXuA",
    authDomain: "hadapster-59ad9.firebaseapp.com",
    projectId: "hadapster-59ad9",
    storageBucket: "hadapster-59ad9.appspot.com",
    messagingSenderId: "937933923048",
    appId: "1:937933923048:web:ac79fd8da263abbbed9f5d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;






// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB3ajHxcJk8R7IQg9a6q-MQMUBQQIAaXuA",
//   authDomain: "hadapster-59ad9.firebaseapp.com",
//   projectId: "hadapster-59ad9",
//   storageBucket: "hadapster-59ad9.appspot.com",
//   messagingSenderId: "937933923048",
//   appId: "1:937933923048:web:ac79fd8da263abbbed9f5d"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);