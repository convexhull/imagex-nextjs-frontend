import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProfilePicture } from "./api";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function useUploadProfilePicture() {
  // TODO: Better place for token, or just remove bearer token from backend as well?
  const token = useContext(AuthContext)?.accessToken;
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: File) => uploadProfilePicture(data, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    },
  });
}
