import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "./search.css";

function Search() {

const [search, setSearch] = useState(null);

  return (
    <div className="containerSearch">
      <AsyncPaginate placeholder="enter location"
      debounceTimeout={1500}
      value={search} />
    </div>
  );
}

export default Search;
