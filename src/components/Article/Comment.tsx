import { formatDistance } from 'date-fns';

import { IAuthor } from 'interfaces';

interface ICommentProps {
  createdAt: string;
  body: string;
  author: IAuthor;
}

export function Comment({ author, createdAt, body }: ICommentProps) {
  const correctDate = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });
  return (
    <div className="mt-4 flex-col relative">
      <div className="flex">
        <img src={author.image} className="w-12 rounded-full" alt="avatar" />
        <div className="pl-2">
          <p className="font-medium text-lg">{author.username}</p>
          <p className="text-sm text-zinc-400">{correctDate}</p>
        </div>
      </div>
      <div className="my-2 text-sm">{body}</div>
      <hr className="mt-9 w-full" />
    </div>
  );
}
