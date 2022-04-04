import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { IArticle } from '../../interfaces/interfaces';
import { filterArticles } from '../../utils/filterArticles';
import { ArticleHeader } from './ArticleHeader';
import { ArticleDescription } from './ArticleDescription';
import { ArticleSidebar } from './ArticleSidebar';
import { ArticleNavbar } from './ArticleNavbar';

export function ArticlePage() {
  const { data } = useFetch<IArticle[]>('/articles');
  const { slug } = useParams<string>();

  return (
    <article className="flex flex-1">
      <div className="w-3/4 m-auto flex">
        <div>
          <ArticleNavbar />
        </div>
        <div className="w-4/5 border-x-2">
          {filterArticles(data, slug)?.map((article) => {
            return (
              <div key={article.slug} className="mt-24">
                <div className="w-3/4 m-auto flex-col">
                  <ArticleHeader
                    author={article.author.username}
                    avatar={article.author.image}
                    createdAt={article.createdAt}
                    tagList={article.tagList}
                    favoritesCount={article.favoritesCount}
                  />
                  <ArticleDescription
                    title={article.title}
                    description={article.description}
                    body={article.body}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/6 mt-24">
          {filterArticles(data, slug)?.map((article) => {
            return (
              <ArticleSidebar
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
