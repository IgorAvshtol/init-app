import lens from 'image/lens.webp';
import { useAppSelector } from 'store/store';

export function List() {
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const images = favoriteArticles.articles.map((articles) => articles.author.image);
  const favoriteCount = favoriteArticles.articlesCount;

  return (
    <div className="mt-12 w-full h-44 border flex justify-between">
      <div className="p-8 w-3/5 flex flex-col h-full justify-between">
        <p className="text-2xl font-bold">Reading list</p>
        <div className="flex items-center">
          <button className="w-20 border-[1px] text-sm border-black rounded-full py-1 px-2">
            View list
          </button>
          <p className="ml-3 text-sm text-zinc-400">{favoriteCount} stories</p>
        </div>
      </div>
      <div className="flex w-2/5">
        <div
          className="w-[166px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[images.length - 1] || lens})` }}
        />
        <div
          className="w-28 border-x-2 border-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[images.length - 2] || lens})` }}
        />
        <div
          className="w-16 border-r-2 border-white bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images[images.length - 3] || lens})` }}
        />
      </div>
    </div>
  );
}
