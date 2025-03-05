// Libs
import Link from "next/link";
//Components
import ImageGrid from "@/components/ImageGrid/ImageGrid";
// Services
import { getFavouriteImages, getOwnUserInfo } from "@/services/user/api.server";
// Styles
import classes from "./page.module.css";

const UserProfile = async () => {
  //TODO: Promise.all?
  const userInfo = await getOwnUserInfo();
  const favouriteImages = await getFavouriteImages();
  return (
    <>
      <div className={classes["profile-info"]}>
        <div className={classes["profile-info__profile-pic"]}>
          <img src={userInfo && userInfo.profilePicUrl} alt="user's dp" />
        </div>
        <div className={classes["profile-info__name-bio"]}>
          <h1 className={classes["profile-info__name"]}>
            {userInfo && userInfo.firstName + " " + userInfo.lastName}
          </h1>
          <h3 className={classes["profile-info__username"]}>
            @{userInfo && userInfo.userName}
          </h3>
          <h3 className={classes["profile-info__bio"]}>
            {userInfo && userInfo.bio}
          </h3>
        </div>
        <div className={classes["profile-info__edit-profile"]}>
          <Link href="/profile/settings">Edit Profile</Link>
        </div>
      </div>
      <div className={classes.favouriteImages}>
        <h1 className={classes.favouriteImages__title}>
          🖤&nbsp;&nbsp;My Favourites ({favouriteImages.length})
        </h1>
        <ImageGrid images={favouriteImages} />
      </div>
    </>
  );
};

export default UserProfile;

/**
 * 1. fetch user profile info
 * 2. route guarding
 * 3. fetch favourite images
 */
