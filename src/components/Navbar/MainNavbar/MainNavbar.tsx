// Libs
import Link from "next/link";
// Styles
import classes from "./MainNavbar.module.css";
// import SearchBar from "./SearchBar/SearchBar";
// import OptionsMenu from "./OptionsMenu/OptionsMenu";
// import ProfileMenu from "./ProfileMenu/ProfileMenu";
import NavLinks from "./NavLinks/NavLinks";

const MainNavbar = () => {
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
      {/* <div className={classes["image-search"]}>
        <SearchBar />
      </div> */}
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
      ) : null}
      {authenticationInfo}
      {this.state.showProfileMenu ? (
        <div className={classes["responsive-dropdown"]}>
          <ProfileMenu toggleProfileMenu={this.toggleProfileMenu} />
        </div>
      ) : null} */}
    </div>
  );
};

export default MainNavbar;

// class MainNavbar extends Component {
//   state = {
//     showOptionsMenu: false,
//     showProfileMenu: false,
//   };

//   toggleOptionsMenu = () => {
//     this.setState((state, props) => {
//       return {
//         showOptionsMenu: !state.showOptionsMenu,
//       };
//     });
//   };

//   toggleProfileMenu = () => {
//     this.setState((state, props) => {
//       return {
//         showProfileMenu: !state.showProfileMenu,
//       };
//     });
//   };

//   render() {
//     let authenticationInfo = (
//       <ul className={classes["authenticate"]}>
//         <li>
//           <NavLink to="/login" className={classes["navbar-links"]}>
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/signup" className={classes["navbar-links"]}>
//             Join free
//           </NavLink>
//         </li>
//       </ul>
//     );

//     if (this.props.isAuthenticated) {
//       authenticationInfo = (
//         <div className={classes["authenticate"]}>
//           <div className={classes["authenticate__my-list"]}>
//             <NavLink to="/favourite-images">
//               <ion-icon name="heart" style={{ color: "#6f1200" }}></ion-icon>
//             </NavLink>
//           </div>
//           <div
//             className={classes["authenticate__profile-menu"]}
//             onClick={this.toggleProfileMenu}
//           >
//             <img
//               src={
//                 this.props.userProfileInfo &&
//                 this.props.userProfileInfo.profilePicUrl
//               }
//               alt="user's dp"
//             />
//           </div>
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.auth.token !== null,
//     userProfileInfo: state.account.userProfileInfo,
//     platform: state.imagex.activePlatform,
//   };
// };
