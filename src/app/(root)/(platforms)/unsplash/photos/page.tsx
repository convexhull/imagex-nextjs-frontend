// Components
import ImageScrollLoader from "@/components/ImageScrollLoader/ImageScrollLoader";
import { Platform } from "@/lib/types";

const UnsplashSearchResults = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) => {
  const search = await searchParams;
  return (
    <div>
      <ImageScrollLoader
        platform={Platform.UNSPLASH}
        keyword={search.keyword}
      />
    </div>
  );
};

export default UnsplashSearchResults;
