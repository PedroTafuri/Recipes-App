import React, { useState } from 'react';
import 'boxicons';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import FilterCategories from './FilterCategories';

function SearchButton({ title }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  function toggleSearchOptions() {
    if (showSearchBar) {
      return <SearchBar title={title} />;
    }
    return <FilterCategories title={title} />;
  }
  return (
    <div>
      <button type="button" onClick={() => setShowSearchBar(!showSearchBar)}>
        <box-icon name="search-alt-2" />
      </button>
      {toggleSearchOptions()}
    </div>
  );
}

SearchButton.propTypes = {
  title: propTypes.string.isRequired,
};

export default SearchButton;
