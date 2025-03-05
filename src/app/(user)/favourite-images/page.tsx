//Components
import ImageGrid from "@/components/ImageGrid/ImageGrid";
// Services
import { getFavouriteImages } from "@/services/user/api.server";
// Styles
import classes from "./page.module.css";

const UserProfile = async () => {
  //TODO: Promise.all?
  const favouriteImages = await getFavouriteImages();
  return (
    <div className={classes.favouriteImages}>
      <h2 className={classes.favouriteImages__title}>
        🖤&nbsp;&nbsp;My Favourites ({favouriteImages.length})
      </h2>
      <ImageGrid images={favouriteImages} />
    </div>
  );
};

export default UserProfile;
