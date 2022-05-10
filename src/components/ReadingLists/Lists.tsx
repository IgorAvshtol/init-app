import { nanoid } from 'nanoid';

import { useAppSelector } from 'store/store';
import { TypeLoadingStatus } from 'interfaces';
import notFound from 'image/404-not-found.png';
import spinner from 'image/spinner.gif';
import { List } from './ReadingList/List';
import { Header } from './Header';

export function Lists() {
  const { favoriteArticles, loading } = useAppSelector((state) => state.articles);

  return (
    <div className="w-full flex flex-col items-center xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
      <Header />
      <p className="mt-6 text-2xl font-bold sm:text-3xl w-full flex">Reading list</p>
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
        favoriteArticles.articles.map((post) => {
          return (
            <List
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
              note={post.note}
            />
          );
        })}
    </div>
  );
}
