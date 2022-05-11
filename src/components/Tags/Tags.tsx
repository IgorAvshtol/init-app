import { nanoid } from 'nanoid';

import { useAppSelector } from 'store/store';
import { TypeLoadingStatus } from 'interfaces';
import spinner from 'image/spinner.gif';
import { Tag } from './Tag';

export function Tags() {
  const { tags, loading, error } = useAppSelector((state) => state.tags);

  return (
    <div className="w-full flex flex-wrap">
      {loading === TypeLoadingStatus.IS_REJECTED ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-sm">Sorry, tag field is not available now!</p>
        </div>
      ) : error && loading === TypeLoadingStatus.IS_PENDING ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={20} height={20} alt="spinner" />
        </div>
      ) : (
        loading === TypeLoadingStatus.IS_RESOLVED &&
        tags?.map((tag) => <Tag key={nanoid()} tag={tag} />)
      )}
    </div>
  );
}
