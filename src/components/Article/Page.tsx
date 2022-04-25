import { useState } from 'react';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Comments } from './Comments';
import { Response } from './Response';
import { useAppSelector } from 'store/store';
import { CurrentArticleContent } from './CurrentArticleContent';

export function Page() {
  const { currentArticle } = useAppSelector((state) => state.articles);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="flex flex-1">
      <div className="w-full m-auto flex xl:w-3/4 lg:4/5 md:w-full sm:w-full">
        <Navbar />
        <div className="w-full relative min-h-screen border-0 xl:w-4/5 xl:mb-0 xl:border-x-2 lg:w-4/5 lg:mb-0 lg:border-x-2 md:mb-0 sm:mb-0">
          <div className="mt-6 mb-24 xl:mt-12 lg:mt-12 md:mt-6 sm:mt-6">
            <CurrentArticleContent />
          </div>
          <div className="sticky left-0 bottom-14 w-full flex justify-center xl:bottom-4 lg:bottom-4">
            <Response setIsOpen={setIsOpen} />
          </div>
        </div>
        <div className="hidden mt-24 xl:w-1/5 xl:block lg:w-1/5 lg:block">
          {currentArticle && (
            <Sidebar author={currentArticle.author.username} avatar={currentArticle.author.image} />
          )}
        </div>
      </div>
      {isOpen && <Comments setIsOpen={setIsOpen} />}
    </article>
  );
}
