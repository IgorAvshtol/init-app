import { nanoid } from 'nanoid';

import { useAppSelector } from 'store/store';
import { Post } from './Post';

export function MyPosts() {
  const { currentUserArticles } = useAppSelector((state) => state.articles);

  return (
    <div className="w-full flex flex-col items-center">
      {currentUserArticles.length === 0 && (
        <span className="mt-12">You don&apos;t have any posts yet.</span>
      )}
      {currentUserArticles.map((post) => (
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
      ))}
    </div>
  );
}
