"use client";
// Styles
import { ChangeEvent, useRef } from "react";
import classes from "./ProfileImage.module.css";
import { useGetOwnUserInfo } from "@/services/user/queries";
import { useUploadProfilePicture } from "@/services/user/mutations";
import { UserProfileInfo } from "@/lib/user/types";

type ProfileImageProps = {
  userInfo: UserProfileInfo;
};

const ProfileImage = ({ userInfo }: ProfileImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadMutation = useUploadProfilePicture();
  const userInfoQuery = useGetOwnUserInfo();

  const { data } = userInfoQuery;
  let profilePicUrl = userInfo.profilePicUrl;

  if (data) {
    profilePicUrl = data.profilePicUrl;
  }

  const { isPending } = uploadMutation;

  //TODO: Replace by clsx/classnames lib everywhere in the codebase
  let profilePicUploadBtnClasses = `${classes["upload-btn"]}`;
  if (isPending) {
    profilePicUploadBtnClasses += ` ${classes["upload-btn--uploading"]}`;
  }

  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let file = null;
    if (event.target.files) {
      file = event.target.files[0];
    }
    if (!file) return;
    if (file.size > 5000000) {
      alert(
        "Your file exceeds the maximum supported size limit of 5MB. Please upload a smaller file."
      );
    } else {
      uploadMutation.mutate(file);
    }
  };

  const imageSelectHandler = () => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <div className={classes["profile-pic"]}>
      <div className={classes["profile-image-container"]}>
        <img
          src={
            profilePicUrl ||
            "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
          }
          alt="user's dp"
        />
      </div>
      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        onChange={imageUploadHandler}
        accept="image/*"
      />
      <button
        className={profilePicUploadBtnClasses}
        type="button"
        onClick={imageSelectHandler}
        disabled={isPending}
      >
        {isPending ? "Updating Picture..." : "Change profile picture"}
      </button>
    </div>
  );
};

export default ProfileImage;
