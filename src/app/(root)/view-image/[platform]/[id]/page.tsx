// Components
import ImageModal from "@/components/UI/ImageModal/ImageModal";
import { unsplashImageSchema } from "@/lib/schema";
import { Platform } from "@/lib/types";
import { transformUnsplashImageData } from "@/utils/utils";

type ViewImageProps = {
  params: Promise<{ platform: Platform; id: string }>;
};

const ViewImage = async ({ params: pageParams }: ViewImageProps) => {
  const { platform, id } = await pageParams;
  const response = await (
    await fetch(`${process.env.BACKEND_API_URL}/${platform}/photo?id=${id}`)
  ).json();
  const image = unsplashImageSchema.safeParse(response.data);
  if (image.error) {
    console.log(image.error.message);
    throw new Error(image.error.message);
  }
  const transformedImage = transformUnsplashImageData(image.data);

  return (
    <ImageModal
      imageUrl={transformedImage.urls.regular}
      imageDescription={transformedImage.description}
      uploaderProfileImageUrl={transformedImage.user.profile_image}
      uploaderName={transformedImage.user.name}
      uploaderUsername={transformedImage.user.username}
    />
  );
};

export default ViewImage;
