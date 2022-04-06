import { useState, useEffect, useCallback } from 'react';

import { fetchDataService } from '../services/getResponseDataService';
import { TypeLoadingStatus } from '../interfaces/interfaces';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<TypeLoadingStatus>(TypeLoadingStatus.IS_RESOLVE);
  const [error, setError] = useState(false);
  const getResponseData = useCallback(() => {
    setLoading(TypeLoadingStatus.IS_PENDING);
    fetchDataService(url)
      .then((res) => {
        setLoading(TypeLoadingStatus.IS_RESOLVE);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(TypeLoadingStatus.IS_REJECTED);
        setError(true);
      });
  }, [url]);

  useEffect(() => {
    getResponseData();
  }, [getResponseData]);

  return { data, loading, error };
};
