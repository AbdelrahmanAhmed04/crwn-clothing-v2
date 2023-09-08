import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDakzDdKvlAcVXgFaoFwljX_qJLnJnBnBo",
  authDomain: "crwn-clothing-db-68e03.firebaseapp.com",
  projectId: "crwn-clothing-db-68e03",
  storageBucket: "crwn-clothing-db-68e03.appspot.com",
  messagingSenderId: "359516030780",
  appId: "1:359516030780:web:8b26e4b9a157353c740039",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
