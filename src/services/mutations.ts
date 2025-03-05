import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { addFavouriteImage, uploadCVImage } from "./api";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Image } from "@/lib/types";

export function useCVUploadImage() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: File) => uploadCVImage(data),
    onSuccess: (upload_id) => {
      router.push(`/computer-vision/photos?upload_id=${upload_id}`);
    },
  });
}

export function useAddFavouriteImage() {
  const token = useContext(AuthContext)?.accessToken;
  return useMutation({
    mutationFn: (image: Image) => addFavouriteImage(image, token),
  });
}
