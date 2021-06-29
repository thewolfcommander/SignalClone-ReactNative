import * as firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQlfeDbtVPEvbMoGE6Kf2evUCpwy87K4g",
  authDomain: "signalclone-5b3ac.firebaseapp.com",
  projectId: "signalclone-5b3ac",
  storageBucket: "signalclone-5b3ac.appspot.com",
  messagingSenderId: "742631831387",
  appId: "1:742631831387:web:a38c06e2eaf2d05b7a4c7e",
};

let app;

if (firebase.default.apps.length == 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.default.auth();

export { db, auth };
