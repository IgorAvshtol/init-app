import { AxiosError } from 'axios';

export const errorHandleService = (err: AxiosError | any) => {
  const responseErrorData = err.response?.data.errors;
  const resArray = [];
  for (const [key, value] of Object.entries(responseErrorData)) {
    resArray.push(`${key} ${value}`);
  }
  return String(resArray);
};
