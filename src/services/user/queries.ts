import { useQuery } from "@tanstack/react-query";
import { getOwnUserInfo } from "./api";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

//TODO: AUTH CHECK THIS TOKEN WITH NEW AUTH V2
export function useGetOwnUserInfo() {
  const session = useContext(AuthContext)?.session;
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: getOwnUserInfo,
    enabled: !!session,
  });
}
