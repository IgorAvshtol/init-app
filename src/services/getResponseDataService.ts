import { instance } from './httpService';

export const fetchDataService = (url: string) => {
  return instance.get(url);
};
