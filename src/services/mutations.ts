import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { addFavouriteImage, removeFavouriteImage, uploadCVImage } from "./api";
import { useAlert } from "@/app/providers/AlertProvider";
import { errorMessageGenerator } from "@/utils/utils";
import { AlertType } from "@/lib/types";

export function useCVUploadImage() {
  const router = useRouter();
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: (data: File) => uploadCVImage(data),
    onSuccess: (upload_id) => {
      router.push(`/computer-vision/photos?upload_id=${upload_id}`);
    },
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}

export function useAddFavouriteImage() {
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: addFavouriteImage,
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}

export function useRemoveFavouriteImage() {
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: removeFavouriteImage,
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}
