// Components
import ImageScrollLoader from "@/components/ImageScrollLoader/ImageScrollLoader";
// Types
import { Platform } from "@/lib/types";
// Styles
import classes from "./page.module.css";

type SimilarImagesResultsProps = {
  searchParams: Promise<{ upload_id: string }>;
};

const SimilarImagesResults = async ({
  searchParams,
}: SimilarImagesResultsProps) => {
  const { upload_id } = await searchParams;
  return (
    <>
      <h1 className={classes["search-message"]}>
        Here are some similar images&nbsp;⚡️
      </h1>
      <ImageScrollLoader
        platform={Platform.COMPUTER_VISION}
        keyword={upload_id}
      />
    </>
  );
};

export default SimilarImagesResults;
