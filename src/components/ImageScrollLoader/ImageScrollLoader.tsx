"use client";
// Components
import Spinner from "../UI/Spinner/Spinner";
import EndOfResults from "../UI/EndOfResults/EndOfResults";
import ImageGrid from "../ImageGrid/ImageGrid";
// Hooks
import { useFetchImages } from "@/services/queries";
import { useInView } from "react-intersection-observer";
// Types
import { Image, Platform } from "@/lib/types";
// Styles
import classes from "./ImageScrollLoader.module.css";

type ImageScrollLoaderProps = {
  keyword: string;
  platform: Platform;
};

const ImageScrollLoader = ({ keyword, platform }: ImageScrollLoaderProps) => {
  const imagesQuery = useFetchImages(platform, keyword);
  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) {
        imagesQuery.fetchNextPage();
      }
    },
  });

  const spinnerClasses = [classes["spinner"]];
  let endOfResults = null;

  if (imagesQuery.isPending) {
    return (
      <div ref={ref} className={spinnerClasses.join(" ")}>
        <Spinner />
      </div>
    );
  }

  if (imagesQuery.isError || imagesQuery.hasNextPage === false) {
    spinnerClasses.push(classes["spinner--invisible"]);
    endOfResults = (
      <div className={classes["end-of-results"]}>
        <EndOfResults />
      </div>
    );
  }

  let images: Image[] = [];
  if (imagesQuery.data) {
    imagesQuery.data.pages.forEach((page) => {
      images = images.concat(page.hits);
    });
  }

  return (
    <>
      <ImageGrid images={images} />
      <div ref={ref} className={spinnerClasses.join(" ")}>
        <Spinner />
      </div>
      {endOfResults}
    </>
  );
};

export default ImageScrollLoader;
