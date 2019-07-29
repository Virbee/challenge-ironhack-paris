import React from "react";

function Searchbar(props) {
  return (
    <div className="search-bar">
      <textarea
        name="searchBarValue"
        value={props.value}
        onInput={e => props.filteringCelebrities(e)}
      />
    </div>
  );
}

export default Searchbar;
