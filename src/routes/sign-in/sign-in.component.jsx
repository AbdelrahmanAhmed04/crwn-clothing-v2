import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
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
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
