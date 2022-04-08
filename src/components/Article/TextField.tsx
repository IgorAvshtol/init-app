import React, { ChangeEvent } from 'react';

interface ITextField {
  avatar: string;
  user: string;
  commentText: string;
  error: string;
  onChangeInputHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSendButton: () => void;
}

export function TextField({
  user,
  avatar,
  onChangeInputHandler,
  commentText,
  error,
  onClickSendButton,
}: ITextField) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = '10px';
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };
  return (
    <div className="w-full min-h-[52px] my-2 py-3 px-4 w-full rounded shadow font-thin">
      <div className="h-12 flex item-center">
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <p className="pl-2">{user}</p>
      </div>
      <textarea
        value={commentText}
        onChange={onChangeInputHandler}
        onKeyDown={handleKeyDown}
        placeholder="What are your thoughts?"
        className="w-full resize-none bg-inherit my-2 py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 shadow-gray-100"
      />
      {error && <p className="text-red-600 w-full text-center">{error}</p>}
      <div className="w-full flex justify-end">
        <button
          className="w-20 h-8 text-white bg-emerald-600 hover:bg-emerald-300 font-medium rounded-full text-sm mr-2 mb-2"
          onClick={onClickSendButton}
        >
          Respond
        </button>
      </div>
    </div>
  );
}
