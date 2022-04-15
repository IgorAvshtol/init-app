import { formatDistance } from 'date-fns';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

import { IAuthor } from 'interfaces';
import { EditMenu } from './EditMenu';
import { useAuth } from 'hooks/useProvideAuth';

interface ICommentProps {
  createdAt: string;
  body: string;
  author: IAuthor;
  id: number;
  deleteComment: (url: string) => Promise<AxiosResponse | string>;
}

export function Comment({ author, createdAt, body, id }: ICommentProps) {
  const { user } = useAuth();
  const currentUser = user?.user.username;
  const [editMenuIsShow, setEditMenuIsShow] = useState<boolean>(false);
  const correctDate = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });
  const onEditButtonHandler = () => {
    setEditMenuIsShow(true);
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
        {currentUser === author.username && (
          <>
            <button className="font-normal" onClick={onEditButtonHandler}>
              ···
            </button>
            {editMenuIsShow && <EditMenu id={id} setEditMenuIsOpen={setEditMenuIsShow} />}
          </>
        )}
      </div>
      <div className="my-2 text-sm">{body}</div>
      <hr className="mt-9 w-full" />
    </div>
  );
}
