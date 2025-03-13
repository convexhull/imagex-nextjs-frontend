// Components
import ImageModal from "@/components/UI/ImageModal/ImageModal";
// Services
import { getFavouriteImage } from "@/services/user/api.server";

type ViewFavouriteImageProps = {
  params: Promise<{ imageId: string }>;
};

const ViewFavouriteImage = async ({
  params: pageParams,
}: ViewFavouriteImageProps) => {
  const { imageId } = await pageParams;

  const transformedImage = await getFavouriteImage(imageId);
  return <ImageModal image={transformedImage} />;
};

export default ViewFavouriteImage;
