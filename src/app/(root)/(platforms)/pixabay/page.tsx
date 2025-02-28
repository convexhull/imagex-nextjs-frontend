// Components
import HeroSection from "@/components/HeroSection/HeroSection";
// Styles
import classes from "./page.module.css";
// Types
import { Platform } from "@/lib/types";

const PixabayHome = () => {
  return (
    <div className={classes["hero-container"]}>
      <HeroSection
        platform={Platform.PIXABAY}
        title="Pixabay"
        subtitle1="Stunning free images & royalty free stock"
        subtitle2="Over 1.8 million+ high quality stock images and videos shared by our talented community."
        subtitle3="Trending: nature, wallpaper, food, business, love, computer, money, beach, office, car, sky, summer"
      />
    </div>
  );
};

export default PixabayHome;
