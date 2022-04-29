import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import add from 'image/add.svg';
import lens from 'image/lens.webp';
import { Topic } from '../Topic';

export interface IPublication {
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  tagList: string[];
}

export function Publication({ description, title, createdAt, tagList, slug }: IPublication) {
  const correctDate = format(new Date(createdAt), 'MMMd');
  return (
    <div className="w-full py-6 flex justify-between border-b-[1px]">
      <div className="w-full flex flex-col justify-between">
        <span className="text-zinc-500">{correctDate}</span>
        <div className="w-full flex justify-between">
          <div className="w-2/3 flex flex-col">
            <Link to={`/posts/${slug}`}>
              <h2 className="text-base font-bold pt-2 xl:text-xl lg:text-xl md:text-xl sm:text-base">
                {title}
              </h2>
            </Link>
            <h3 className="text-sm font-normal text-zinc-400 hidden xl:block xl:line-clamp-3 lg:block lg:line-clamp-3 md:text-base md:block md:line-clamp-3 sm:text-xs sm:hidden">
              {description}
            </h3>
          </div>
          <a href="/">
            <img src={lens} alt="post-cover" className="w-20 xl:w-44 lg:w-44 md:w-44 sm:w-40" />
          </a>
        </div>
        <div className="pt-2 w-2/3 flex justify-between items-start text-xs text-black">
          <div className="w-full flex">
            <div className="w-full flex flex-wrap">
              {tagList.map((tag) => {
                return <Topic key={nanoid()} topic={tag} />;
              })}
            </div>
          </div>
          <a href="/">
            <img src={add} className="fill-white w-5 xl:w-6 lg:w-6 md:w-6 sm:w-6" alt="favourite" />
          </a>
        </div>
      </div>
    </div>
  );
}
