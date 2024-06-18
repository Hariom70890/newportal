import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQueryy } from '../features/articlesSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQueryy(searchQuery));
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSearch} className="d-flex">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;