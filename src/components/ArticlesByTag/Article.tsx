import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { formatDistance } from 'date-fns';

import add from 'image/add.svg';
import lens from 'image/lens.webp';
import { Header } from './Header';
import { Topic } from '../Topic';

export interface IList {
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

export function Article(props: IList) {
  const { author, avatar, description, title, createdAt, tagList, slug } = props;
  const correctDate = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="w-full flex flex-col">
      <div className="w-full py-6 flex justify-between border-b-[1px]">
        <div className="w-2/3 flex flex-col justify-between">
          <Header avatar={avatar} author={author} correctDate={correctDate} />
          <Link to={`/posts/${slug}`}>
            <h2 className="text-base font-bold pt-2 md:text-xl sm:text-base">{title}</h2>
          </Link>
          <h3 className="text-sm font-normal text-zinc-400 hidden xl:block xl:line-clamp-3 lg:block lg:line-clamp-3 md:text-base md:block md:line-clamp-3 sm:text-xs sm:hidden">
            {description}
          </h3>
          <div className="pt-2 flex justify-between items-start text-xs text-zinc-400">
            <div className="w-full flex flex-wrap">
              {tagList.map((tag) => (
                <Topic key={nanoid()} topic={tag} />
              ))}
            </div>
            <div>
              <img
                src={add}
                className="fill-white w-5 xl:w-6 lg:w-6 md:w-6 sm:w-6"
                alt="favourite"
              />
            </div>
          </div>
        </div>
        <Link to={`/posts/${slug}`}>
          <img src={lens} alt="post-cover" className="w-24 sm:w-32" />
        </Link>
      </div>
    </div>
  );
}
