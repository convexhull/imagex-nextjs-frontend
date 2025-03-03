import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getCVSimilarImages,
  getPixabayImage,
  getPixabayImages,
  getUnsplashImage,
  getUnsplashImages,
} from "./api";
import { Platform } from "@/lib/types";

//TODO: keyword deservers a better name as even computer vison uses it for uplaod_id
export function useFetchImages(platform: Platform, keyword: string) {
  return useInfiniteQuery({
    queryKey: ["images", platform, keyword],
    queryFn: ({ pageParam }) => {
      switch (platform) {
        case Platform.UNSPLASH:
          return getUnsplashImages(pageParam, keyword);
        case Platform.PIXABAY:
          return getPixabayImages(pageParam, keyword);
        case Platform.COMPUTER_VISION:
          return getCVSimilarImages(pageParam, keyword);
      }
    },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.moreResults) {
        return lastPageParam + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
}

//TODO: Unused
export function useFetchImageById(platform: Platform, id: string) {
  return useQuery({
    queryKey: ["image", platform, id],
    queryFn:
      platform === Platform.UNSPLASH
        ? () => getUnsplashImage(id)
        : () => getPixabayImage(id),
  });
}
