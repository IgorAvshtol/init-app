import { getUserFromLocalStorage } from './localStorage/localStorage';
import { IResponseData } from '../hooks/useProvideAuth';

export function dataFromStorageIsValid(): IResponseData | null {
  const data = getUserFromLocalStorage();
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.log('JSON is not valid');
    }
  }
  return null;
}
