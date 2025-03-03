import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { uploadCVImage } from "./api";

export function useCVUploadImage() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: File) => uploadCVImage(data),
    onSuccess: (upload_id) => {
      router.push(`/computer-vision/photos?upload_id=${upload_id}`);
    },
  });
}
