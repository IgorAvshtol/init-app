import { instance } from './httpService';

export const sendDataService = <T>(url: string, body: T) => {
  return instance.post(url, body);
};
