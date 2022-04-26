import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';

import add from 'image/add.svg';
import lens from 'image/lens.webp';
import like from 'image/like.png';
import dislike from 'image/dislike.png';
import { useAppDispatch } from 'store/store';
import { hasLike, hasDislike } from 'store/articles/articlesThunk';

export interface IPost {
  avatar: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  tagList: string[];
}

export function Post(props: IPost) {
  const dispatch = useAppDispatch();
  const {
    author,
    avatar,
    description,
    title,
    createdAt,
    tagList,
    favoritesCount,
    slug,
    favorited,
  } = props;
  const correctDate = format(new Date(createdAt), 'MMMd');
  const onLikeButtonClick = () => {
    if (favorited) {
      dispatch(hasDislike(slug));
    } else {
      dispatch(hasLike(slug));
    }
  };
  return (
    <div className="w-full py-6 flex justify-between border-b-2">
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-between w-44 xl:w-full lg:w-full md:w-full sm:w-full">
          <a href="/" className="flex w-24">
            <img src={avatar} width={25} height={20} className="rounded-full" alt="avatar" />
            <p className="ml-2">{author}</p>
          </a>
          <button
            className="flex w-[65px] justify-between items-center px-1 bg-emerald-100 text-center rounded-full border-black"
            onClick={onLikeButtonClick}
          >
            <img className="h-4" src={favorited ? like : dislike} alt="favourite" />
            <p className="text-xs xl:text-base lg:text-base md:text-base sm:text-base">
              {favoritesCount}
            </p>
          </button>
        </div>
        <NavLink to={`/posts/${slug}`}>
          <h2 className="text-base font-bold pt-2 xl:text-xl lg:text-xl md:text-xl sm:text-base">
            {title}
          </h2>
        </NavLink>
        <h3 className="text-sm font-normal text-zinc-400 xl:text-base lg:text-base md:text-base sm:text-xs">
          {description}
        </h3>
        <div className="pt-2 flex justify-between items-start text-xs text-zinc-400">
          <div className="w-full flex">
            <span>{correctDate}</span>
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
          <a href="/">
            <img src={add} className="fill-white w-5 xl:w-6 lg:w-6 md:w-6 sm:w-6" alt="favourite" />
          </a>
        </div>
      </div>
      <a href="/">
        <img src={lens} alt="post-cover" className="w-24 xl:w-44 lg:w-44 md:w-44 sm:w-40" />
      </a>
    </div>
  );
}
