import { instance } from '../api/api';

export const sendDataService = <T>(url: string, body: T) => {
  return instance.post(url, body);
};
