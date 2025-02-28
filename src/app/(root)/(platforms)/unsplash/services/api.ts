import { GetImagesApiResponse } from "../types";

export const getImages = async (pageParam = 1, keyword: string) => {
  const response = await fetch(
    `http://localhost:4000/unsplash/searchPhotos?keywords=${keyword}&page=${pageParam}`,
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  } else {
    const data: GetImagesApiResponse = (await response.json()).data;
    return data;
  }
};
