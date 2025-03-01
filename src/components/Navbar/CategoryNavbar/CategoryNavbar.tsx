// Libs
import Link from "next/link";
// Types
import { Platform } from "@/lib/types";
// Styles
import classes from "./CategoryNavbar.module.css";

type CategoryNavbarProps = {
  hideLogo?: boolean;
  platform: Platform;
};

const CategoryNavbar = ({ platform, hideLogo }: CategoryNavbarProps) => {
  let platformLogo = null;
  switch (platform) {
    case "unsplash":
      platformLogo = <img src="/unsplash-logo.png" />;
      break;
    case "pixabay":
      platformLogo = <img src="/pixabay-logo.png" />;
      break;
    default:
      platformLogo = <img src="/camera.svg" />;
      break;
  }

  return (
    <div className={classes["Category-navigation"]}>
      {!hideLogo ? (
        <div className={classes["platform-logo"]}>{platformLogo}</div>
      ) : null}
      <ul className={classes["navlink-container"]}>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=sustainability`,
            }}
          >
            Sustainability
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=wallpapers`,
            }}
          >
            Wallpapers
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=covid-19`,
            }}
          >
            COVID-19
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=travel`,
            }}
          >
            Travel
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=nature`,
            }}
          >
            Nature
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=textures and patterns`,
            }}
          >
            Textures and Patterns
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=current events`,
            }}
          >
            Current Events
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=people`,
            }}
          >
            People
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=business and work`,
            }}
          >
            Business & Work
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=technology`,
            }}
          >
            Technology
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=interiors`,
            }}
          >
            Interiors
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=architecture`,
            }}
          >
            Architecture
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/${platform}/photos`,
              search: `?keyword=food and drink`,
            }}
          >
            Food & Drink
          </Link>
        </li>
        <li className={classes["navlink-container__link"]}>
          <Link
            href={{
              pathname: `/photos/${platform}`,
              search: `?keyword=athletics`,
            }}
          >
            Athletics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryNavbar;
