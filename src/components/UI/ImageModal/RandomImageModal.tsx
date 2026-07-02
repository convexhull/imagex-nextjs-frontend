"use client";

import { useState } from "react";
import Modal from "../Modal/Modal";
import ImageModalBody from "./ImageModalBody";
import { getRandomUnsplashImage } from "@/services/api";
import { Image } from "@/lib/types";

type RandomImageModalProps = {
  initialImage: Image;
};

const RandomImageModal = ({ initialImage }: RandomImageModalProps) => {
  const [image, setImage] = useState(initialImage);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefreshRandom = async () => {
    setIsLoading(true);

    try {
      const nextImage = await getRandomUnsplashImage();
      setImage(nextImage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      <ImageModalBody
        image={image}
        showRandomRefresh
        isLoadingRandomImage={isLoading}
        onRefreshRandom={handleRefreshRandom}
      />
    </Modal>
  );
};

export default RandomImageModal;
