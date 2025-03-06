"use client";
// Libs
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import Button from "@/components/UI/Button/BlockButton/Button";
import Input from "@/components/UI/FormElements/Input/Input";
// Styles
import classes from "./LoginForm.module.css";
import { AuthContext } from "@/context/AuthContext";
// Schemas
import { loginFormSchema } from "@/lib/schema";
// Types
import type { LoginFormData } from "@/lib/types";

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const login = auth?.login;
  const logout = auth?.logout;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const submitHandler = (data: LoginFormData) => {
    if (login) login(data.email, data.password);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={classes["login-form"]}
      >
        <div className={classes["login-form__input"]}>
          <Input
            {...register("email")}
            type="text"
            fieldErrorMsg={errors.email?.message}
            fieldLabel="Email"
          />
        </div>
        <div className={classes["login-form__input"]}>
          <div className={classes["login-form__password"]}></div>
          <Input
            {...register("password")}
            type="password"
            fieldLabel="Password"
            fieldErrorMsg={errors.password?.message}
          />
        </div>
        <div className={classes["container__loginbtn"]}>
          <Button type="submit" theme="imagex-default" disabled={false}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
