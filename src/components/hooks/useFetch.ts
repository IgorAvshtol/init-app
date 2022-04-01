import { useState, useEffect } from 'react';

import { instance } from '../api/api';

interface IResponse {
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
  const [data, setData] = useState<IResponse[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dataFetching = () => {
    instance
      .get(`/articles`)
      .then((res) => {
        setLoading(false);
        const correctData = res.data.articles.map((article: IResponse) => {
          const parseDate = new Date(Date.parse(article.createdAt)).toDateString().split(' ');
          return {
            ...article,
            createdAt: parseDate[1] + parseDate[2],
          };
        });
        setData(correctData);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return { data, loading, error };
}
