// Libs
import Form from "next/form";
// Styles
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <Form action="/unsplash" className={classes["Searchbar"]} tabIndex={1}>
      {/* <span className={classes["search-icon"]}>
        <ion-icon name="search-outline"></ion-icon>
      </span> */}
      <input
        className={classes["searchbox"]}
        type="text"
        placeholder="Search free high-resolution photos"
        // onChange={this.searchBarChangeHandler}
        // value={this.state.searchValue || ""}
      />
      {/* <span className={crossIconClasses} onClick={this.searchCloseHandler}>
        <i className="fas fa-times"></i>
      </span> */}
    </Form>
  );
};

export default SearchBar;
