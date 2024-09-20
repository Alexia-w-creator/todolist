import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyC0-z8LaCXdwkcEWxmykt_JcU4VDN9Qa-g',
  authDomain: 'todolist-vue-dd483.firebaseapp.com',
  projectId: 'todolist-vue-dd483',
  storageBucket: 'todolist-vue-dd483.appspot.com',
  messagingSenderId: '1005307402526',
  appId: '1:1005307402526:web:c01678bea17e96f68d110f'
};
//20.09.2024 Firebase is working just for 30 days

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}