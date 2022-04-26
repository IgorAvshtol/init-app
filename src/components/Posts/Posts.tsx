import { nanoid } from 'nanoid';

import spinner from 'image/spinner.gif';
import notFound from 'image/404-not-found.png';

import { Post } from './Post';
import { TypeLoadingStatus } from 'interfaces';
import { useAppSelector } from 'store/store';

export function Posts() {
  const { articles, loading } = useAppSelector((state) => state.articles);
  return (
    <div className="w-full flex flex-col items-center xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
      {loading === TypeLoadingStatus.IS_REJECTED ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={notFound} alt="not-found" />
        </div>
      ) : loading === TypeLoadingStatus.IS_PENDING ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={100} alt="spinner" />
        </div>
      ) : (
        articles?.map((post) => {
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
        })
      )}
    </div>
  );
}
