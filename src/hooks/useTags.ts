import useSWR from 'swr';

import { TypeLoadingStatus } from 'interfaces';
import { getTags } from 'services/tagService';

interface DataResponse<T> {
  data: T | undefined;
  isLoading: TypeLoadingStatus;
  isError: string;
}

export function useTags<T>(url: string): DataResponse<T> {
  const { data, error } = useSWR<T>(url, getTags);
  return {
    data,
    isLoading: !data
      ? TypeLoadingStatus.IS_PENDING
      : !data && !error
      ? TypeLoadingStatus.IS_REJECTED
      : TypeLoadingStatus.IS_RESOLVED,
    isError: error,
  };
}
