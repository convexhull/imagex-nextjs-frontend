import { SignupFormData } from "@/lib/types";

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
