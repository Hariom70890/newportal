import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/articlesSlice';

function CategoryFilter() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.articles.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="btn-group btn-group-toggle flex-wrap" data-toggle="buttons">
        <label
          className={`btn btn-outline-primary ${
            selectedCategory === 'general' ? 'active' : ''
          }`}
          onClick={() => handleCategoryChange('general')}
        >
          <input type="radio" name="category" autoComplete="off" checked={selectedCategory === 'general'} />
          General
        </label>
        <label
          className={`btn btn-outline-primary ${
            selectedCategory === 'business' ? 'active' : ''
          }`}
          onClick={() => handleCategoryChange('business')}
        >
          <input type="radio" name="category" autoComplete="off" checked={selectedCategory === 'business'} />
          Business
        </label>
        <label
          className={`btn btn-outline-primary ${
            selectedCategory === 'technology' ? 'active' : ''
          }`}
          onClick={() => handleCategoryChange('technology')}
        >
          <input type="radio" name="category" autoComplete="off" checked={selectedCategory === 'technology'} />
          Technology
        </label>
        <label
          className={`btn btn-outline-primary ${
            selectedCategory === 'entertainment' ? 'active' : ''
          }`}
          onClick={() => handleCategoryChange('entertainment')}
        >
          <input type="radio" name="category" autoComplete="off" checked={selectedCategory === 'entertainment'} />
          Entertainment
        </label>
      </div>
    </div>
  );
}

export default CategoryFilter;