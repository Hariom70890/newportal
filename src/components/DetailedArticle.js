import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailedArticleView() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(id);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="img-fluid mb-3" />
      <p>{article.content}</p>
      <p>
        Source: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a>
      </p>
    </div>
  );
}

export default DetailedArticleView; 