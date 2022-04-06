import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { ICurrentArticle } from '../../interfaces/interfaces';
import { Header } from './Header';
import { Description } from './Description';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Comments } from './Comments';

export function Page() {
  const { slug } = useParams<string>();
  const { data } = useFetch<ICurrentArticle>(`/articles/${slug}`);
  const article = data?.article;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="flex flex-1">
      <div className="w-full m-auto flex xl:w-3/4 lg:4/5 md:w-full sm:w-full">
        <div>
          <Navbar setIsOpen={setIsOpen} />
        </div>
        <div className="w-full border-0 xl:w-4/5 xl:border-x-2 lg:w-4/5 lg:border-x-2">
          <div className="mt-16 xl:mt-24 lg:mt-24 md:mt-16 sm:mt-16">
            {article && (
              <div className="w-3/4 m-auto flex-col">
                <Header
                  author={article.author.username}
                  avatar={article.author.image}
                  createdAt={article.createdAt}
                  tagList={article.tagList}
                  favoritesCount={article.favoritesCount}
                />
                <Description
                  title={article.title}
                  description={article.description}
                  body={article.body}
                />
              </div>
            )}
          </div>
        </div>
        <div className="hidden mt-24 xl:w-1/5 xl:block lg:w-1/5 lg:block">
          {article && <Sidebar author={article.author.username} avatar={article.author.image} />}
        </div>
      </div>
      {isOpen && <Comments setIsOpen={setIsOpen} />}
    </article>
  );
}
