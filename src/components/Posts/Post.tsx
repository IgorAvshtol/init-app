import add from '../../image/add.svg';
import lens from '../../image/lens.webp';
import like from '../../image/like.png';

interface IPost {
  avatar: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  favoritesCount: number;
  tagList: string[];
}

export function Post(props: IPost) {
  const { author, avatar, description, title, createdAt, tagList, favoritesCount } = props;
  return (
    <div className="w-full pt-6 flex justify-between">
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-between w-44 xl:w-full lg:w-full md:w-full sm:w-full">
          <a href="/" className="flex w-24">
            <img src={avatar} width={25} height={20} className="rounded-full" alt="avatar" />
            <p className="ml-2">{author}</p>
          </a>
          <a
            href="/"
            className="flex w-[65px] justify-between items-center px-1 bg-emerald-100 text-center rounded-full border-black"
          >
            <img className="h-4" src={like} alt="favourite" />
            <p className="text-xs xl:text-base lg:text-base md:text-base sm:text-base">
              {favoritesCount}
            </p>
          </a>
        </div>
        <a href="/">
          <h2 className="text-base font-bold pt-2 xl:text-xl lg:text-xl md:text-xl sm:text-base">
            {title}
          </h2>
        </a>
        <h3 className="text-sm font-normal text-zinc-400 xl:text-base lg:text-base md:text-base sm:text-xs">
          {description}
        </h3>
        <div className="pt-2 flex justify-between items-start text-xs text-zinc-400">
          <div className="w-full flex">
            <span>{createdAt}</span>
            <span className="pl-1">·</span>
            <a href="/" className="w-full flex flex-wrap">
              {tagList.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="mb-1 ml-1 px-2 bg-zinc-200 text-center rounded-full border-black flex justify-center"
                  >
                    {tag}
                  </span>
                );
              })}
            </a>
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
