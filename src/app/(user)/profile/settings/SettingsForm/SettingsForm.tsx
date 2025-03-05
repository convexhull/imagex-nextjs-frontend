"use client";
// Libs
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import Button from "@/components/UI/Button/BlockButton/Button";
import Input from "@/components/UI/FormElements/Input/Input";
import TextArea from "@/components/UI/FormElements/TextArea/TextArea";
import ProfileImage from "../ProfileImage/ProfileImage";
// import Notification from "../../components/UI/Notification/Notification";
// Schema
import { userProfileInfoUpdateSchema } from "@/lib/user/schema";
// Types
import { UserProfileInfo, UserProfileUpdateInfo } from "@/lib/user/types";
// Services
import { useUpdateProfileInfo } from "@/services/user/mutations";
// Styles
import classes from "./SettingsForm.module.css";

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
  const userProfileInfoUpdateMutation = useUpdateProfileInfo();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userProfileInfoUpdateSchema),
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      userName: userInfo.userName,
      bio: userInfo.bio,
    },
  });

  const submitHandler = (data: UserProfileUpdateInfo) => {
    userProfileInfoUpdateMutation.mutate(data);
  };

  const { isPending } = userProfileInfoUpdateMutation;

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes["Account"]}>
      <h2 className={classes["Account__title"]}>My Account</h2>
      <div className={classes["basic-info"]}>
        <ProfileImage userInfo={userInfo} />
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
        <Button type="submit" theme="imagex-default" disabled={isPending}>
          {isPending ? "..." : "Update account"}
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;
