interface ILink {
  link: string;
}

export function Link({ link }: ILink) {
  return (
    <a href="/home/iavshtol/web/init-app/public">
      <p className="text-sm pr-6 font-normal text-zinc-400">{link}</p>
    </a>
  );
}
