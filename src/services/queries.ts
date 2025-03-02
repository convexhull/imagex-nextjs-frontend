import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getPixabayImage,
  getPixabayImages,
  getUnsplashImage,
  getUnsplashImages,
} from "./api";
import { Platform } from "@/lib/types";

export function useFetchImages(platform: Platform, keyword: string) {
  return useInfiniteQuery({
    queryKey: ["images", platform, keyword],
    queryFn: ({ pageParam }) =>
      platform === Platform.UNSPLASH
        ? getUnsplashImages(pageParam, keyword)
        : getPixabayImages(pageParam, keyword),
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
