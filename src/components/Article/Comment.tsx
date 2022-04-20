import { formatDistance } from 'date-fns';
import { useState } from 'react';

import { IAuthor } from 'interfaces';
import { EditMenu } from './EditMenu';
import { useAppSelector } from 'store/store';

interface ICommentProps {
  createdAt: string;
  body: string;
  author: IAuthor;
  id: number;
}

export function Comment({ author, createdAt, body, id }: ICommentProps) {
  const { user } = useAppSelector((state) => state.auth);
  const [editMenuIsOpen, setEditMenuIsOpen] = useState<boolean>(false);
  const correctDate = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });
  const onEditButtonHandler = () => {
    setEditMenuIsOpen(true);
  };
  return (
    <div className="mt-4 flex-col relative">
      <div className="w-full flex justify-between">
        <div className="flex">
          <img src={author.image} className="w-12 rounded-full" alt="avatar" />
          <div className="pl-2">
            <p className="font-medium text-lg">{author.username}</p>
            <p className="text-sm text-zinc-400">{correctDate}</p>
          </div>
        </div>
        {user?.username === author?.username && (
          <>
            <button className="font-normal" onClick={onEditButtonHandler}>
              ···
            </button>
            {editMenuIsOpen && <EditMenu id={id} setEditMenuIsOpen={setEditMenuIsOpen} />}
          </>
        )}
      </div>
      <div className="my-2 text-sm">{body}</div>
      <hr className="mt-9 w-full" />
    </div>
  );
}
