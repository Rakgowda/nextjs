import React from "react";
import SearchStyle from "./Search.module.css";
import AdvanceSearch from "../advanceSearch/advanceSearch.js"
import appTheme from "../../styles/Theme.module.css"
const Search = (props) => {
  return (
    <div className={appTheme.flexCenter}>
    <div className={`${SearchStyle.search} `}>
      <input
        name="search"
        onChange={props.onSearchHandle}
        placeholder="Search"
        
      ></input>
    </div>

     <AdvanceSearch></AdvanceSearch>
      </div>

  );
};

export default Search;
