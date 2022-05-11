import React from 'react';
import { useParams } from 'react-router-dom';

import remove from 'image/delete.png';
import { useAppDispatch } from 'store/store';
import { deleteArticle } from 'store/articles/articlesThunk';

export function DeleteButton() {
  const dispatch = useAppDispatch();
  const { slug } = useParams<string>();

  const onDeleteButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    slug && dispatch(deleteArticle(slug));
  };

  return (
    <button className="mt-6 relative hover:after:content-['Delete_this_article'] after:w-24 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-12">
      <img
        src={remove}
        className="h-10"
        alt="delete-article"
        onClick={(e) => onDeleteButtonHandler(e)}
      />
    </button>
  );
}
