import { nanoid } from 'nanoid';

import { useAppSelector } from 'store/store';
import { TypeLoadingStatus } from 'interfaces';
import notFound from 'image/404-not-found.png';
import spinner from 'image/spinner.gif';
import { Article } from './Article';

export function Articles() {
  const { articlesByTag, loading } = useAppSelector((state) => state.articles);
  return (
    <div className="w-full flex flex-col items-center ">
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
        articlesByTag.map((post) => {
          return (
            <Article
              key={nanoid()}
              title={post.title}
              avatar={post.author.image}
              description={post.description}
              author={post.author.username}
              createdAt={post.createdAt}
              tagList={post.tagList}
              slug={post.slug}
              favorited={post.favorited}
              favoritesCount={post.favoritesCount}
            />
          );
        })}
    </div>
  );
}
