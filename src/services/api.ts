import {
  pixabayImagesResponseSchema,
  unsplashImagesResponseSchema,
} from "@/lib/schema";
import {
  transformPixabayImageData,
  transformUnsplashImageData,
} from "@/utils/utils";

export const getUnsplashImages = async (pageParam = 1, keyword: string) => {
  const response = await fetch(
    `http://localhost:4000/unsplash/searchPhotos?keywords=${keyword}&page=${pageParam}`,
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  } else {
    const data = (await response.json()).data;
    const parsedData = unsplashImagesResponseSchema.safeParse(data);
    if (!parsedData.success) {
      console.log(parsedData.error.message);
      throw new Error(parsedData.error.message);
    }
    return {
      hits: transformUnsplashImageData(parsedData.data),
      moreResults: parsedData.data.total_pages > pageParam,
    };
  }
};

export const getPixabayImages = async (pageParam = 1, keyword: string) => {
  const response = await fetch(
    `http://localhost:4000/pixabay/searchPhotos?keywords=${keyword}&page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  } else {
    const data = (await response.json()).data;
    const parsedData = pixabayImagesResponseSchema.safeParse(data);
    if (!parsedData.success) {
      console.log(parsedData.error.message);
      throw new Error(parsedData.error.message);
    }
    return {
      hits: transformPixabayImageData(parsedData.data),
      moreResults: parsedData.data.moreResults,
    };
  }
};
