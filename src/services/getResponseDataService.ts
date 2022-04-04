import { instance } from '../api/api';

export const fetchDataService = (url: string) => {
  return instance.get(url);
};
