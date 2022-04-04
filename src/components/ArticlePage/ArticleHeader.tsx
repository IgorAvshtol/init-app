import { nanoid } from 'nanoid';

import add from '../../image/add.svg';

import { dateUtils } from '../../utils/dateUtils';
import like from '../../image/like.png';

interface IArticleHeader {
  avatar: string;
  author: string;
  tagList: string[];
  createdAt: string;
  favoritesCount: number;
}

export function ArticleHeader({
  avatar,
  author,
  createdAt,
  tagList,
  favoritesCount,
}: IArticleHeader) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-2/3 flex">
        <img src={avatar} className="rounded-full w-20" alt="avatar" />
        <div className="ml-8 w-full flex-col">
          <p className="font-medium text-lg">{author}</p>
          <div className="w-full pt-2 flex">
            <span>{dateUtils(createdAt)}</span>
            <span className="pl-1">·</span>
            <div className="w-full flex flex-wrap">
              {tagList.map((tag) => {
                return (
                  <a
                    href="/"
                    key={nanoid()}
                    className="mb-1 ml-1 px-2 bg-zinc-200 text-center rounded-full border-black flex justify-center"
                  >
                    {tag}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 flex justify-between">
        <button className="flex w-[65px] bg-emerald-100 justify-between items-center px-1 text-center rounded-full border-black">
          <img className="h-4" src={like} alt="favourite" />
          <p className="text-xs xl:text-base lg:text-base md:text-base sm:text-base">
            {favoritesCount}
          </p>
        </button>
        <button>
          <img className="w-6" src={add} alt="add-to-favourite" />
        </button>
      </div>
    </div>
  );
}
