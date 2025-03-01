// Components
import ImageScrollLoader from "@/components/ImageScrollLoader/ImageScrollLoader";
import HeroSection from "@/components/HeroSection/HeroSection";
import CategoryNavbar from "@/components/Navbar/CategoryNavbar/CategoryNavbar";
// Types
import { Platform } from "@/lib/types";
// Styles
import classes from "./page.module.css";

export default async function Home() {
  return (
    <>
      <CategoryNavbar platform={Platform.UNSPLASH} hideLogo />
      <div className={classes["hero-container"]}>
        <HeroSection
          platform={Platform.UNSPLASH}
          title="ImageX"
          subtitle1="Your source of freely-usable images."
          subtitle2="Powered by creators everywhere."
          subtitle3="Trending: flower, wallpapers, backgrounds, happy, love"
        />
      </div>
      <div className={classes["trending-images"]}>
        <ImageScrollLoader platform={Platform.UNSPLASH} keyword="people" />
      </div>
    </>
  );
}
