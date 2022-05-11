import { Link } from 'react-router-dom';

interface IHeader {
  avatar: string;
  slug: string;
  author: string;
  correctDate: string;
}

export function Header({ avatar, author, correctDate, slug }: IHeader) {
  return (
    <div className="flex justify-between w-44 sm:w-full">
      <Link to={`/posts/${slug}`} className="flex w-24">
        <img src={avatar} width={25} height={20} className="rounded-full" alt="avatar" />
        <p className="ml-2">{author}</p>
        <div className="text-zinc-400">
          <span className="px-1">·</span>
          <span>{correctDate}</span>
        </div>
      </Link>
    </div>
  );
}
