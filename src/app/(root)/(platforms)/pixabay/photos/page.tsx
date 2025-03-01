// Components
import ImageScrollLoader from "@/components/ImageScrollLoader/ImageScrollLoader";
import { Platform } from "@/lib/types";

const PixabaySearchResults = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) => {
  const search = await searchParams;
  return (
    <div>
      <ImageScrollLoader platform={Platform.PIXABAY} keyword={search.keyword} />
    </div>
  );
};

export default PixabaySearchResults;
