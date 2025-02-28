// Components
import SearchBox from "./SearchBox/SearchBox";
// Types
import { Platform } from "@/lib/types";
// Styles
import classes from "./HeroSection.module.css";

type HeroSectionProps = {
  platform: Platform;
  title: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
};

const HeroSection = ({
  platform,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
}: HeroSectionProps) => {
  return (
    <>
      <div className={classes["mainsection"]}>
        <h1 className={classes["mainsection__title"]}>{title}</h1>
        <p className={classes["mainsection__subtitle"]}>{subtitle1}</p>
        <p className={classes["mainsection__subtitle"]}>{subtitle2}</p>
        <SearchBox platform={platform} />
        <p className={classes["mainsection__trending"]}>{subtitle3}</p>
      </div>
      <div className={classes["subsection"]}></div>
    </>
  );
};

export default HeroSection;
