import add from '../../image/add.svg';
import lens from '../../image/lens.webp';

interface IPost {
  avatar: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  tagList: string[];
}

export function Post({ author, avatar, description, title, createdAt, tagList }: IPost) {
  return (
    <div className="w-full pt-6 flex justify-around">
      <div className="w-2/3 flex flex-col">
        <a href="/" className="flex">
          <img src={avatar} width={25} height={20} className="rounded-full" alt="avatar" />
          <p className="ml-2">{author}</p>
        </a>
        <a href="/">
          <h2 className="text-xl font-bold pt-2">{title}</h2>
        </a>
        <h3 className="text-base font-normal text-zinc-400">{description}</h3>
        <div className="flex justify-between items-center text-sm text-zinc-400">
          <div className="w-52 flex justify-between">
            <span>{createdAt}</span>
            <span>·</span>
            <span>3 min read</span>
            <span>·</span>
            <a href="/" className="w-20">
              {tagList.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="ml-1 px-2 bg-zinc-200 text-center rounded-full border-black"
                  >
                    {tag}
                  </span>
                );
              })}
            </a>
          </div>
          <a href="/">
            <img src={add} height={25} width={25} className="fill-white" alt="favourite" />
          </a>
        </div>
      </div>
      <a href="/">
        <img src={lens} width={200} height={134} alt="post-cover" />
      </a>
    </div>
  );
}
