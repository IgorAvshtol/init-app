import { instance } from './httpService';

export const getArticles = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    console.log(e);
  }
};
