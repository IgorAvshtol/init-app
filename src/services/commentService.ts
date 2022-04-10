import { AxiosError, AxiosResponse } from 'axios';
import { mutate } from 'swr';

import { instance } from './httpService';
import { errorHandleService } from 'utils/errorHandleService';
import { ISendComment } from '../interfaces';

export const getComments = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    const error = e as AxiosError;
    return errorHandleService(error);
  }
};

export const sendComment = async <T>(
  url: string,
  body: T
): Promise<AxiosResponse<ISendComment> | string> => {
  try {
    const res = await instance.post(url, body);
    await mutate(url);
    return res;
  } catch (e) {
    const error = e as AxiosError;
    return errorHandleService(error);
  }
};
