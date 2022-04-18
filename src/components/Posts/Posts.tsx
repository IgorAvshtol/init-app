import spinner from 'image/spinner.gif';
import notFound from 'image/404-not-found.png';

import { Post } from './Post';
import { IArticle, TypeLoadingStatus } from 'interfaces';
import { useArticles } from 'hooks/useArticles';

export function Posts() {
  const { data, isLoading, isError } = useArticles<IArticle[]>('/articles');
  return (
    <div className="w-full flex flex-col items-center xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
      {isError ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={notFound} alt="not-found" />
        </div>
      ) : isLoading === TypeLoadingStatus.IS_PENDING ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={100} alt="spinner" />
        </div>
      ) : (
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
