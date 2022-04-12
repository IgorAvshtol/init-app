import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IArticle } from 'interfaces';
import { Header } from './Header';
import { Description } from './Description';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Comments } from './Comments';
import { useArticles } from 'hooks/useArticles';
import { Response } from './Response';

export function Page() {
  const { slug } = useParams<string>();
  const { data } = useArticles<IArticle>(`/articles/${slug}`, 'article');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="flex flex-1">
      <div className="w-full m-auto flex xl:w-3/4 lg:4/5 md:w-full sm:w-full">
        <Navbar />
        <div className="w-full relative min-h-screen border-0 xl:w-4/5 xl:mb-0 xl:border-x-2 lg:w-4/5 lg:mb-0 lg:border-x-2 md:mb-0 sm:mb-0">
          <div className="mt-6 mb-24 xl:mt-12 lg:mt-12 md:mt-6 sm:mt-6">
            {data && (
              <div className=" w-3/4 m-auto flex-col">
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
          <div className="sticky left-0 bottom-14 w-full flex justify-center xl:bottom-4 lg:bottom-4">
            <Response setIsOpen={setIsOpen} />
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
