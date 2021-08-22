import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/articles/actions';
import { selectArticles, selectArticlesError, selectArticlesLoading } from '../../store/articles/selectors';

export const News = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);
  const articles = useSelector(selectArticles);

  const requestArticles = useCallback(() => {
   dispatch(getArticles());

    
}, []);


  useEffect(() => {
   requestArticles();
  }, []);

  if (loading) {
    return <h3>LOADING...</h3>
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