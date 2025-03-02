import {
  pixabayImagesResponseSchema,
  unsplashImagesResponseSchema,
  unsplashImageSchema,
  pixabayImageSchema,
} from "@/lib/schema";
import {
  transformPixabayImageData,
  transformUnsplashImageData,
} from "@/utils/utils";

export const getUnsplashImages = async (pageParam = 1, keyword: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/unsplash/searchPhotos?keywords=${keyword}&page=${pageParam}`,
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
      hits: parsedData.data.results.map(transformUnsplashImageData),
      moreResults: parsedData.data.total_pages > pageParam,
    };
  }
};

export const getPixabayImages = async (pageParam = 1, keyword: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pixabay/searchPhotos?keywords=${keyword}&page=${pageParam}`
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
      hits: parsedData.data.hits.map(transformPixabayImageData),
      moreResults: parsedData.data.moreResults,
    };
  }
};

//TODO: Can combine unsplash and pixabay

export const getUnsplashImage = async (imageId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/unsplash/photo?id=${imageId}`
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  } else {
    const data = (await response.json()).data;
    const parsedData = unsplashImageSchema.safeParse(data);
    if (parsedData.error) {
      console.log(parsedData.error.message);
      throw new Error(parsedData.error.message);
    }
    return transformUnsplashImageData(parsedData.data);
  }
};

export const getPixabayImage = async (imageId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pixabay/photo?id=${imageId}`
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  } else {
    const data = (await response.json()).data;
    const parsedData = pixabayImageSchema.safeParse(data);
    if (parsedData.error) {
      console.log(parsedData.error.message);
      throw new Error(parsedData.error.message);
    }
    return transformPixabayImageData(parsedData.data);
  }
};
