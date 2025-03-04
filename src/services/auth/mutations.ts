import { useMutation } from "@tanstack/react-query";
import { signup } from "./api";
import { useRouter } from "next/navigation";

export function useSignupUser() {
  const router = useRouter();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      router.push("/login");
    },
  });
}
