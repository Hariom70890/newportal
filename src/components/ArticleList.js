import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../features/articlesSlice';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

function ArticleList() {
  const dispatch = useDispatch();
  const { articles, status, error, category, page, totalResults, searchQuery } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [dispatch, category, page]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <SearchBar />
      <CategoryFilter />
      {filteredArticles.length > 0 ? (
        <>
          {filteredArticles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            pageSize={20}
          />
        </>
      ) : (
        <div>No articles found.</div>
      )}
    </div>
  );
}

export default ArticleList;