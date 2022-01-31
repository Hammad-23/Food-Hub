import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
    alert("User Registered Successfully");
    history.push("/login");
  } catch (e) {
    alert(e.message);
  }
}
var userId = "";
async function loginUser(fields, history) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(fields.email, fields.password);
    userId = firebase.auth().currentUser.uid;
    JSON.stringify(localStorage.setItem("UserID", userId));
    console.log("logged in user id --> ", userId);
    alert("User LoggedIn Successfully");
    history.push("/");
  } catch (e) {
    alert(e.message);
  }
}

async function getUser(id) {
  await db
    .collection("Users")
    .doc(id)
    .get()
    .then((snapshot) => {
      console.log("data from db--> ", snapshot.data());
      const userDetails = snapshot.data();
      localStorage.setItem("UserInfo", userDetails.firstName);
    })
    .catch((e) => {
      console.log("error on db get--> ", e.message);
    });
}

async function getAllproducts() {
  return await db
    .collection("Products")
    .get()
    .then((snapshot) => {
      const allProducts = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        allProducts.push(data);
      });
      console.log("products array--> ", allProducts);
    })
    .catch((e) => {
      console.log("products error--> ", e.message);
    });
}

export { registerUser, loginUser, getUser, getAllproducts };
