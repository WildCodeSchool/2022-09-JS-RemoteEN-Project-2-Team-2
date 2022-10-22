import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "./search.css";

function Search() {
  return (
    <div className="containerSearch">
      <AsyncPaginate placeholder="enter location" />
    </div>
  );
}

export default Search;
