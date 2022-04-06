import { IAuthor } from '../../interfaces/interfaces';
import { dateUtils } from '../../utils/dateUtils';

interface ICommentProps {
  createdAt: string;
  body: string;
  author: IAuthor;
}

export function Comment({ author, createdAt, body }: ICommentProps) {
  return (
    <div className="flex-col relative">
      <div className="flex">
        <img src={author.image} className="w-12 rounded-full" alt="avatar" />
        <div className="pl-2">
          <p className="font-medium text-lg">{author.username}</p>
          <p className="text-sm text-zinc-400">{dateUtils(createdAt, 'comment')}</p>
        </div>
      </div>
      <div className="my-2 text-sm">{body}</div>
    </div>
  );
}
