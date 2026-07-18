import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.login = async function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("Admin Login Successful!");

    window.location.href = "admin.html";

  } catch (error) {

    alert("Login Failed: " + error.message);

  }

};
window.googleLogin = async function () {

  const provider = new GoogleAuthProvider();

  try {

    await signInWithPopup(auth, provider);

    alert("Google Login Successful!");

    window.location.href = "admin.html";

  } catch(error) {

    alert("Google Login Failed: " + error.message);

  }

};
