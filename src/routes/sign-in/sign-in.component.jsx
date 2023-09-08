import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = () => {
    signInWithGooglePopup()
      .then((response) => {
        console.log("sign in success", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>I'm Sign In</h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
