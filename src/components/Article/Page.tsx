import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { IArticle } from '../../interfaces/interfaces';
import { filterArticles } from '../../utils/filterArticles';
import { Header } from './Header';
import { Description } from './Description';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export function Page() {
  const { data } = useFetch<IArticle[]>('/articles');
  const { slug } = useParams<string>();

  return (
    <article className="flex flex-1">
      <div className="w-3/4 m-auto flex">
        <div>
          <Navbar />
        </div>
        <div className="w-4/5 border-x-2">
          {filterArticles(data, slug)?.map((article) => {
            return (
              <div key={article.slug} className="mt-24">
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
              </div>
            );
          })}
        </div>
        <div className="w-1/5 mt-24">
          {filterArticles(data, slug)?.map((article) => {
            return (
              <Sidebar
                key={article.slug}
                author={article.author.username}
                avatar={article.author.image}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
