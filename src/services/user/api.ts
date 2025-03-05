import { userProfileInfoSchema } from "@/lib/user/schema";

export const getOwnUserInfo = async (token: string | undefined) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  }
  const data = (await response.json()).data;
  const parsedData = userProfileInfoSchema.safeParse(data);
  if (parsedData.error) {
    throw new Error("Data format error");
  }
  const { data: userInfo } = parsedData;
  return userInfo;
};

export const uploadProfilePicture = async (
  file: File,
  token: string | undefined
) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/updateProfilePic`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error!");
  }
  const data = await response.json();
  console.log(data);
};
