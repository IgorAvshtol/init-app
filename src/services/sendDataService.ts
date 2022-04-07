import { instance } from '../api/api';
import { ISendComments } from '../interfaces/interfaces';

export const sendDataService = (url: string, body: ISendComments) => {
  return instance.post(url, body);
};
