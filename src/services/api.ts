import {
  pixabayImagesResponseSchema,
  unsplashImagesResponseSchema,
  unsplashImageSchema,
  pixabayImageSchema,
  computerVisionImagesResponseSchema,
} from "@/lib/schema";
import { FavouriteImage, Image } from "@/lib/types";
import {
  transformComputerVisionImageData,
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

export const getCVSimilarImages = async (pageParam = 1, upload_id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/computer-vision/getSimilarImages?upload_id=${upload_id}&page=${pageParam}`
  );
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("HTTP Error");
  } else {
    const data = (await response.json()).data;
    const parsedData = computerVisionImagesResponseSchema.safeParse(data);
    if (parsedData.error) {
      console.log(parsedData.error.message);
      throw new Error(parsedData.error.message);
    }
    return {
      hits: parsedData.data.data.map(transformComputerVisionImageData),
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

export const uploadCVImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/computer-vision/uploadImage`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error");
  } else {
    const { upload_id } = await response.json();
    return upload_id as string;
  }
};

export const addFavouriteImage = async (
  image: Image,
  token: string | undefined
) => {
  const favouriteImage: Partial<FavouriteImage> = {
    width: image.width,
    height: image.height,
    downloadUrl: image.links.download,
    imageId: image.id,
    largeImageUrl: image.urls.raw || image.urls.full || image.urls.regular,
    smallImageUrl: image.urls.regular || image.urls.small,
    mediumImageUrl: image.urls.full || image.urls.regular,
    platform: image.platform.name,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/image-list/saveImage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(favouriteImage),
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error!");
  }
  return await response.json();
};

export const removeFavouriteImage = async (
  id: string,
  token: string | undefined
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/removeFavouriteImage?imageId=${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("HTTP Error!");
  }
  return (await response.json()).data;
};
