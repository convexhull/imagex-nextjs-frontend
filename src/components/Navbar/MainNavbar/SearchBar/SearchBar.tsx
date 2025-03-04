"use client";
// Libs
import Form from "next/form";
import { usePathname } from "next/navigation";
import { useState } from "react";
// Styles
import classes from "./SearchBar.module.css";
import { getActivePlatform } from "@/utils/utils";

const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const pathname = usePathname();
  const platform = getActivePlatform(pathname);

  let crossIconClasses = classes["close-icon"];
  if (keyword !== "") {
    crossIconClasses += " " + classes["close-icon--visible"];
  }

  return (
    <Form
      action={`/${platform}/photos`}
      className={classes["Searchbar"]}
      tabIndex={1}
    >
      <span className={classes["search-icon"]}>🔍</span>
      <input
        className={classes["searchbox"]}
        type="text"
        placeholder="Search free high-resolution photos"
        name="keyword"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <span className={crossIconClasses} onClick={() => setKeyword("")}>
        X
      </span>
    </Form>
  );
};

export default SearchBar;
