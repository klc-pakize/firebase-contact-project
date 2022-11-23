// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AddUser = (form) => {
  const db = getDatabase(app);
  const userRef = ref(db, "user/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: form.username,
    phoneNumber: form.phoneNumber,
    gender: form.gender,
  });
  console.log("verileri yazdırdım");
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "user/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(app);
  // const userRef=ref(db,"user/")
  remove(ref(db, "user/" + id));
};

export const EditUser = (form) => {
  const db = getDatabase(app);
  const userRef = ref(db, "user/");

  const updates = {};

  updates["user/" + form.id] = form;

  return update(ref(db), updates);
};
