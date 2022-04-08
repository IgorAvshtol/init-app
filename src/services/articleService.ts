import { instance } from './httpService';
import { AxiosResponse } from 'axios';

export const getArticles = <T>(url: string): Promise<any> => {
  return instance
    .get(url)
    .then((res: AxiosResponse<T>) => res.data)
    .catch((error) => console.log(error));
};
