import { useCallback, useEffect, useState } from 'react';

import { fetchDataService } from '../services/getResponseDataService';
import { ISendComments, TypeLoadingStatus } from '../interfaces/interfaces';
import { sendDataService } from '../services/sendDataService';
import { errorHandleService } from '../services/errorHandleService';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<TypeLoadingStatus>(TypeLoadingStatus.IS_RESOLVE);
  const [error, setError] = useState<string>('');
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
        setError('Server error');
      });
  }, [url]);

  const sendData = useCallback(
    (body: ISendComments) => {
      sendDataService(url, body)
        .then(() => {
          getResponseData();
          setError('');
        })
        .catch((error) => {
          const handledError = errorHandleService(error);
          setError(handledError);
        });
    },
    [url, getResponseData]
  );

  useEffect(() => {
    getResponseData();
  }, [getResponseData]);

  return { data, sendData, loading, error };
};
