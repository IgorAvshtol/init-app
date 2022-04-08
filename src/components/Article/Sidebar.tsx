import { Link } from '../Sidebar/Link';
import { links } from '../Sidebar/Sidebar';

interface IArticleSidebar {
  avatar: string;
  author: string;
}

export function Sidebar({ avatar, author }: IArticleSidebar) {
  return (
    <div className="sticky top-24 ml-2 flex-col xl:w-full lg:w-4/5 -z-10">
      <img src={avatar} className="w-1/3 h-1/3 rounded-full" alt="avatar" />
      <p className="pt-2 font-bold text-lg">{author}</p>
      <div className="pt-1 w-full flex">
        <button className="w-20 h-8 text-white bg-emerald-600 hover:bg-blue-800 font-medium rounded-full text-sm mr-2 mb-2">
          Follow
        </button>
      </div>
      <hr className="my-2" />
      <div className="w-full flex flex-wrap">
        {links.map((link) => {
          return <Link key={link.id} link={link.name} />;
        })}
      </div>
    </div>
  );
}
