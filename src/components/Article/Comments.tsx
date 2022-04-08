import { useParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

import close from '../../image/close.png';

import { IComments, ISendComments } from '../../interfaces/interfaces';
import { useFetch } from '../../hooks/useFetch';
import { Comment } from './Comment';

interface ICommentsProps {
  setIsOpen: (value: boolean) => void;
}

export function Comments({ setIsOpen }: ICommentsProps) {
  const { slug } = useParams<string>();
  const { data, sendData, error } = useFetch<IComments>(`/articles/${slug}/comments`);
  const comments = data?.comments;
  const [commentText, setCommentText] = useState<string>('');
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.currentTarget.value);
  };
  const onClickSendButton = async () => {
    await sendData<ISendComments>({ comment: { body: commentText } });
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
        className="fixed w-full min-h-screen blur-none top-0 bg-emerald-50 shadow-lg my-12 rounded-3xl xl:w-1/5 xl:border-l-2 xl:right-0 lg:w-1/5 lg:border-l-2 lg:right-0 md:my-12 md:w-full md:rounded-3xl sm:my-12 sm:w-full sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto my-0 w-11/12 h-11/12 mt-2 flex-col">
          <div className="w-full flex justify-between items-center">
            <p className="font-bold text-lg">Comments({comments?.length}):</p>
            <button onClick={closeComments}>
              <img src={close} className="pr-2 w-6 m-3" alt="close" />
            </button>
          </div>
          <input
            value={commentText}
            onChange={onChangeInputHandler}
            placeholder="What are your thoughts?"
            className="my-2 py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 shadow-gray-100"
          />
          {error && <p className="text-red-600 w-full text-center">{error}</p>}
          <div className="w-full flex justify-center">
            <button
              onClick={onClickSendButton}
              className="w-20 h-8 text-black bg-emerald-600 hover:bg-emerald-300 font-medium rounded-full text-sm mr-2 mb-2"
            >
              send
            </button>
          </div>
          {comments?.map((comment) => {
            return (
              <Comment
                key={comment.id}
                author={comment.author}
                body={comment.body}
                createdAt={comment.createdAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
