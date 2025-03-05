// Components
import ImageModal from "@/components/UI/ImageModal/ImageModal";
import { transformUnsplashImageData } from "@/utils/utils";

const RandomImage = async () => {
  const response = await fetch(
    `${process.env.BACKEND_API_URL}/unsplash/randomPhoto`
  );
  const { data: image } = await response.json();
  const transformedImage = transformUnsplashImageData(image);

  return <ImageModal image={transformedImage} />;
};

export default RandomImage;

// TODO: TS API RESPONSE VALIDATION?
