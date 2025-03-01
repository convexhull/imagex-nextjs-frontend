const RandomImage = async () => {
  const response = await fetch(
    `${process.env.BACKEND_API_URL}/unsplash/randomPhoto`
  );
  const { data: image } = await response.json();
  const imageUrl = image.urls.regular;
  // const imageDescription = image.description || image.alt_description;
  // const uploaderProfileImageUrl = image.user?.profile_image.large;
  // const uploaderName = image.user?.name;
  // const uploaderUsername = image.user?.username;

  return (
    <div>
      <img src={imageUrl} />
    </div>
  );
};

export default RandomImage;

// TODO: TS API RESPONSE VALIDATION?
