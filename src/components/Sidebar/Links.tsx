interface ILinks {
  link: string;
}

export function Links({ link }: ILinks) {
  return (
    <a href="/">
      <p className="text-sm pr-6 font-normal text-zinc-400">{link}</p>
    </a>
  );
}
