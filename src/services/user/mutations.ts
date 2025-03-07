import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileInfo, uploadProfilePicture } from "./api";

export function useUploadProfilePicture() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadProfilePicture,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    },
  });
}

export function useUpdateProfileInfo() {
  return useMutation({
    mutationFn: updateProfileInfo,
  });
}
