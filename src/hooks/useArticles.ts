import useSWR from 'swr';

import { getArticles } from '../services/articleService';
import { TypeLoadingStatus } from '../interfaces';

interface DataPayload<T> {
  [key: string]: T;
}

interface DataResponse<T> {
  data: T | undefined;
  isLoading: TypeLoadingStatus;
  isError: string;
}

export function useArticles<T>(url: string, key: string): DataResponse<T> {
  const { data: payload, error } = useSWR<DataPayload<T>>(url, getArticles);
  const data = payload ? payload[key] : undefined;
  return {
    data,
    isLoading: !data
      ? TypeLoadingStatus.IS_PENDING
      : !data && !error
      ? TypeLoadingStatus.IS_REJECTED
      : TypeLoadingStatus.IS_RESOLVED,
    isError: error,
  };
}
