import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_N8kqa-E2TFqnkrAdTFnB7OzYtRxG4kc",
  authDomain: "marketplaceapicertification.firebaseapp.com",
  databaseURL: "https://marketplaceapicertification.firebaseio.com",
  projectId: "marketplaceapicertification",
  storageBucket: "marketplaceapicertification.appspot.com",
  messagingSenderId: "723560707286",
  appId: "1:723560707286:web:3b23e1fc9f28e2af248577",
  measurementId: "G-4KCCPZNGDQ"
});
export default app;
