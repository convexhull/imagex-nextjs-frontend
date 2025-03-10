"use client";
import { AlertType } from "@/lib/types";
import { createContext, useContext, useState } from "react";

type AlertProviderProps = {
  children: Readonly<React.ReactNode>;
};

type AlertContext = {
  message: string;
  type: AlertType;
  showMessage: (message: string, type: AlertType) => void;
  hideMessage: () => void;
};

export const AlertContext = createContext<AlertContext>({
  message: "",
  type: AlertType.SUCCESS,
  showMessage: () => {},
  hideMessage: () => {},
});

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<AlertType>(AlertType.SUCCESS);

  const showMessage = (message: string, type: AlertType) => {
    setMessage(message);
    setType(type);

    setTimeout(() => {
      hideMessage();
    }, 3000);
  };

  const hideMessage = () => {
    setMessage("");
    setType(AlertType.SUCCESS);
  };

  return (
    <AlertContext.Provider value={{ message, type, showMessage, hideMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

export function useAlert() {
  const context = useContext(AlertContext);
  return context;
}

export default AlertProvider;
