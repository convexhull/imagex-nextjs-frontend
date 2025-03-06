// Components
import Modal from "../Modal/Modal";
// Utils
import { capitalize } from "@/utils/utils";
// Types
import { Image } from "@/lib/types";
// Styles
import classes from "./ImageModal.module.css";
import AddFavourite from "@/components/AddFavourite/AddFavourite";

type ImageModalProps = {
  image: Image;
};

const ImageModal = ({ image }: ImageModalProps) => {
  const capitalizedImageDesc = capitalize(image.description || "");

  return (
    <Modal>
      {!image.urls.regular && (
        <div className={classes.container}>
          <div className={classes["spinner"]}>{/* <Spinner /> */}</div>
        </div>
      )}
      {image.urls.regular && (
        <div className={classes.container}>
          <div className={classes["image-header"]}>
            <div className={classes["user-info"]}>
              <div>
                <img src={image.user.profile_image} alt="uploader's" />
              </div>
              <p>
                <strong>{image.user.name}</strong>
              </p>
              <p>@{image.user.username}</p>
            </div>
          </div>
          <div className={classes["actions"]}>
            <div>
              <AddFavourite image={image} />
            </div>
            <div className={classes["download-button"]}>
              <a
                title="Download photo"
                href={`${image.links.download}`}
                rel="noopener noreferrer"
                target="_blank"
                download="file.jpg"
              >
                <span className="_2Aga-">⬇️</span>
              </a>
            </div>
          </div>
          <div className={classes["image-container"]}>
            <img
              src={image.urls.regular}
              alt={capitalizedImageDesc || "alternate definition"}
            />
            <div className={classes["image-footer"]}>
              {capitalizedImageDesc}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;

//TODO: use client?
