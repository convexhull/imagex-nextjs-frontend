import { userProfileInfoSchema } from "@/lib/user/schema";

export const getOwnUserInfo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/me`
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
