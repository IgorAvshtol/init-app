import { Image } from './Image';

interface IArticleDescription {
  title: string;
  description: string;
  body: string;
}

export function ArticleDescription({ title, description, body }: IArticleDescription) {
  return (
    <div className="mt-4 w-full flex-col">
      <p className="text-4xl">{title}</p>
      <p className="text-xl">{description}</p>
      <Image />
      <p className="text-lg pt-10">{body}</p>
    </div>
  );
}
