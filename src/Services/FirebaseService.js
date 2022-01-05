import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyComKOOB47LBjCUW_FPYuV_3Tyxhs_DDUE",
  authDomain: "test-89456.firebaseapp.com",
  databaseURL: "https://test-89456.firebaseio.com",
  projectId: "test-89456",
  storageBucket: "test-89456.appspot.com",
  messagingSenderId: "10373598806",
  appId: "1:10373598806:web:827ee5770f780260e475f7"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

