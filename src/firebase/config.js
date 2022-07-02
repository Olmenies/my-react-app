// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD1TLW5gJxfa8jrZBWfk6T__IFEThAtBo",
  authDomain: "coderhouseecommerce-e4b06.firebaseapp.com",
  projectId: "coderhouseecommerce-e4b06",
  storageBucket: "coderhouseecommerce-e4b06.appspot.com",
  messagingSenderId: "119587879634",
  appId: "1:119587879634:web:2aa959ceb666c3d9ca8b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//returne a instance of firebase
export const getFirestoreApp = () => {
  return app;
}
