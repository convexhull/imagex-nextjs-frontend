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
          <NavLink to={`/platform/${platform}`} name={capitalize(platform)} />
        </li>
      ))}
      {/* <li
        className={classes["main-navigation__random-image-btn"]}
        onClick={() => {}}
      >
      Random Image
      </li> */}
    </ul>
  );
};

export default NavLinks;
