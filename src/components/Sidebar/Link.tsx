interface ILink {
  link: string;
}

export function Link({ link }: ILink) {
  return (
    <a href="/">
      <p className="text-sm pr-6 font-normal text-zinc-400">{link}</p>
    </a>
  );
}
