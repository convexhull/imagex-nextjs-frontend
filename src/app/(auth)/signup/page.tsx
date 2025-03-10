// Libs
import Link from "next/link";
// Components
import SignupForm from "./SignupForm/SignupForm";
// Styles
import classes from "./page.module.css";

const Signup = () => {
  return (
    <div className={classes.Signup}>
      <div className={classes["image-container"]}>
        <img src="/signup.jpeg" alt="bridge over sea" />
      </div>
      <div className={classes["form-container"]}>
        <div className={classes["signup-info"]}>
          <h1>Join ImageX</h1>
          <h4 className={classes["signup-info__login-option"]}>
            Already have an account? <Link href="/login">Login</Link>
          </h4>
          <p>OR</p>
          <SignupForm />
          <p>
            <small>
              By joining, you agree to the Terms and Privacy Policy.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
