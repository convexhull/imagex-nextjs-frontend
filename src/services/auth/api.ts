import { SignupFormData } from "@/lib/types";

// todo: error handling
export const logout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/logout`,
    {
      cache: "no-store",
      method: "POST",
      credentials: "include",
    }
  );
  if (!res.ok) {
  } else {
  }
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
      body: JSON.stringify({ email, password }),
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const user = await response.json();
  return user;
};

export const refreshAccessToken = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/refresh`,
    {
      cache: "no-store",
      method: "POST",
      credentials: "include",
    }
  );
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  } else {
    return (await res.json()).data;
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
    throw new Error("HTTP Error!");
  }
  const { createdUser } = (await response.json()).data;
  return createdUser;
};
