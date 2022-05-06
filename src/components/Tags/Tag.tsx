import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/store';
import { getArticlesByTag } from '../../store/articles/articlesThunk';

interface ITags {
  tag: string;
}

export function Tag({ tag }: ITags) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onTagClickHandler = () => {
    dispatch(getArticlesByTag(tag));
  };

  return (
    <Link to={`/tag/${tag}`} className="mt-1 mr-2 mb-1">
      <p
        onClick={onTagClickHandler}
        className={
          user
            ? 'text-center text-sm py-2 px-3 bg-zinc-300 rounded-full border-zinc-400 w-full'
            : 'text-center text-sm py-2 px-2 border border-zinc-400 text-zinc-400 w-full'
        }
      >
        {tag}
      </p>
    </Link>
  );
}
