import spinner from '../../image/spinner.gif';
import notFound from '../../image/404-not-found.png';

import { Post } from './Post';
import { useFetch } from '../../hooks/useFetch';
import { IArticle, TypeLoadingStatus } from '../../interfaces/interfaces';

export function Posts() {
  const { data, loading, error } = useFetch<IArticle[]>('/articles');
  return (
    <div className="w-full pt-6 flex flex-col justify-items-start xl:w-2/3 lg:w-2/3 md:w-full sm:w-full sm:pt-2">
      {error && loading === TypeLoadingStatus.IS_REJECTED ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={notFound} alt="not-found" />
        </div>
      ) : loading === TypeLoadingStatus.IS_PENDING ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={100} alt="spinner" />
        </div>
      ) : (
        loading === TypeLoadingStatus.IS_RESOLVE &&
        data?.map((post) => {
          return (
            <Post
              key={post.slug}
              title={post.title}
              avatar={post.author.image}
              description={post.description}
              author={post.author.username}
              createdAt={post.createdAt}
              tagList={post.tagList}
              slug={post.slug}
              favoritesCount={post.favoritesCount}
            />
          );
        })
      )}
    </div>
  );
}
