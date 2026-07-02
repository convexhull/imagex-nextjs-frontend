"use client";

import { Download } from "lucide-react";
import ToggleFavourite from "@/components/ToggleFavourite/ToggleFavourite";
import Spinner from "@/components/UI/Spinner/Spinner";
import RefreshRandomImageButton from "./RefreshRandomImageButton/RefreshRandomImageButton";
import { capitalize } from "@/utils/utils";
import { Image } from "@/lib/types";
import classes from "./ImageModal.module.css";
import overlayClasses from "./RandomImageRefresh/RandomImageLoadingOverlay.module.css";

type ImageModalBodyProps = {
  image: Image;
  showRandomRefresh?: boolean;
  isLoadingRandomImage?: boolean;
  onRefreshRandom?: () => void;
};

const ImageModalBody = ({
  image,
  showRandomRefresh = false,
  isLoadingRandomImage = false,
  onRefreshRandom,
}: ImageModalBodyProps) => {
  const capitalizedImageDesc = capitalize(
    image.description || image.alt_description || ""
  );

  if (!image.urls.regular) return null;

  return (
    <div className={classes.container}>
      <div className={classes.imageDetails}>
        {image.user.profile_image && (
          <div className={classes["user-info"]}>
            <div>
              <img src={image.user.profile_image} alt="uploader's" />
            </div>
            <p>
              <strong>{image.user.name}</strong>
            </p>
            <p>@{image.user.username}</p>
          </div>
        )}
        <div className={classes["actions"]}>
          <div>
            <ToggleFavourite image={image} />
          </div>
          <div className={classes["download-button"]}>
            <a
              title="Download photo"
              href={`${image.links.download}`}
              rel="noopener noreferrer"
              target="_blank"
              download="file.jpg"
            >
              <span className="_2Aga-">
                <Download />
              </span>
            </a>
          </div>
          {showRandomRefresh && onRefreshRandom && (
            <RefreshRandomImageButton
              onClick={onRefreshRandom}
              disabled={isLoadingRandomImage}
            />
          )}
        </div>
      </div>
      <div className={classes["image-container"]}>
        {isLoadingRandomImage && (
          <div
            className={overlayClasses.overlay}
            aria-live="polite"
            aria-busy="true"
          >
            <Spinner />
          </div>
        )}
        <img
          src={image.urls.regular}
          alt={capitalizedImageDesc || "alternate definition"}
        />
        <div className={classes["image-footer"]}>{capitalizedImageDesc}</div>
      </div>
    </div>
  );
};

export default ImageModalBody;
