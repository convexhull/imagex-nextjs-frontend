"use client";
// Libs
import { useState, useContext } from "react";
// Components
import FormElement from "@/components/UI/FormElement/FormElement";
import Button from "@/components/UI/Button/BlockButton/Button";
// Styles
import classes from "./LoginForm.module.css";
import { AuthContext } from "@/context/AuthContext";

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const accessToken = auth?.accessToken;
  const login = auth?.login;
  const logout = auth?.logout;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (login) {
            login(email, password);
          }
        }}
        className={classes["login-form"]}
      >
        <div className={classes["login-form__input"]}>
          <FormElement
            elementType="text"
            label="Username"
            name="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            valid={true}
            errorMsg={""}
          />
        </div>
        <div className={classes["login-form__input"]}>
          <div className={classes["login-form__password"]}></div>
          <FormElement
            elementType="password"
            label="Password"
            name="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            valid={true}
            errorMsg={""}
          />
        </div>
        <div className={classes["container__loginbtn"]}>
          <Button type="submit" theme="imagex-default" disabled={false}>
            Login
          </Button>
          {accessToken && `Logged in: ${accessToken}`}
        </div>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LoginForm;
