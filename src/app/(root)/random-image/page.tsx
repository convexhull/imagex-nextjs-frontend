import RandomImageModal from "@/components/UI/ImageModal/RandomImageModal";
import { getRandomUnsplashImage } from "@/services/api";

const RandomImage = async () => {
  const transformedImage = await getRandomUnsplashImage();

  return <RandomImageModal initialImage={transformedImage} />;
};

export default RandomImage;
