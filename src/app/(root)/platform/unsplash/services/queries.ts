import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages } from "./api";

export function useFetchImages(keyword: string) {
  return useInfiniteQuery({
    queryKey: ["images"],
    queryFn: ({ pageParam }) => getImages(pageParam, keyword),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.total_pages > lastPageParam) {
        return lastPageParam + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
}
