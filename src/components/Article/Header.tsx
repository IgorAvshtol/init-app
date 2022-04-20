import { nanoid } from 'nanoid';
import { format } from 'date-fns';

import add from 'image/add.svg';
import edit from 'image/edit.png';
import like from 'image/like.png';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

interface IArticleHeader {
  slug: string;
  avatar: string;
  author: string;
  tagList: string[];
  createdAt: string;
  favoritesCount: number;
}

export function Header({
  avatar,
  author,
  createdAt,
  tagList,
  favoritesCount,
  slug,
}: IArticleHeader) {
  const { user } = useAppSelector((state) => state.auth);
  const correctDate = format(new Date(createdAt), 'MMMd');
  return (
    <div className="w-full flex justify-between items-start xl:items-center lg:items-center md:items-center">
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
      <div className="w-14 flex-col items-center">
        <button className="flex w-full bg-emerald-100 px-1.5 justify-between items-center text-center rounded-full border-black">
          <img className="h-3" src={like} alt="favourite" />
          <p className="text-xs xl:text-sm lg:text-sm md:text-sm sm:text-sm">{favoritesCount}</p>
        </button>
        {user?.username === author && (
          <div className="w-full flex justify-between">
            <button>
              <img className="w-6 pt-2" src={add} alt="add-to-favourite" />
            </button>
            <NavLink to={`/new-article/${slug}`}>
              <img
                className="w-6 pt-2 xl:ml-2 lg:ml-2 md:ml-2 sm:ml-1"
                src={edit}
                alt="edit-this-article"
              />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
