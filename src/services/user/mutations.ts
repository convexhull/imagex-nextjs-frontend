import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileInfo, uploadProfilePicture } from "./api";
import { useAlert } from "@/app/providers/AlertProvider";
import { errorMessageGenerator } from "@/utils/utils";
import { AlertType } from "@/lib/types";

export function useUploadProfilePicture() {
  const queryClient = useQueryClient();
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: uploadProfilePicture,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    },
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}

export function useUpdateProfileInfo() {
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: updateProfileInfo,
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}
