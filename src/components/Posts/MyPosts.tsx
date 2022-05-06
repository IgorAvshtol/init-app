import { nanoid } from 'nanoid';

import { useAppSelector } from 'store/store';
import { Post } from './Post';

export function MyPosts() {
  const { currentUserArticles } = useAppSelector((state) => state.articles);

  return (
    <div className="w-full flex flex-col items-center">
      {currentUserArticles.map((post) => {
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
