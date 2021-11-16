import React, { useContext } from 'react';
import 'boxicons';
import '../CSS/search-button.css';
import Context from '../Context/Context';

function SearchButton() {
  const { showSearchBar, setShowSearchBar } = useContext(Context);

  return (
    <button id="search-button-main-div" type="button" onClick={() => setShowSearchBar(!showSearchBar)}>
      <box-icon color="white" size="md" name="search-alt-2" />
    </button>
  );
}

export default SearchButton;
