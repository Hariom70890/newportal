import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQueryy } from '../features/articlesSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');


  const handleInputChange = ( e ) =>
  {
    e.preventDefault();
    setSearchQuery(e.target.value);
    dispatch(setSearchQueryy(searchQuery));
    
  };

  return (
    <div className="mb-4">
      <form className="d-flex">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;