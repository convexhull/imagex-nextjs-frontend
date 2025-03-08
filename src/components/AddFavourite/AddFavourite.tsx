"use client";
import { Image } from "@/lib/types";
import { useAddFavouriteImage } from "@/services/mutations";
import { Heart } from "lucide-react";
// Styles
import classes from "./AddFavourite.module.css";

type AddFavouriteProps = {
  image: Image;
};

const AddFavourite = ({ image }: AddFavouriteProps) => {
  const addFavouriteImageMutation = useAddFavouriteImage();

  const addFavouriteHandler = () => {
    addFavouriteImageMutation.mutate(image);
  };

  return (
    <div className={classes.container}>
      <button
        className={classes.container__button}
        onClick={addFavouriteHandler}
      >
        <Heart />
      </button>
    </div>
  );
};

export default AddFavourite;
