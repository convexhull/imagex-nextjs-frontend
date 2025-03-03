// Components
import ImageUploader from "./ImageUploader/ImageUploader";
// Styles
import classes from "./page.module.css";

const CVUploader = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["container__image"]}>
        <img src="/camera.svg" alt="camera icon" />
      </div>
      <p className={classes["container__title"]}>
        Upload an image to find similar images
      </p>
      <ImageUploader />
      <p className={classes["container__image-constraints"]}>
        <small>We only support JPG and PNG images under 5MB.</small>
      </p>
    </div>
  );
};

export default CVUploader;
