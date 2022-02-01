import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyAV76j06O46kjGzxxtuxtl9dcJjkSQe1MA",
  authDomain: "food-hub-cf2f8.firebaseapp.com",
  projectId: "food-hub-cf2f8",
  storageBucket: "food-hub-cf2f8.appspot.com",
  messagingSenderId: "470641717864",
  appId: "1:470641717864:web:3ed7fec5d904c4e81201dd",
  measurementId: "G-W9B2PDV5PF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();
// const user=firebase.user();

async function registerUser(fields, history) {
  const { password, ...rest } = fields;
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(fields.email, fields.password);
    db.collection("Users").doc(user.user.uid).set(rest);
    swal({
      title: "User Registered Successfully",
      icon: "success",
      button: "Ok",
    });
    history.push("/login");
  } catch (e) {
    swal({
      title: e.message,
      icon: "error",
      button: "Ok",
    });
  }
}

async function loginUser(fields, history) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(fields.email, fields.password);
    swal({
      title: "User LoggedIn Successfully",
      icon: "success",
      button: "Ok",
    });
    history.push("/");
  } catch (e) {
    swal({
      title: e.message,
      icon: "error",
      button: "Ok",
    });
  }
}

export { registerUser, loginUser };
