import { useQuery } from "@tanstack/react-query";
import { getOwnUserInfo } from "./api";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function useGetOwnUserInfo() {
  const token = useContext(AuthContext)?.accessToken;
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: () => getOwnUserInfo(token),
  });
}
