import { useEffect, userEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //     console.log("sign in success", response);
  //   }
  // }, []);
  //  ASYNC AWAIT FUNCTION
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log("sign in success", user);
    } catch (error) {
      console.log(error);
    }
  };

  // const logGoogleUser = () => {
  //   signInWithGooglePopup()
  //     .then(({ user }) => {
  //       return createUserDocumentFromAuth(user);
  //     })
  //     .then((userDocRef) => {
  //        console.log("sign in success", user);
  //       })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div>
      <h2>I'm Sign In</h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
