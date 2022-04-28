interface IHeader {
  avatar: string;
  author: string;
  correctDate: string;
}

export function Header({ avatar, author, correctDate }: IHeader) {
  return (
    <div className="flex justify-between w-44 sm:w-full">
      <a href="/home/iavshtol/web/init-app/public" className="flex w-16">
        <img src={avatar} width={25} height={20} className="rounded-full" alt="avatar" />
        <p className="ml-2">{author}</p>
        <div className="text-zinc-400">
          <span className="px-1">·</span>
          <span>{correctDate}</span>
        </div>
      </a>
    </div>
  );
}
