import { Link } from 'react-router-dom';

import lens from 'image/lens.webp';
import { useAppSelector } from 'store/store';

export function List() {
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const { user } = useAppSelector((state) => state.auth);
  const images = favoriteArticles.articles.map((articles) => articles.author.image);
  const favoriteCount = favoriteArticles.articlesCount;

  return (
    <Link
      to={`${user?.username}/list/reading-list`}
      className="bg-zinc-50 mt-12 w-full h-44 border block xl:flex xl:justify-between lg:flex lg:justify-between md:flex md:justify-between sm:flex sm:justify-between"
    >
      <div className="p-8 w-full flex items-center justify-between xl:flex xl:flex-col xl:justify-between xl:w-3/5 xl:items-start lg:flex lg:flex-col lg:justify-between lg:w-3/5 lg:items-start md:flex md:flex-col md:justify-between md:w-3/5 md:items-start sm:flex sm:flex-col sm:justify-between sm:w-full sm:items-start">
        <p className="text-xl font-bold md:text-2xl sm:text-xl">Reading list</p>
        <div className="flex items-center">
          <button className="hidden md:block md:border-[1px] md:text-sm md:border-black md:rounded-full md:py-1 md:px-2 md:w-20">
            View list
          </button>
          <p className="text-sm text-zinc-400 md:ml-2">{favoriteCount} stories</p>
        </div>
      </div>
      <div className="flex w-full h-full xl:w-2/5 lg:w-2/5 md:w-3/5 sm:w-full">
        <div
          className="w-2/4 h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[images.length - 1] || lens})` }}
        />
        <div
          className="w-1/3 border-x-2 border-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[images.length - 2] || lens})` }}
        />
        <div
          className="w-1/6 border-r-2 border-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[images.length - 3] || lens})` }}
        />
      </div>
    </Link>
  );
}
