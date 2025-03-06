"use client";
import { Image } from "@/lib/types";
import { useAddFavouriteImage } from "@/services/mutations";

type AddFavouriteProps = {
  image: Image;
};
const AddFavourite = ({ image }: AddFavouriteProps) => {
  const addFavouriteImageMutation = useAddFavouriteImage();

  const addFavouriteHandler = () => {
    addFavouriteImageMutation.mutate(image);
  };

  return <button onClick={addFavouriteHandler}>❤️</button>;
};

export default AddFavourite;
