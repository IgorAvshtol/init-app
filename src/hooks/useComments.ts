import useSWR from 'swr';

import { deleteComment, getComments, createComment } from 'services/commentService';
import { ICreateMenu } from '../interfaces';
import { AxiosResponse } from 'axios';

interface DataResponse<T> {
  data: T | undefined;
  isError: string;
  sendComment: <T>(url: string, body: T) => Promise<AxiosResponse<ICreateMenu> | string>;
  deleteComment: (url: string) => Promise<AxiosResponse | string>;
}

export function useComments<T>(url?: string): DataResponse<T> {
  const { data: payload, error } = useSWR(url, getComments);
  const data = payload ? payload?.[Object.keys(payload)?.[0]] : undefined;
  return {
    data,
    isError: error,
    sendComment: createComment,
    deleteComment,
  };
}
