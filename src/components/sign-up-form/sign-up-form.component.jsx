import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../contexts/user.context";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";
const SignUpForm = () => {
  const defaultFromFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { setCurrentUser } = useContext(UserContext);
  const [inputFields, setInputFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = inputFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const resetFormFileds = () => {
    setInputFields(defaultFromFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (password.length <= 6) {
      alert("Password should be longer than 6 characters");

      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.displayName = displayName;
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log("user created successfuly ");
      console.log(userDocRef);
      await setCurrentUser(userDocRef);
      alert("Regestired successfuly");
      resetFormFileds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already registered");
      } else {
        alert("User creation encountered an error " + error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
        <InputField
          label="Display Name"
          type="text"
          name="displayName"
          onChange={onChangeHandler}
          value={displayName}
          required
        />
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
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={onChangeHandler}
          value={confirmPassword}
          required
        />

        <Button type="submit" value="Submit" children="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
