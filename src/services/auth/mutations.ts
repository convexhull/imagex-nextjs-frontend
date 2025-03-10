import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { login, logout, signup } from "./api";
import { useAlert } from "@/app/providers/AlertProvider";
import { AlertType } from "@/lib/types";

export function useLogin() {
  const router = useRouter();
  const setSession = useContext(AuthContext)?.setSession;

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (setSession) setSession(data);
      router.push("/");
      // ! Call router.refresh() after .push('/'). Makes sure to rerender '/' server component
      router.refresh();
    },
    onError: (e) => {
      console.log(e);
    },
  });
}

export function useSignupUser() {
  const router = useRouter();
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      router.push("/login");
      showMessage(
        "Account was created successfully. Please login to continue.",
        AlertType.SUCCESS
      );
    },
  });
}

export function useLogout() {
  const router = useRouter();
  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      router.refresh();
    },
  });
}
