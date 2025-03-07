import { userProfileInfoSchema } from "@/lib/user/schema";
import { UserProfileUpdateInfo } from "@/lib/user/types";

export const getOwnUserInfo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/me`,
    {
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  }
  const data = (await response.json()).data;
  const parsedData = userProfileInfoSchema.safeParse(data);
  if (parsedData.error) {
    throw new Error(parsedData.error.message);
  }
  const { data: userInfo } = parsedData;
  return userInfo;
};

export const uploadProfilePicture = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/updateProfilePic`,
    {
      method: "POST",
      body: formData,
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error!");
  }
  return await response.json();
};

export const updateProfileInfo = async (data: UserProfileUpdateInfo) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/update`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error!");
  }
  return await response.json();
};
