import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Description } from './Description';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Header } from './Header';
import { getCurrentArticle } from 'store/articles/articlesThunk';

export function CurrentArticleContent() {
  const { slug } = useParams<string>();
  const dispatch = useAppDispatch();
  const { currentArticle } = useAppSelector((state) => state.articles);

  useEffect(() => {
    slug && dispatch(getCurrentArticle(slug));
  }, [dispatch, slug]);

  return (
    <>
      {currentArticle && (
        <div className=" w-3/4 m-auto flex-col">
          <Header
            slug={currentArticle.slug}
            author={currentArticle.author.username}
            avatar={currentArticle.author.image}
            createdAt={currentArticle.createdAt}
            tagList={currentArticle.tagList}
            favoritesCount={currentArticle.favoritesCount}
            favorited={currentArticle.favorited}
          />
          <Description
            title={currentArticle.title}
            description={currentArticle.description}
            body={currentArticle.body}
          />
        </div>
      )}
    </>
  );
}
