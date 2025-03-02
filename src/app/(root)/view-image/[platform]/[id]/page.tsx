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

  return (
    <ImageModal
      imageUrl={transformedImage.urls.regular}
      imageDescription={transformedImage.description}
      uploaderProfileImageUrl={transformedImage.user.profile_image}
      uploaderName={transformedImage.user.name}
      uploaderUsername={transformedImage.user.username}
      imageDownloadUrl={transformedImage.links.download}
      platform={platform}
    />
  );
};

export default ViewImage;
