import {
  favouriteImageSchema,
  favouriteImagesResponseSchema,
} from "@/lib/schema";
import { userProfileInfoSchema } from "@/lib/user/schema";
import { transformFavouriteImageData } from "@/utils/utils";
import { cookies } from "next/headers";

export const getOwnUserInfo = async () => {
  const cookie = await cookies();
  const token = cookie.get("accessToken")?.value;
  const response = await fetch(`${process.env.BACKEND_API_URL}/users/me`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = (await response.json()).data;
  const parsedData = userProfileInfoSchema.safeParse(data);
  if (parsedData.error) {
    throw new Error(parsedData.error.message);
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
        Cookie: `accessToken=${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  const parsedData = favouriteImagesResponseSchema.safeParse(data);
  if (parsedData.error) {
    console.log(parsedData.error);
    throw new Error(parsedData.error.message);
  }
  return parsedData.data.data.map(transformFavouriteImageData);
};

export const getFavouriteImage = async (imageId: string) => {
  const cookie = await cookies();
  const token = cookie.get("accessToken")?.value;
  const response = await fetch(
    `${process.env.BACKEND_API_URL}/users/favourite-image?imageId=${imageId}`,
    {
      headers: {
        Cookie: `accessToken=${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = (await response.json()).data;
  const parsedData = favouriteImageSchema.safeParse(data);
  if (parsedData.error) {
    console.log(parsedData.error);
    throw new Error(parsedData.error.message);
  }
  return transformFavouriteImageData(parsedData.data);
};

//TODO: Backend, context api changes due to storing accessToken in cookies
