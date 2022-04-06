import { useParams } from 'react-router-dom';

import close from '../../image/close.png';

import { IComments } from '../../interfaces/interfaces';
import { useFetch } from '../../hooks/useFetch';
import { Comment } from './Comment';

interface ICommentsProps {
  setIsOpen: (value: boolean) => void;
}

export function Comments({ setIsOpen }: ICommentsProps) {
  const { slug } = useParams<string>();
  const { data } = useFetch<IComments>(`/articles/${slug}/comments`);
  const comments = data?.comments;
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
            placeholder="What are your thoughts?"
            className="my-2 py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 shadow-gray-100"
          />
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
