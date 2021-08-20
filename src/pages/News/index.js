import React, { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../constants';

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  

  const requestArticles = useCallback(() => {
    fetch(API_URL)
    .then((response) => {

      if (!response.ok) {
        throw new Error("Request failed: ", response.status);
      }
      return response.json();
  })
  .then((result) => setArticles(result))
  .catch(() => {
    setError(true);
  });
}, []);


  useEffect(() => {
   requestArticles();
  }, []);

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