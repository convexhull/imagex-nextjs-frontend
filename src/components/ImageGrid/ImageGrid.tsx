// Components
// import ImageModal from "../../Common/UI/ImageModal/ImageModal";
// Utils
import { imageOrientationByDimensions } from "@/utils/utils";
// Types
import { Image } from "@/app/(root)/(platforms)/unsplash/types";
// Styles
import classes from "./ImageGrid.module.css";

type ImageGridProps = {
  images: Image[];
};
const ImageGrid = ({ images }: ImageGridProps) => {
  // const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  // const imageClickHandler = (image: Image) => {
  //   setSelectedImage(image);
  // };
  const imagesToDisplay = images.map((image) => {
    const imgOrientation = imageOrientationByDimensions(
      image.width,
      image.height
    );
    const imageOptionsClasses = [classes["image__options"]];
    const likeBtnClasses = [classes["like-btn"]];
    // if (image.id === this.state.hoveredOverImageId) {
    //   imageOptionsClasses.push(classes["image__options--visible"]);
    // }
    // if (this.state.justLikedImageIds.includes(image.id)) {
    //   likeBtnClasses.push(classes["like-btn--liked"]);
    // }
    return (
      <div
        className={classes[imgOrientation] + " " + classes["image__box"]}
        // onMouseEnter={() => this.displayImageOverlay(image.id)}
        // onMouseLeave={this.removeImageOverlay}
        key={image.id}
      >
        <img
          src={image.urls.small}
          alt={image.description || image.alt_description || ""}
        />
        <div
          className={classes["image__overlay"]}
          // onClick={() => imageClickHandler(image)}
        ></div>
        <div className={imageOptionsClasses.join(" ")}>
          <div
            className={likeBtnClasses.join(" ")}
            // onClick={() => this.likeBtnHandler(image)}
          >
            <span>
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div className={classes["download-button"]}>
            <a
              title="Download photo"
              href={`${image.links.download}?force=true`}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {/* <span className="_2Aga-">
                <i class="fa fa-download" aria-hidden="true"></i>
              </span> */}
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div className={classes["image-grid"]}>{imagesToDisplay}</div>;
};

export default ImageGrid;
