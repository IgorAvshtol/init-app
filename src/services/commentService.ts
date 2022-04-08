import { instance } from './httpService';
import { errorHandleService } from '../utils/errorHandleService';
import { useCallback } from 'react';
import { sendDataService } from './sendDataService';

// export const commentService = <T>(url: string, body: T) => {
//   return instance
//     .post(url, body)
//     .then((res: AxiosResponse<T>) => res.data)
//     .catch((error) => console.log(error));
// };

export const getComments = async (url: string): Promise<any> => {
  try {
    console.log('getCommentService');
    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    return errorHandleService(e);
  }
};

export const createComment = async <T>(url: string, body: T): Promise<any> => {
  try {
    const data = await instance.post(url, body);
    await getComments(url);
    return data;
  } catch (e) {
    return errorHandleService(e);
  }
};
