// Components
import ImageModal from "@/components/UI/ImageModal/ImageModal";

const RandomImage = async () => {
  const response = await fetch("http://localhost:4000/unsplash/randomPhoto");
  const { data: image } = await response.json();
  const imageUrl = image.urls.regular;
  const imageDescription = image.description || image.alt_description;
  const uploaderProfileImageUrl = image.user?.profile_image.large;
  const uploaderName = image.user?.name;
  const uploaderUsername = image.user?.username;

  return (
    <div>
      <ImageModal
        imageUrl={imageUrl}
        imageDescription={imageDescription}
        uploaderProfileImageUrl={uploaderProfileImageUrl}
        uploaderName={uploaderName}
        uploaderUsername={uploaderUsername}
      />
    </div>
  );
};

export default RandomImage;

// TODO: TS API RESPONSE VALIDATION?
