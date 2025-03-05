import { useQuery } from "@tanstack/react-query";
import { getOwnUserInfo } from "./api";

export function useGetOwnUserInfo() {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: getOwnUserInfo,
  });
}
