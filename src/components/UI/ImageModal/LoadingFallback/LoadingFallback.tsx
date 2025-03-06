// Components
import Modal from "@/components/UI/Modal/Modal";
import Spinner from "@/components/UI/Spinner/Spinner";
// Styles
import classes from "./LoadingFallback.module.css";

const LoadingFallback = () => {
  return (
    <Modal>
      <div className={classes.container}>
        <div className={classes["spinner"]}>
          <Spinner />
        </div>
      </div>
    </Modal>
  );
};

export default LoadingFallback;
