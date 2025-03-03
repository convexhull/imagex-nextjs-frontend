import { ComputerVisionImage, PixabayImage, UnsplashImage } from "@/lib/types";

export const capitalize: (str: string) => string = (str) => {
  return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
};

export const imageOrientationByAspect = (aspectRatio: number) => {
  let orientation = "square";
  if (aspectRatio >= 2.25) {
    orientation = "landscape-3";
  } else if (aspectRatio >= 1.75) {
    orientation = "landscape-2";
  } else if (aspectRatio >= 1.2) {
    orientation = "landscape-1";
  } else if (aspectRatio >= 0.9) {
    orientation = "square";
  } else if (aspectRatio >= 0.75) {
    orientation = "portrait-1";
  } else if (aspectRatio >= 0.6) {
    orientation = "portrait-2";
  } else {
    orientation = "portrait-3";
  }
  return orientation;
};

export const imageOrientationByDimensions = (width: number, height: number) => {
  let orientation = "square";

  const aspectRatio = width / height;
  if (aspectRatio >= 2.25) {
    orientation = "landscape-3";
  } else if (aspectRatio >= 1.75) {
    orientation = "landscape-2";
  } else if (aspectRatio >= 1.2) {
    orientation = "landscape-1";
  } else if (aspectRatio >= 0.9) {
    orientation = "square";
  } else if (aspectRatio >= 0.75) {
    orientation = "portrait-1";
  } else if (aspectRatio >= 0.6) {
    orientation = "portrait-2";
  } else {
    orientation = "portrait-3";
  }
  return orientation;
};

export const transformPixabayImageData = (image: PixabayImage) => {
  return {
    id: image.id,
    width: image.imageWidth,
    height: image.imageHeight,
    description: image.description || image.alt_description || image.tags || "",
    alt_description:
      image.alt_description || image.description || image.tags || "",
    urls: {
      raw: image.largeImageURL,
      full: image.largeImageURL,
      regular: image.largeImageURL,
      small: image.largeImageURL,
    },
    links: {
      download: image.largeImageURL,
    },
    user: {
      username: image.user,
      name: image.user,
      profile_image: image.userImageURL,
    },
  };
};

export const transformUnsplashImageData = (image: UnsplashImage) => {
  return {
    id: image.id,
    width: image.width,
    height: image.height,
    description: image.description || "",
    alt_description: image.alt_description || "",
    urls: {
      raw: image.urls.raw,
      full: image.urls.full,
      regular: image.urls.regular,
      small: image.urls.small,
    },
    links: {
      download: image.links.download,
    },
    user: {
      username: image.user.username,
      name: image.user.name,
      profile_image: image.user.profile_image.large,
    },
  };
};

export const transformComputerVisionImageData = (
  image: ComputerVisionImage
) => {
  return {
    id: image.id,
    width: image.assets.preview.width,
    height: image.assets.preview.height,
    description: image.description,
    urls: {
      regular: image.assets.preview.url,
      small: image.assets.preview.url,
    },
    links: {
      download: image.assets.preview.url,
    },
    user: {
      username: "",
      name: "",
      profile_image: "",
    },
  };
};
