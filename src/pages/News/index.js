import React, { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../constants';

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestArticles = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error("Request failed: ", response.status);
      }
      const result = await response.json();

      setArticles(result);
    } catch (err) {
      setError(true);
    }finally {
      setLoading(false);
    }
    
}, []);


  useEffect(() => {
   requestArticles();
  }, []);

  if (loading) {
    return <h3>LOADING</h3>
  }

  if (error) {
    return (
      <>
        <h3>Request error</h3>
        <button onClick={requestArticles}>TRY AGAIN</button>
      </>
    )
  }

  if (!articles.length) {
    return <h3>No articles</h3>;
  }
  return (
    <ul>
      {articles.map((a) => (
        <React.Fragment key={a.id}>
          <li>{a.title}</li>
          <span>{a.publishedAt}</span>
        </React.Fragment>
    ))}
    </ul>
  );
};