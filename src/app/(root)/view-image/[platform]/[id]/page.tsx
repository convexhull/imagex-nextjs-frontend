// Components
import ImageModal from "@/components/UI/ImageModal/ImageModal";
import { Platform } from "@/lib/types";
import { getPixabayImage, getUnsplashImage } from "@/services/api";

type ViewImageProps = {
  params: Promise<{ platform: Platform; id: string }>;
};

const ViewImage = async ({ params: pageParams }: ViewImageProps) => {
  const { platform, id } = await pageParams;
  const transformedImage =
    platform === Platform.UNSPLASH
      ? await getUnsplashImage(id)
      : await getPixabayImage(id);

  return <ImageModal image={transformedImage} />;
};

export default ViewImage;
