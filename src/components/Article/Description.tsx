import { Image } from './Image';

interface IArticleDescription {
  title: string;
  description: string;
  body: string;
}

export function Description({ title, description, body }: IArticleDescription) {
  return (
    <div className="mt-4 w-full flex-col">
      <p className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl">{title}</p>
      <p className="text-lg xl:text-xl lg:text-xl md:text-xl">{description}</p>
      <Image />
      <p className="text-lg pt-10">{body}</p>
    </div>
  );
}
