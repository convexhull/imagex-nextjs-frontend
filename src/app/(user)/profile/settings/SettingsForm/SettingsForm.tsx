"use client";
import classes from "./SettingsForm.module.css";
import Input from "@/components/UI/FormElements/Input/Input";
// import Button from "../../components/UI/Buttons/BlockButton/Button";
// import * as actions from "../../store/actions/index";
// import Notification from "../../components/UI/Notification/Notification";
import { useForm } from "react-hook-form";
import Button from "@/components/UI/Button/BlockButton/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoUpdateSchema } from "@/lib/user/schema";
import { UserProfileInfo } from "@/lib/user/types";
import TextArea from "@/components/UI/FormElements/TextArea/TextArea";

type FormData = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  bio: string;
};

type SettingsFormProps = {
  userInfo: UserProfileInfo;
};

const SettingsForm = ({ userInfo }: SettingsFormProps) => {
  const submitHandler = (data) => {
    console.log("submitted!", data);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userInfoUpdateSchema),
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      userName: userInfo.userName,
      bio: userInfo.bio,
    },
  });
  const loading = false;
  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes["Account"]}>
      <h2 className={classes["Account__title"]}>Edit profile</h2>
      <div className={classes["basic-info"]}>
        <div className={classes["basic-info__profile-pic"]}>
          <div className={classes["basic-info__profile-image-container"]}>
            <img
              src={
                // (this.props.userProfileInfo &&
                //   this.props.userProfileInfo.profilePicUrl) ||
                "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
              }
              alt="user's dp"
            />
          </div>
          <input
            // ref={this.inputRef}
            style={{ display: "none" }}
            type="file"
            // onChange={this.imageUploadHandler}
            accept="image/*"
          />
          <button
            // className={profilePicUploadBtnClasses}
            type="button"
            // onClick={this.imageSelectHandler}
            // disabled={this.props.profilePicUpdating}
          >
            {/* {this.props.profilePicUpdating
              ? "Updating Picture..."
              : "Change profile picture"} */}
          </button>
        </div>
        <div className={classes["basic-info__account-info"]}>
          <div className={classes["basic-info__first-name"]}>
            <Input
              type="text"
              fieldLabel="First Name"
              {...register("firstName")}
              fieldErrorMsg={errors.firstName?.message}
            />
          </div>
          <div className={classes["basic-info__last-name"]}>
            <Input
              type="text"
              fieldLabel="Last Name"
              {...register("lastName")}
              fieldErrorMsg={errors.lastName?.message}
            />
          </div>
        </div>
      </div>
      <div className={classes["extra-info"]}>
        <div className={classes["extra-info__email"]}>
          <Input
            type="text"
            {...register("email")}
            fieldLabel="Email Address"
            fieldErrorMsg={errors.email?.message}
            disabled={true}
          />
        </div>
        <div className={classes["extra-info__username"]}>
          <Input
            type="text"
            fieldLabel="Username (only letters and numbers)"
            {...register("userName")}
            fieldErrorMsg={errors.userName?.message}
          />
        </div>
        <div className={classes["extra-info__bio"]}>
          <TextArea
            fieldLabel="Bio"
            {...register("bio")}
            fieldErrorMsg={errors.bio?.message}
          />
        </div>
      </div>
      <div className={classes["Account__submit-btn"]}>
        <Button
          type="submit"
          theme="imagex-default"
          //   clicked={this.updateBtnHandler}
          //   disabled={this.props.profileUpdating}
        >
          {loading ? "..." : "Update account"}
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;
