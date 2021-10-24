import React, { useState } from 'react';
import 'boxicons';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';

function SearchButton({ title }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShowSearchBar(!showSearchBar)}>
        <box-icon name="search-alt-2" />
      </button>
      {showSearchBar && <SearchBar title={title} />}
    </div>
  );
}

SearchButton.propTypes = {
  title: propTypes.string.isRequired,
};

export default SearchButton;
