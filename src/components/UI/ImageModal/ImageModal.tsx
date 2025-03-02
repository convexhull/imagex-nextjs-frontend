"use client";
import { useRouter } from "next/navigation";
// Components
import Modal from "../Modal/Modal";
// Styles
import classes from "./ImageModal.module.css";
// Utils
import { capitalize } from "@/utils/utils";
// Types
import { Platform } from "@/lib/types";

type ImageModalProps = {
  imageUrl: string;
  imageDescription: string;
  uploaderProfileImageUrl: string;
  uploaderName: string;
  uploaderUsername: string;
  platform: Platform;
  imageDownloadUrl: string;
};

const ImageModal = ({
  imageUrl,
  imageDescription,
  uploaderProfileImageUrl,
  uploaderName,
  uploaderUsername,
  imageDownloadUrl,
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
          <div className={classes["actions"]}>
            <div onClick={() => {}}>❤️</div>
            <div className={classes["download-button"]}>
              <a
                title="Download photo"
                href={`${imageDownloadUrl}`}
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
