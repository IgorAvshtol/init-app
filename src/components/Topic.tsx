import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

interface ITag {
  topic: string;
}

export function Topic({ topic }: ITag) {
  return (
    <Link
      to="/"
      key={nanoid()}
      className="mb-1 mx-1 px-2 bg-zinc-200 text-center rounded-full border-black flex justify-center"
    >
      {topic}
    </Link>
  );
}
