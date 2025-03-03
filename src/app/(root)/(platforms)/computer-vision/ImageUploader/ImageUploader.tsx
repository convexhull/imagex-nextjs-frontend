"use client";
// Libs
import { ChangeEvent, useRef } from "react";
// Components
import Spinner from "@/components/UI/Spinner/Spinner";
// Services
import { useCVUploadImage } from "@/services/mutations";
// Styles
import classes from "./ImageUploader.module.css";

const ImageUploader = () => {
  const uploadMutation = useCVUploadImage();
  const fileRef = useRef<HTMLInputElement>(null);

  const fileUploadHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) {
      return;
    }
    const file = event.target.files[0];
    if (file.size > 5000000) {
      alert(
        "Your file exceeds the maximum supported size limit of 5MB. Please upload a smaller file."
      );
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    uploadMutation.mutate(file);
  };

  const clickHandler = () => {
    if (fileRef.current) fileRef.current.click();
  };

  if (uploadMutation.isPending) {
    return (
      <div className={classes["spinner"]}>
        <div>
          <Spinner />
          <p className={classes["spinner__text"]}>
            Bringing you similar images from the web. Our AI algorithms are at
            work...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={classes["form"]}>
      <input
        className={classes["form__file"]}
        ref={fileRef}
        accept="image/jpg, image/jpeg, image/png"
        type="file"
        onChange={fileUploadHandler}
        required
      />
      <button
        type="button"
        className={classes["form__btn"]}
        onClick={clickHandler}
      >
        Upload
      </button>
    </form>
  );
};

export default ImageUploader;

//TODO: Handle error
