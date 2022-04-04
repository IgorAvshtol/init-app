import { IArticle } from '../interfaces/interfaces';

export function filterArticles(articles: IArticle[] | null, slug: string | undefined) {
  if (articles && slug) return articles.filter((article) => article.slug === slug);
}
