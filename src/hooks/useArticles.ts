import useSWR from 'swr';
import { AxiosResponse } from 'axios';

import { addArticle, getArticles } from 'services/articleService';
import { IArticles, TypeLoadingStatus } from 'interfaces';

interface DataResponse<T> {
  data: T | undefined;
  isLoading: TypeLoadingStatus;
  isError: string;
  addArticle: <T>(url: string, body: T) => Promise<AxiosResponse<IArticles> | string>;
}

export function useArticles<T>(url?: string): DataResponse<T> {
  const { data: payload, error } = useSWR(url, getArticles);
  const data = payload ? payload?.[Object.keys(payload)?.[0]] : undefined;
  return {
    data,
    isLoading: !data
      ? TypeLoadingStatus.IS_PENDING
      : !data && !error
      ? TypeLoadingStatus.IS_REJECTED
      : TypeLoadingStatus.IS_RESOLVED,
    isError: error,
    addArticle,
  };
}
