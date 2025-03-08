"use client";
// Libs
import { useState } from "react";
import { useRouter } from "next/navigation";
// Components
import { Search, X } from "lucide-react";
// Styles
import classes from "./SearchBox.module.css";
import { Platform } from "@/lib/types";

type SearchBoxProps = {
  platform: Platform;
};

const SearchBox = ({ platform }: SearchBoxProps) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const formSubmitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    router.push(`/${platform}/photos?keyword=${keyword}`);
  };

  return (
    <form className={classes["mainsection__form"]} onSubmit={formSubmitHandler}>
      <div className={classes["Search"]}>
        <div className={classes["search-symbol"]}>
          <Search />
        </div>
        <input
          type="text"
          placeholder="Search free high-resolution photos"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        {keyword ? (
          <div onClick={() => setKeyword("")} className={classes["cancel-btn"]}>
            <X />
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default SearchBox;

//TODO: ICONS HERE AND EVERYWHERE
