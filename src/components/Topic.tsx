import { nanoid } from 'nanoid';

interface ITag {
  topic: string;
}

export function Topic({ topic }: ITag) {
  return (
    <a
      href="/"
      key={nanoid()}
      className="mb-1 mr-1 px-2 bg-zinc-200 text-center rounded-full border-black flex justify-center"
    >
      {topic}
    </a>
  );
}
