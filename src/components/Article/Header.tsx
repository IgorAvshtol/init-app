import { nanoid } from 'nanoid';
import { format } from 'date-fns';

import add from 'image/add.svg';
import like from 'image/like.png';

interface IArticleHeader {
  avatar: string;
  author: string;
  tagList: string[];
  createdAt: string;
  favoritesCount: number;
}

export function Header({ avatar, author, createdAt, tagList, favoritesCount }: IArticleHeader) {
  const correctDate = format(new Date(createdAt), 'MMMd');
  return (
    <div className="w-full flex justify-between items-start xl:items-end lg:items-end md:items-end">
      <div className="w-2/3 flex items-start">
        <img src={avatar} className="rounded-full w-1/6 h-1/6" alt="avatar" />
        <div className="ml-2 w-full flex-col xl:ml-8 lg:ml-8 md:ml-8">
          <p className="font-medium text-lg">{author}</p>
          <div className="w-full flex xl:pt-2 lg:pt-2 md:pt-2">
            <span className="text-sm xl:text-base lg:text-base md:text-base">{correctDate}</span>
            <span className="pl-1">·</span>
            <div className="w-full flex flex-wrap text-zinc-400">
              {tagList.map((tag) => {
                return (
                  <a
                    href="/"
                    key={nanoid()}
                    className="mb-1 ml-1 px-2 bg-zinc-200 te text-sm text-center rounded-full border-black flex justify-center xl:text-base lg:text-base md:text-base sm:text-sm"
                  >
                    {tag}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-34 items-center xl:flex xl:w-24 lg:flex lg:w-24 md:flex md:w-24 sm:flex sm:w-24">
        <button className="flex w-[65px] bg-emerald-100 justify-between items-center px-1 text-center rounded-full border-black">
          <img className="h-4" src={like} alt="favourite" />
          <p className="text-xs xl:text-base lg:text-base md:text-base sm:text-base">
            {favoritesCount}
          </p>
        </button>
        <button>
          <img
            className="w-6 ml-10 pt-2 xl:ml-2 lg:ml-2 md:ml-2 sm:ml-1"
            src={add}
            alt="add-to-favourite"
          />
        </button>
      </div>
    </div>
  );
}
