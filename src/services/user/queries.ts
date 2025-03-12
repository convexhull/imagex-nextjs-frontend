import { useQuery } from "@tanstack/react-query";
import { getOwnUserInfo } from "./api";
import { useAuth } from "@/context/AuthContext";

//TODO: AUTH CHECK THIS TOKEN WITH NEW AUTH V2
export function useGetOwnUserInfo() {
  const { session } = useAuth();

  return useQuery({
    queryKey: ["user", "me"],
    queryFn: getOwnUserInfo,
    enabled: !!session,
  });
}
