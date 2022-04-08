import useSWR from 'swr';

import { getComments } from '../services/commentService';

interface DataPayload<T> {
  [key: string]: T;
}

interface DataResponse<T> {
  data: T | undefined;
  isError: string;
}

export function useComments<T>(url: string, key: string): DataResponse<T> {
  const { data: payload, error } = useSWR<DataPayload<T>>(url, getComments);
  const data = payload ? payload[key] : undefined;
  return {
    data,
    isError: error,
  };
}
