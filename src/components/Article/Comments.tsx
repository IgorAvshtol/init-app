import { useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';

import { TypeLoadingStatus } from 'interfaces';
import { Comment } from './Comment';
import { TextField } from './TextField';
import { useAppDispatch, useAppSelector } from 'store/store';
import { createComment, getComments } from 'store/comments/commentsThunk';
import spinner from 'image/spinner.gif';
import close from 'image/close.png';

interface ICommentsProps {
  setIsOpen: (value: boolean) => void;
}

export function Comments({ setIsOpen }: ICommentsProps) {
  const { slug } = useParams<string>();
  const dispatch = useAppDispatch();
  const { comments, loading, error } = useAppSelector((state) => state.comments);
  const { user } = useAppSelector((state) => state.auth);
  const [commentText, setCommentText] = useState<string>('');
  const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.currentTarget.value);
  };
  const onClickSendButton = () => {
    dispatch(createComment({ slug, comment: commentText }));
    setCommentText('');
  };
  const closeComments = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    slug && dispatch(getComments(slug));
  }, [dispatch, slug]);

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
            <p className="font-bold text-lg">Comments({comments?.length}):</p>
            <button onClick={closeComments}>
              <img src={close} className="pr-2 w-6 m-3" alt="close" />
            </button>
          </div>
          {user && (
            <TextField
              onClickSendButton={onClickSendButton}
              error={error}
              commentText={commentText}
              onChangeInputHandler={onChangeInputHandler}
              avatar={user.image}
              user={user.username}
            />
          )}
          {loading === TypeLoadingStatus.IS_PENDING && (
            <div className="w-full h-full flex justify-center items-center">
              <img src={spinner} alt="spinner" className="w-16" />
            </div>
          )}
          {loading === TypeLoadingStatus.IS_RESOLVED &&
            comments?.map((comment) => (
              <Comment
                key={comment.id}
                author={comment.author}
                body={comment.body}
                createdAt={comment.createdAt}
                id={comment.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
