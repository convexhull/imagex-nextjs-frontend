"use server";
// Library
import { redirect } from "next/navigation";
import { z } from "zod";
// Utils
import { loginFormSchema } from "./schema";
// Types
import { LoginFormState } from "./types";

export const loginUser = async (
  prevState: LoginFormState,
  formData: FormData
) => {
  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    await loginFormSchema.parseAsync(loginData);
    // await signIn("credentials", { ...loginData, redirect: false });
  } catch (e) {
    if (e instanceof z.ZodError) {
      const validationErrors = e.flatten().fieldErrors;
      return {
        ...prevState,
        validationErrors,
      };
    }
    return {
      ...prevState,
      validationErrors: {},
    };
  }
  redirect("/");
  // TODO: Toast/Notification for error/success etc.
};
