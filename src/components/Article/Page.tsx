import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { IArticle } from '../../interfaces';
import { Header } from './Header';
import { Description } from './Description';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Comments } from './Comments';
import { useArticles } from '../../hooks/useArticles';

export function Page() {
  const { slug } = useParams<string>();
  const { data } = useArticles<IArticle>(`/articles/${slug}`, 'article');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="flex flex-1">
      <div className="w-full m-auto flex xl:w-3/4 lg:4/5 md:w-full sm:w-full">
        <Navbar setIsOpen={setIsOpen} />
        <div className="w-full border-0 xl:w-4/5 xl:border-x-2 lg:w-4/5 lg:border-x-2">
          <div className="mt-16 xl:mt-24 lg:mt-24 md:mt-16 sm:mt-16">
            {data && (
              <div className="w-3/4 m-auto flex-col">
                <Header
                  author={data.author.username}
                  avatar={data.author.image}
                  createdAt={data.createdAt}
                  tagList={data.tagList}
                  favoritesCount={data.favoritesCount}
                />
                <Description title={data.title} description={data.description} body={data.body} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden mt-24 xl:w-1/5 xl:block lg:w-1/5 lg:block">
          {data && <Sidebar author={data.author.username} avatar={data.author.image} />}
        </div>
      </div>
      {isOpen && <Comments setIsOpen={setIsOpen} />}
    </article>
  );
}
