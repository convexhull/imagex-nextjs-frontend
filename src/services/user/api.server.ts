import { favouriteImagesResponseSchema } from "@/lib/schema";
import { userProfileInfoSchema } from "@/lib/user/schema";
import { transformFavouriteImageData } from "@/utils/utils";
import { cookies } from "next/headers";

export const getOwnUserInfo = async () => {
  const cookie = await cookies();
  const token = cookie.get("accessToken")?.value;
  const response = await fetch(`${process.env.BACKEND_API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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

export const getFavouriteImages = async () => {
  const cookie = await cookies();
  const token = cookie.get("accessToken")?.value;
  const response = await fetch(
    `${process.env.BACKEND_API_URL}/users/favourite-images`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  }
  const data = await response.json();
  const parsedData = favouriteImagesResponseSchema.safeParse(data);
  if (parsedData.error) {
    throw new Error("Data format error");
  }
  return parsedData.data.data.map(transformFavouriteImageData);
};

//TODO: Backend, context api changes due to storing accessToken in cookies
