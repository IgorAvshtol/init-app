import { useState, useEffect } from 'react';

import { fetchDataService } from '../../services/getResponseDataService';

export interface IArticles {
  slug: string;
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

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getResponseData = (url: string) => {
    setLoading(true);
    fetchDataService(url)
      .then((res) => {
        setLoading(false);
        const urlKey = url.split('').splice(1, url.length).join('');
        setData(res.data[urlKey]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getResponseData(url);
  }, [url]);

  return { data, loading, error };
};
