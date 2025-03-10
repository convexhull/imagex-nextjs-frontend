"use client";
// Libs
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import Input from "@/components/UI/FormElements/Input/Input";
import Button from "@/components/UI/Button/BlockButton/Button";
// Styles
import classes from "./SignupForm.module.css";
import { signupFormSchema } from "@/lib/schema";
// Types
import type { SignupFormData } from "@/lib/types";
// Services
import { useSignupUser } from "@/services/auth/mutations";

const SignupForm = () => {
  const signupUserMutation = useSignupUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
  });
  const submitHandler = (data: SignupFormData) => {
    signupUserMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={classes["name-container"]}>
        <div className={classes["name-container__first-name"]}>
          <Input
            {...register("firstName")}
            type="text"
            fieldLabel="First Name"
            fieldErrorMsg={errors.firstName?.message}
          />
        </div>
        <div className={classes["name-container__last-name"]}>
          <Input
            {...register("lastName")}
            type="text"
            fieldLabel="Last Name"
            fieldErrorMsg={errors.lastName?.message}
          />
        </div>
      </div>
      <div>
        <Input
          {...register("email")}
          type="email"
          fieldLabel="Email address"
          name="email"
          fieldErrorMsg={errors.email?.message}
        />
      </div>
      <div>
        <Input
          {...register("userName")}
          type="text"
          fieldLabel="Username (only letters and numbers)"
          name="userName"
          fieldErrorMsg={errors.userName?.message}
        />
      </div>
      <div>
        <Input
          {...register("password")}
          type="password"
          fieldLabel="Password (min. 8 char)"
          name="password"
          fieldErrorMsg={errors.password?.message}
        />
      </div>
      <div>
        <Button disabled={false} theme="imagex-default" type="submit">
          {false ? "..." : "Join"}{" "}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;

//TODO: Route guards using middleware?
