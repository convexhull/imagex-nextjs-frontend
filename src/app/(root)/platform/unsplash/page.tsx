// Components
import HeroSection from "@/components/HeroSection/HeroSection";
// Types
import { Platform } from "@/lib/types";
// Styles
import classes from "./page.module.css";

const UnsplashHome = () => {
  return (
    <div className={classes["hero-container"]}>
      <HeroSection
        platform={Platform.UNSPLASH}
        title="Unsplash"
        subtitle1="Your source of freely-usable images."
        subtitle2="Powered by creators everywhere."
        subtitle3="Powered by creators everywhere."
      />
    </div>
  );
};

export default UnsplashHome;
