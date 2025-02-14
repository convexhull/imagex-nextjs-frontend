// Libs
import Link from "next/link";
import { cookies } from "next/headers";
// Styles
import classes from "./MainNavbar.module.css";
import SearchBar from "./SearchBar/SearchBar";
// import OptionsMenu from "./OptionsMenu/OptionsMenu";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import NavLinks from "./NavLinks/NavLinks";
const MainNavbar = async () => {
  const cookie = await cookies();
  const refreshToken = cookie.get("refreshToken");

  const session = !!refreshToken;
  // TODO: session
  const profileInfo = !session ? (
    <ul className={classes["authenticate"]}>
      <li>
        <Link href="/login" className={classes["navbar-links"]}>
          Login
        </Link>
      </li>
      <li>
        <Link href="/signup" className={classes["navbar-links"]}>
          Join free
        </Link>
      </li>
    </ul>
  ) : (
    <div className={classes["authenticate"]}>
      <div className={classes["authenticate__my-list"]}>
        <Link href="/favourite-images">❤️</Link>
      </div>
      <div className={classes["authenticate__profile-menu"]}>
        <ProfileMenu />
      </div>
    </div>
  );
  return (
    <div className={classes["main-navigation"]}>
      <div className={classes.logo}>
        <Link href="/">
          <img src="/logo.png" alt="imagex logo" />
        </Link>
      </div>
      <div className={classes["imagex-description"]}>
        <p className={classes["imagex-title"]}>ImageX</p>
        <p className={classes["imagex-subtitle"]}>Photos for everyone</p>
      </div>
      <div className={classes["image-search"]}>
        <SearchBar />
      </div>
      <NavLinks />
      {/* <div className={classes["burger-btn"]} onClick={this.toggleOptionsMenu}>
        <i class="fas fa-align-justify"></i>
      </div>
      {this.state.showOptionsMenu ? (
        <div className={classes["responsive-dropdown"]}>
          <OptionsMenu
            randomImageLoad={this.props.randomImageLoad}
            toggleOptionsMenu={this.toggleOptionsMenu}
          />
        </div>
      ) : null} */}
      {profileInfo}
    </div>
  );
};

export default MainNavbar;
