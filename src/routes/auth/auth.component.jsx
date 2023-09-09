import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Auth = () => {
  return (
    <div>
      <h2>Sign in</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
