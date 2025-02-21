// Styles
import classes from "./Backdrop.module.css";

type BackdropProps = {
  opacity: "translucent" | "transparent";
  hideBackdrop: () => void;
};

const Backdrop = ({ opacity, hideBackdrop }: BackdropProps) => {
  const backdropClasses = [classes["Backdrop"]];
  if (opacity === "translucent") {
    backdropClasses.push(classes["backdrop--translucent"]);
  }
  if (opacity === "transparent") {
    backdropClasses.push(classes["backdrop--transparent"]);
  }
  return (
    <div className={backdropClasses.join(" ")} onClick={hideBackdrop}></div>
  );
};

export default Backdrop;
