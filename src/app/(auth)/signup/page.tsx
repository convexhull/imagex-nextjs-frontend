"use client";
// Libs
import { useState } from "react";
// Components

// Styles
import Link from "next/link";

import classes from "./Signup.module.css";
import FormElement from "@/components/UI/FormElement/FormElement";
import Button from "@/components/UI/Button/BlockButton/Button";
// import Notification from "../../../components/UI/Notification/Notification";
// import ErrorMessageGenerator from "../../../utils/errorMessage";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
          <form onSubmit={() => setLoading(true)}>
            <div className={classes["name-container"]}>
              <div className={classes["name-container__first-name"]}>
                <FormElement
                  elementType="text"
                  label="First Name"
                  value={firstName}
                  name="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                  valid
                  errorMsg="*First Name is required"
                />
              </div>
              <div className={classes["name-container__last-name"]}>
                <FormElement
                  elementType="text"
                  label="Last Name"
                  value={lastName}
                  name="lastName"
                  onChange={(event) => setLastName(event.target.value)}
                  valid
                  errorMsg="*Last Name is required"
                />
              </div>
            </div>
            <div>
              <FormElement
                elementType="email"
                required
                label="Email address"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                valid
                errorMsg="Enter a valid email"
              />
            </div>
            <div>
              <FormElement
                elementType="text"
                label="Username (only letters and numbers)"
                value={userName}
                name="userName"
                onChange={(event) => setUserName(event.target.value)}
                valid
                errorMsg="Enter a valid Username"
              />
            </div>
            <div>
              <FormElement
                elementType="password"
                label="Password (min. 6 char)"
                value={password}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                valid
                errorMsg="Enter a valid password. Should have atleast 6 characters"
              />
            </div>
            <div>
              <Button disabled={loading} theme="imagex-default" type="submit">
                {loading ? "..." : "Join"}{" "}
              </Button>
            </div>
          </form>
          <p>
            <small>
              By joining, you agree to the Terms and Privacy Policy.
            </small>
          </p>
        </div>
      </div>
      {/* {this.props.error ? (
        <Notification
          theme="error"
          title={ErrorMessageGenerator(this.props.error)}
          clicked={this.props.onClearError}
        />
      ) : null} */}
    </div>
  );
};

export default Signup;
