"use client";
import { Image } from "@/lib/types";
import { useAddFavouriteImage } from "@/services/mutations";
import { Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// Styles
import classes from "./AddFavourite.module.css";

type AddFavouriteProps = {
  image: Image;
};

const AddFavourite = ({ image }: AddFavouriteProps) => {
  const addFavouriteImageMutation = useAddFavouriteImage();
  const router = useRouter();
  const { session } = useAuth();

  const addFavouriteHandler = () => {
    if (!session) return router.push("/login");
    addFavouriteImageMutation.mutate(image);
  };

  return (
    <button className={classes.container__button} onClick={addFavouriteHandler}>
      <Heart stroke="none" />
    </button>
  );
};

export default AddFavourite;
