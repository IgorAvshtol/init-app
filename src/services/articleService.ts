import { instance } from './httpService';

export const getArticles = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addArticle = async <T>(url: string, body: T) => {
  try {
    console.log(body);
    const { data } = await instance.post(url, body);
    return data;
  } catch (e) {
    console.log(e);
  }
};
