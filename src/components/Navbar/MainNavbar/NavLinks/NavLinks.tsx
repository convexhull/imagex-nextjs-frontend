// Components
import NavLink from "./NavLink/NavLink";
// Constants
import { PLATFORMS } from "@/lib/constants";
// Styles
import classes from "./NavLinks.module.css";
import { capitalize } from "@/utils/utils";

const NavLinks = () => {
  return (
    <ul className={classes["navlink-container"]}>
      {PLATFORMS.map((platform) => (
        <li key={platform}>
          <NavLink to={`/${platform}`} name={capitalize(platform)} />
        </li>
      ))}
      <li className={classes["main-navigation__link"]}>
        <NavLink to="/computer-vision" name="Similar Image" />
      </li>
      <li className={classes["main-navigation__link"]}>
        <NavLink to="/random-image" name="Random Image" />
      </li>
    </ul>
  );
};

export default NavLinks;
