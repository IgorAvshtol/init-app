import { AxiosError } from 'axios';

import { instance } from './httpService';
import { errorHandleService } from 'utils/errorHandleService';

export const getTags = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    const error = e as AxiosError;
    return errorHandleService(error);
  }
};
