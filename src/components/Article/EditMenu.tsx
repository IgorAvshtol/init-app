import { useParams } from 'react-router-dom';
import { mutate } from 'swr';
import React, { useRef } from 'react';

import { useComments } from 'hooks/useComments';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

interface IEditMenu {
  id: number;
  setEditMenuIsOpen: (value: boolean) => void;
}

export function EditMenu({ id, setEditMenuIsOpen }: IEditMenu) {
  const ref = useRef<HTMLDivElement>(null);
  const { slug } = useParams<string>();
  const { deleteComment } = useComments();
  const onDeleteButtonHandler = async (id: number) => {
    await deleteComment(`/articles/${slug}/comments/${id}`);
    await mutate(`/articles/${slug}/comments`);
  };
  useOnClickOutside(ref, setEditMenuIsOpen);
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
