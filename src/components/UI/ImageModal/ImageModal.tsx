// Components
import Modal from "../Modal/Modal";
import ImageModalBody from "./ImageModalBody";
// Types
import { Image } from "@/lib/types";

type ImageModalProps = {
  image: Image;
};

const ImageModal = ({ image }: ImageModalProps) => {
  return (
    <Modal>
      <ImageModalBody image={image} />
    </Modal>
  );
};

export default ImageModal;
