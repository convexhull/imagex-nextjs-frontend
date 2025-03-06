"use client";
import { useRouter } from "next/navigation";
// Components
import Backdrop from "../Backdrop/Backdrop";
// Styles
import classes from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  return (
    <>
      <Backdrop opacity="translucent" hideBackdrop={() => router.back()} />
      <div className={classes.Modal}>{children}</div>
    </>
  );
};

export default Modal;
