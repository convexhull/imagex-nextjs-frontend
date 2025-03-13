"use client";
// Libs
import { useRouter } from "next/navigation";
// Components
import { Heart } from "lucide-react";
// Services
import {
  useAddFavouriteImage,
  useRemoveFavouriteImage,
} from "@/services/mutations";
// Types
import { Image } from "@/lib/types";
// Context
import { useAuth } from "@/context/AuthContext";
// Styles
import classes from "./ToggleFavourite.module.css";

type ToggleFavouriteProps = {
  image: Image;
};

const ToggleFavourite = ({ image }: ToggleFavouriteProps) => {
  const addFavouriteImageMutation = useAddFavouriteImage();
  const removeFavouriteImageMutation = useRemoveFavouriteImage();

  const router = useRouter();
  const { session } = useAuth();
  const { isPending } = addFavouriteImageMutation;

  const addFavouriteHandler = () => {
    if (!session) return router.push("/login");
    addFavouriteImageMutation.mutate(image);
  };

  const removeFavouriteHandler = () => {
    if (!session) return router.push("/login");
    removeFavouriteImageMutation.mutate(image.id);
  };

  if (image.isFavourite) {
    return (
      <button
        className={`${classes.favouriteBtn} ${classes["favouriteBtn--active"]}`}
        onClick={removeFavouriteHandler}
      >
        <Heart stroke="none" fill="red" />
      </button>
    );
  }

  return (
    <button
      disabled={isPending || addFavouriteImageMutation.isSuccess}
      className={`${classes.favouriteBtn} ${
        addFavouriteImageMutation.isSuccess
          ? classes["favouriteBtn--active"]
          : ""
      }`}
      onClick={addFavouriteHandler}
    >
      <Heart stroke="none" fill="#767676" />
    </button>
  );
};

export default ToggleFavourite;
