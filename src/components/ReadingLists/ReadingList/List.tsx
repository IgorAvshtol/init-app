import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';

import add from 'image/add.svg';
import lens from 'image/lens.webp';
import { Topic } from '../../Topic';
import { Header } from './Header';
import { NoteField } from '../NoteField';

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

export function List(props: IList) {
  const { author, avatar, description, title, createdAt, tagList, slug } = props;
  const correctDate = format(new Date(createdAt), 'MMMd,yyyy');
  return (
    <div className="w-full flex flex-col">
      <NoteField />
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
              {tagList.map((tag) => {
                return <Topic key={nanoid()} topic={tag} />;
              })}
            </div>
            <a href="/home/iavshtol/web/init-app/public">
              <img
                src={add}
                className="fill-white w-5 xl:w-6 lg:w-6 md:w-6 sm:w-6"
                alt="favourite"
              />
            </a>
          </div>
        </div>
        <a href="/home/iavshtol/web/init-app/public">
          <img src={lens} alt="post-cover" className="w-24 sm:w-32" />
        </a>
      </div>
    </div>
  );
}
