interface ITags {
  tag: string;
}

export function Tags({ tag }: ITags) {
  return (
    <a href="/" className="mt-1 mr-2 mb-1">
      <p className="text-center text-sm py-3 px-4 border border-zinc-400 text-zinc-400 h-12 w-full">
        {tag}
      </p>
    </a>
  );
}
