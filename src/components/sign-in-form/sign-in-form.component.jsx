import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
const SignInForm = () => {
  const logGoogleUser = async () => {
    try {
      const user = await signInWithGooglePopup();
      console.log("log in with google popup success", user);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultFromFields = {
    email: "",
    password: "",
  };
  const [inputFields, setInputFields] = useState(defaultFromFields);
  const { email, password } = inputFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const resetFormFileds = () => {
    setInputFields(defaultFromFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successfuly");
      resetFormFileds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect Password for the email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <SignInContainer>
      <h2>Have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <InputField
          label="Email"
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={email}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Log in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
