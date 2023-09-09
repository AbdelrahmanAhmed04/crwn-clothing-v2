import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const SignInForm = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      alert("Login successfuly");
      // resetFormFileds();
    } catch (error) {
      alert("User creation encountered an error " + error);
    }
  };
  return (
    <div className="sign-up-container">
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

        <Button type="submit" children="Sign In" />
      </form>
      <Button
        onClick={logGoogleUser}
        buttonType="google"
        children="Sign in with Google Popup"
      />
    </div>
  );
};

export default SignInForm;
