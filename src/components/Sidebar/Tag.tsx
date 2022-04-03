interface ITags {
  tag: string;
}

export function Tag({ tag }: ITags) {
  return (
    <a href="/" className="mt-1 mr-2 mb-1">
      <p className="text-center text-sm py-2 px-2 border border-zinc-400 text-zinc-400 w-full">
        {tag}
      </p>
    </a>
  );
}
