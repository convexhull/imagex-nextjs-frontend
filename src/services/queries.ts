import { useInfiniteQuery } from "@tanstack/react-query";
import { getPixabayImages, getUnsplashImages } from "./api";
import { Platform } from "@/lib/types";

export function useFetchImages(platform: Platform, keyword: string) {
  return useInfiniteQuery({
    queryKey: ["images", platform, keyword],
    queryFn: ({ pageParam }) =>
      platform === Platform.UNSPLASH
        ? getUnsplashImages(pageParam, keyword)
        : getPixabayImages(pageParam, keyword),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      debugger;
      if (lastPage.moreResults) {
        return lastPageParam + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
}
