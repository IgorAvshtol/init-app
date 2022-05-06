import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/store';
import { TypeLoadingStatus } from 'interfaces';
import notFound from 'image/404-not-found.png';
import spinner from 'image/spinner.gif';
import { getCurrentUserArticles } from 'store/articles/articlesThunk';
import { Publication } from '../Profile/Publication';

export function Publications() {
  const dispatch = useAppDispatch();
  const { currentUserArticles, loading } = useAppSelector((state) => state.articles);
  const { username } = useParams();
  const correctUsername = username?.split('').slice(1, username?.length).join('');

  useEffect(() => {
    correctUsername && dispatch(getCurrentUserArticles(correctUsername));
  }, [dispatch, correctUsername]);

  return (
    <div className="mt-4 w-5/6 xl:w-1/2 sm:w-5/6">
      <span className="text-xl font-bolt md:text-3xl">Publications</span>
      {loading === TypeLoadingStatus.IS_REJECTED && (
        <div className="w-full h-full flex justify-center items-center">
          <img src={notFound} alt="not-found" />
        </div>
      )}
      {loading === TypeLoadingStatus.IS_PENDING && (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={100} alt="spinner" />
        </div>
      )}
      {loading === TypeLoadingStatus.IS_RESOLVED &&
        currentUserArticles.map((post) => {
          return (
            <Publication
              key={nanoid()}
              title={post.title}
              description={post.description}
              createdAt={post.createdAt}
              tagList={post.tagList}
              slug={post.slug}
            />
          );
        })}
    </div>
  );
}
