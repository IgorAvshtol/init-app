import { nanoid } from 'nanoid';

import spinner from 'image/spinner.gif';
import notFound from 'image/404-not-found.png';
import { TypeLoadingStatus } from 'interfaces';
import { useAppSelector } from 'store/store';
import { Post } from './Post';

export function MyPublications() {
  const { currentUserArticles, loading } = useAppSelector((state) => state.articles);
  return (
    <div className="w-full flex flex-col items-center">
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
            <Post
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
