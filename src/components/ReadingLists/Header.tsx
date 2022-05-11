import { format } from 'date-fns';

import lens from 'image/lens.webp';
import { useAppSelector } from 'store/store';

export function Header() {
  const { user } = useAppSelector((state) => state.auth);
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const correctDate = format(new Date(), 'MMMd');

  return (
    <div className="w-full flex">
      <img src={user?.image || lens} className="w-12 rounded-full" alt="avatar" />
      <div className="ml-2 flex flex-col justify-between">
        <p className="font-medium text-base">{user?.username}</p>
        <div className="block text-zinc-400">
          <span className="text-sm">{correctDate}</span>
          <span className="pl-1">·</span>
          <span className="pl-1 text-sm">{favoriteArticles.articlesCount} stories</span>
        </div>
      </div>
    </div>
  );
}
