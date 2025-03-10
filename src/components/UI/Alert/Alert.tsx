"use client";
// Components
import { XCircle } from "lucide-react";
// Providers
import { useAlert } from "@/app/providers/AlertProvider";
// Types
import { AlertType } from "@/lib/types";
// Styles
import classes from "./Alert.module.css";

const Alert = () => {
  const { message, type, hideMessage } = useAlert();

  const alertClasses = [classes["Alert"]];
  switch (type) {
    case AlertType.SUCCESS:
      alertClasses.push(classes["Alert--success"]);
      break;
    case AlertType.WARNING:
      alertClasses.push(classes["Alert--warning"]);
      break;
    case AlertType.ERROR:
      alertClasses.push(classes["Alert--error"]);
  }
  const closeBtnClasses = [classes["Alert__close-btn"]];

  if (!message) {
    return null;
  }

  return (
    <div className={alertClasses.join(" ")}>
      <p className={classes["Alert__title"]}>{message}</p>
      <p className={closeBtnClasses.join(" ")} onClick={hideMessage}>
        <XCircle strokeWidth={2} />
      </p>
    </div>
  );
};

export default Alert;
