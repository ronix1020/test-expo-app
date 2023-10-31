import { initializeApp } from 'firebase/app';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optionally import the services that you want to use

// necesitamos utilizar initializeAuth para poder tener un mejor control 
// de la persistencia de la sesion de firebase, los metodos son iguales a los de 
// getAuth
import { initializeAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDKyclvkKA6TV9ZFeG4jXBavTGawmSk66Q",
    authDomain: "react-native-tests-82165.firebaseapp.com",
    projectId: "react-native-tests-82165",
    storageBucket: "react-native-tests-82165.appspot.com",
    messagingSenderId: "688570256298",
    appId: "1:688570256298:web:04888271ea7f85e53339d3",
    measurementId: "G-09MSTMJ9EE"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(app, {
    // damos persistencia de los datos de autenticacion en la app
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
