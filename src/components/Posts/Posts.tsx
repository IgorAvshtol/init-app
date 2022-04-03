import spinner from '../../image/spinner.gif';
import notFound from '../../image/404-not-found.png';

import { Post } from './Post';
import { useFetch } from '../hooks/useFetch';

export function Posts() {
  const { articles, loading, error } = useFetch();
  return (
    <div className="w-1/2 flex flex-col justify-items-start">
      {error ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={notFound} alt="not-found" />
        </div>
      ) : loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={100} height={100} alt="spinner" />
        </div>
      ) : (
        articles?.map((post) => {
          return (
            <Post
              key={post.updatedAt}
              title={post.title}
              avatar={post.author.image}
              description={post.description}
              author={post.author.username}
              createdAt={post.createdAt}
              tagList={post.tagList}
              favoritesCount={post.favoritesCount}
            />
          );
        })
      )}
    </div>
  );
}
