// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLb5ujnf8qyUtrvJM_YocJGCHSxiEl0Fg",
  authDomain: "todo-wit-redux.firebaseapp.com",
  projectId: "todo-wit-redux",
  storageBucket: "todo-wit-redux.appspot.com",
  messagingSenderId: "357100294059",
  appId: "1:357100294059:web:83860614be392d13638cee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Export firestore database
// It will be imported into your react app whenever it is needed
export {db};