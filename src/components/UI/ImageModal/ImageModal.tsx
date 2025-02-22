"use client";
import { useRouter } from "next/navigation";
// Components
import Modal from "../Modal/Modal";
// Styles
import classes from "./ImageModal.module.css";
// Utils
import { capitalize } from "@/utils/utils";

type ImageModalProps = {
  imageUrl: string;
  imageDescription: string;
  uploaderProfileImageUrl: string;
  uploaderName: string;
  uploaderUsername: string;
};

const ImageModal = ({
  imageUrl,
  imageDescription,
  uploaderProfileImageUrl,
  uploaderName,
  uploaderUsername,
}: ImageModalProps) => {
  const capitalizedImageDesc = capitalize(imageDescription || "");
  const router = useRouter();
  return (
    <Modal hideModal={() => router.back()}>
      {!imageUrl && (
        <div className={classes.container}>
          <div className={classes["spinner"]}>{/* <Spinner /> */}</div>
        </div>
      )}
      {imageUrl && (
        <div className={classes.container}>
          <div className={classes["image-header"]}>
            <div className={classes["user-info"]}>
              <div>
                <img src={uploaderProfileImageUrl} alt="uploader's" />
              </div>
              <p>
                <strong>{uploaderName}</strong>
              </p>
              <p>@{uploaderUsername}</p>
            </div>
          </div>
          <div className={classes["image-container"]}>
            <img
              src={imageUrl}
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

//TODO: use client
