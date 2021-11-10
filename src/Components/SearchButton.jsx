import React, { useState } from 'react';
import 'boxicons';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import FilterCategories from './FilterCategories';
import '../CSS/search-button.css';

function SearchButton({ title }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  function toggleSearchOptions() {
    if (showSearchBar) {
      return <SearchBar title={title} />;
    }
    return <FilterCategories title={title} />;
  }
  return (
    <div id="search-button-main-div">
      <button type="button" onClick={() => setShowSearchBar(!showSearchBar)}>
        <box-icon color="white" name="search-alt-2" />
      </button>
      {toggleSearchOptions()}
    </div>
  );
}

SearchButton.propTypes = {
  title: propTypes.string.isRequired,
};

export default SearchButton;
