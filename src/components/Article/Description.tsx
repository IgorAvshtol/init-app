import lens from '../../image/lens.webp';

interface IArticleDescription {
  title: string;
  description: string;
  body: string;
}

export function Description({ title, description, body }: IArticleDescription) {
  return (
    <div className="mt-4 w-full flex-col">
      <p className="text-4xl">{title}</p>
      <p className="text-xl">{description}</p>
      <img src={lens} className="w-full pt-10" alt="image" />
      <p className="text-lg pt-10">{body}</p>
    </div>
  );
}
