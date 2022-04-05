import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { ICurrentArticle } from '../../interfaces/interfaces';
import { Header } from './Header';
import { Description } from './Description';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function Page() {
  const { slug } = useParams<string>();
  const { data } = useFetch<ICurrentArticle>('/articles', `${slug}`);
  const article = data?.article;

  return (
    <article className="flex flex-1">
      <div className="w-3/4 m-auto flex">
        <div>
          <Navbar />
        </div>
        <div className="w-4/5 border-x-2">
          <div className="mt-24">
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
        <div className="w-1/5 mt-24">
          {article && (
            <Sidebar
              key={article.slug}
              author={article.author.username}
              avatar={article.author.image}
            />
          )}
        </div>
      </div>
    </article>
  );
}
