// Styles
import classes from "./EndOfResults.module.css";

const EndOfResults = () => {
  return (
    <div className={classes["EndOfResults"]}>
      <p className={classes["message"]}>
        That&lsquo;s all folks :) Try another search!
      </p>
      <div className={classes["image-container"]}>
        <img src="/cat.gif" />
      </div>
    </div>
  );
};

export default EndOfResults;
