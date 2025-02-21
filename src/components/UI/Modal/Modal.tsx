// Components
import Backdrop from "../Backdrop/Backdrop";
// Styles
import classes from "./Modal.module.css";

type ModalProps = {
  hideModal: () => void;
  children: React.ReactNode;
};

const Modal = ({ hideModal, children }: ModalProps) => {
  return (
    <>
      <Backdrop opacity="translucent" hideBackdrop={hideModal} />
      <div className={classes.Modal}>{children}</div>
    </>
  );
};

export default Modal;
