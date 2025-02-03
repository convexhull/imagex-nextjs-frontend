"use client";
// Libs
import Form from "next/form";
import { useState, useActionState } from "react";
// Components
import FormElement from "@/components/UI/FormElement/FormElement";
import Button from "@/components/UI/Button/BlockButton/Button";
// Actions
import { loginUser } from "@/lib/actions";
// Types
import { LoginFormState } from "@/lib/types";
// Styles
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initState: LoginFormState = {
    validationErrors: {},
  };
  const [state, formAction, loading] = useActionState(loginUser, initState);
  return (
    <Form action={formAction} className={classes["login-form"]}>
      <div className={classes["login-form__input"]}>
        <FormElement
          elementType="text"
          label="Username"
          name="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          valid={state.validationErrors.email === undefined}
          errorMsg={state.validationErrors.email?.join(", ")}
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
          valid={state.validationErrors.password === undefined}
          errorMsg={state.validationErrors.password?.join(", ")}
        />
      </div>

      <div className={classes["container__loginbtn"]}>
        <Button type="submit" theme="imagex-default" disabled={loading}>
          {loading ? "..." : "Login"}
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
