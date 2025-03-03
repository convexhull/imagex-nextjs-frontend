// Components
import Link from "next/link";
import { Fragment } from "react";
// Utils
import { imageOrientationByDimensions } from "@/utils/utils";
// Types
import { Image, Platform } from "@/lib/types";
// Styles
import classes from "./ImageGrid.module.css";

type ImageGridProps = {
  images: Image[];
  platform: Platform;
};

const ImageGrid = ({ images, platform }: ImageGridProps) => {
  const imagesToDisplay = images.map((image) => {
    const imgOrientation = imageOrientationByDimensions(
      image.width,
      image.height
    );
    const imageOverlay =
      platform === Platform.COMPUTER_VISION ? (
        <a target="_blank" href={image.links.download}>
          <div className={classes["image__overlay"]}></div>
        </a>
      ) : (
        <Link href={`/view-image/${platform}/${image.id}`}>
          <div className={classes["image__overlay"]}></div>
        </Link>
      );
    return (
      <Fragment key={image.id}>
        <div
          className={classes[imgOrientation] + " " + classes["image__box"]}
          key={image.id}
        >
          <img
            src={image.urls.small}
            alt={image.description || image.alt_description || ""}
          />
          {imageOverlay}
        </div>
      </Fragment>
    );
  });
  return <div className={classes["image-grid"]}>{imagesToDisplay}</div>;
};

export default ImageGrid;
