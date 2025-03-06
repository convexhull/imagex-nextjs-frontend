// Components
import Spinner from "@/components/UI/Spinner/Spinner";
import classes from "./page.module.css";

const Loading = () => {
  return (
    <div className={classes.favouriteImages}>
      <h2 className={classes.favouriteImages__title}>
        🖤&nbsp;&nbsp;My Favourites
      </h2>
      <Spinner />
    </div>
  );
};

export default Loading;
