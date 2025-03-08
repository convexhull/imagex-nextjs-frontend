"use client";
import { Image } from "@/lib/types";
import { useAddFavouriteImage } from "@/services/mutations";
import { Heart } from "lucide-react";

type AddFavouriteProps = {
  image: Image;
};
const AddFavourite = ({ image }: AddFavouriteProps) => {
  const addFavouriteImageMutation = useAddFavouriteImage();

  const addFavouriteHandler = () => {
    addFavouriteImageMutation.mutate(image);
  };

  return (
    <button onClick={addFavouriteHandler}>
      <Heart fill="maroon" stroke="none" />
    </button>
  );
};

export default AddFavourite;
