import { useParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

import close from 'image/close.png';

import { IComment, ISendComment } from 'interfaces';
import { Comment } from './Comment';
import { TextField } from './TextField';
import { useAuth } from 'hooks/useProvideAuth';
import { useComments } from 'hooks/useComments';

interface ICommentsProps {
  setIsOpen: (value: boolean) => void;
}

export function Comments({ setIsOpen }: ICommentsProps) {
  const { user } = useAuth();
  const { slug } = useParams<string>();
  const { data, isError, sendComment, deleteComment } = useComments<IComment[]>(
    `/articles/${slug}/comments`
  );
  const [commentText, setCommentText] = useState<string>('');

  const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.currentTarget.value);
  };
  const onClickSendButton = async () => {
    await sendComment<ISendComment>(`/articles/${slug}/comments`, {
      comment: { body: commentText },
    });
    setCommentText('');
  };
  const closeComments = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="fixed w-full h-full backdrop-brightness-90 left-0 top-0 overflow-scroll"
      onClick={closeComments}
    >
      <div
        className="fixed w-full min-h-screen blur-none top-0 bg-emerald-50 shadow-lg my-12 rounded-3xl xl:w-96 xl:border-l-2 xl:right-0 lg:w-96 lg:border-l-2 lg:right-0 md:my-12 md:w-full md:rounded-3xl sm:my-12 sm:w-full sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto my-0 w-11/12 h-11/12 mt-2 flex-col">
          <div className="w-full flex justify-between items-center">
            <p className="font-bold text-lg">Comments({data?.length}):</p>
            <button onClick={closeComments}>
              <img src={close} className="pr-2 w-6 m-3" alt="close" />
            </button>
          </div>
          {user && (
            <TextField
              onClickSendButton={onClickSendButton}
              error={isError}
              commentText={commentText}
              onChangeInputHandler={onChangeInputHandler}
              avatar={user.user.image}
              user={user.user.username}
            />
          )}
          {data?.map((comment) => {
            return (
              <Comment
                key={comment.id}
                author={comment.author}
                body={comment.body}
                createdAt={comment.createdAt}
                id={comment.id}
                deleteComment={deleteComment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
