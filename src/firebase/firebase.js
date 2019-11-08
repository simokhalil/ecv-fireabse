import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtjsTm1PRBTUPhVovV0T7ShfGtsN4hIZ4",
  authDomain: "ecv-firebase.firebaseapp.com",
  databaseURL: "https://ecv-firebase.firebaseio.com",
  projectId: "ecv-firebase",
  storageBucket: "ecv-firebase.appspot.com",
  messagingSenderId: "384299877281",
  appId: "1:384299877281:web:18fbd418084173dfac01e0"
};

// Initialize Firebase project with conf
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const db = firebase.firestore();

export {
  auth,
  db,
  firebase,
};
