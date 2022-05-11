import { useParams } from 'react-router-dom';
import React, { useRef } from 'react';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useAppDispatch } from 'store/store';
import { deleteComment } from 'store/comments/commentsThunk';

interface IEditMenu {
  id: number;
  setEditMenuIsOpen: (value: boolean) => void;
}

export function EditMenu({ id, setEditMenuIsOpen }: IEditMenu) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const { slug } = useParams<string>();

  const onDeleteButtonHandler = (id: number) => {
    slug && dispatch(deleteComment({ slug, id }));
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
