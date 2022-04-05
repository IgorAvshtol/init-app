import { instance } from '../api/api';

export const fetchDataService = (url: string, options?: string) => {
  return instance.get(options ? `${url}/${options}` : url);
};
