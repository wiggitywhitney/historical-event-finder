import React from 'react';

const SearchBar = (props) => {

  return (
    <div className="search" >
      <form id="searchForm" onSubmit={(e) => props.searchBarSubmit(e)}>
        <input id="searchField" type="text" placeholder="Search.."></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

};

export default SearchBar;