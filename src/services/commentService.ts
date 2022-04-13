import { AxiosError, AxiosResponse } from 'axios';
import { mutate } from 'swr';

import { instance } from './httpService';
import { errorHandleService } from 'utils/errorHandleService';
import { ICreateMenu } from '../interfaces';

export const getComments = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    const error = e as AxiosError;
    return errorHandleService(error);
  }
};

export const createComment = async <T>(
  url: string,
  body: T
): Promise<AxiosResponse<ICreateMenu> | string> => {
  try {
    return await instance.post(url, body);
  } catch (e) {
    const error = e as AxiosError;
    return errorHandleService(error);
  }
};

export const deleteComment = async (url: string): Promise<AxiosResponse | string> => {
  try {
    const res = await instance.delete(url);
    await mutate(url);
    return res;
  } catch (e) {
    const error = e as AxiosError;
    return errorHandleService(error);
  }
};
