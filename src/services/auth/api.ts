import { SignupFormData } from "@/lib/types";
import { errorMessageGenerator } from "@/utils/utils";

export const logout = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/logout`,
    {
      cache: "no-store",
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return "Logout successfull";
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //TODO: JUST READ ABOUT CACHE HERE
      cache: "no-store",
      body: JSON.stringify({ email, password }),
      credentials: "include",
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const user = await response.json();
  return user;
};

export const refreshAccessToken = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/refresh`,
    {
      cache: "no-store",
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorMessageGenerator(errorData.message));
  } else {
    return (await response.json()).data;
  }
};

export const signup = async (data: SignupFormData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const { createdUser } = (await response.json()).data;
  return createdUser;
};
