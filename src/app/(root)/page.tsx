// Components
import ImageScrollLoader from "@/components/ImageScrollLoader/ImageScrollLoader";
import HeroSection from "@/components/HeroSection/HeroSection";
// Styles
import classes from "./page.module.css";
import { Platform } from "@/lib/types";

export default async function Home() {
  return (
    <>
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
        <ImageScrollLoader keyword="people" />
      </div>
    </>
  );
}
