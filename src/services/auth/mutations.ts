import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { login, logout, signup } from "./api";
import { useAlert } from "@/app/providers/AlertProvider";
import { AlertType } from "@/lib/types";
import { errorMessageGenerator } from "@/utils/utils";

export function useLogin() {
  const router = useRouter();
  const { showMessage } = useAlert();
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
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
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
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const { showMessage } = useAlert();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
    onError: (e) => {
      console.log(e);
      showMessage(errorMessageGenerator(e.message), AlertType.ERROR);
    },
  });
}
