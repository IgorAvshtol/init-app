import { Link } from 'react-router-dom';

interface IHeader {
  avatar: string;
  author: string;
  correctDate: string;
}

export function Header({ avatar, author, correctDate }: IHeader) {
  return (
    <div className="flex justify-between sm:w-full">
      <Link to={`/profile/@${author}`} className="flex items-center">
        <img src={avatar} width={25} height={20} className="rounded-full" alt="avatar" />
        <span className="ml-2 text-sm">{author}</span>
        <div className="text-zinc-400">
          <span className="px-1">·</span>
          <span className="text-sm">{correctDate}</span>
        </div>
      </Link>
    </div>
  );
}
