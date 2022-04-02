import { useState, useEffect } from 'react';

import { instance } from '../api/api';

interface IArticles {
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  author: IAuthor;
}

interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export function useFetch() {
  const [articles, setArticles] = useState<IArticles[] | null>(null);
  const [tags, setTags] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getArticles = () => {
    instance
      .get(`/articles`)
      .then((res) => {
        setLoading(false);
        const correctData = res.data.articles.map((article: IArticles) => {
          const parseDate = new Date(Date.parse(article.createdAt)).toDateString().split(' ');
          return {
            ...article,
            createdAt: parseDate[1] + parseDate[2],
          };
        });
        setArticles(correctData);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  const getTags = () => {
    instance
      .get(`/tags`)
      .then((res) => {
        setLoading(false);
        setTags(res.data.tags);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getArticles();
    getTags();
  }, []);

  return { articles, tags, loading, error };
}
