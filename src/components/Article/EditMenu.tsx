import { useParams } from 'react-router-dom';
import { mutate } from 'swr';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useComments } from 'hooks/useComments';
import { IEditCommentData } from 'interfaces';

interface IEditMenu {
  id: number;
  setEditMenuIsShow: Dispatch<SetStateAction<IEditCommentData>>;
}

export function EditMenu({ id, setEditMenuIsShow }: IEditMenu) {
  const ref = useRef<HTMLDivElement>(null);
  const { slug } = useParams<string>();
  const { deleteComment } = useComments();
  const onDeleteButtonHandler = async (id: number) => {
    await deleteComment(`/articles/${slug}/comments/${id}`);
    await mutate(`/articles/${slug}/comments`);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setEditMenuIsShow((prevState) => ({ ...prevState, isEdit: false }));
      }
    };
    document.addEventListener('click', handleClickOutside, true);
  }, [setEditMenuIsShow]);
  return (
    <div
      className="absolute right-0 top-8 px-4 py-2 bg-emerald-50 rounded shadow-xl font-thin flex flex-col items-start text-zinc-400 text-sm"
      ref={ref}
    >
      <button className="hover:text-black">Edit</button>
      <button className="hover:text-black" onClick={() => onDeleteButtonHandler(id)}>
        Delete
      </button>
    </div>
  );
}
