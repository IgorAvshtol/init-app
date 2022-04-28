import { useAppSelector } from 'store/store';
import { Link } from '../Sidebar/Link';

export const links = [
  { id: 1, name: 'Help' },
  { id: 2, name: 'Status' },
  { id: 3, name: 'Writers' },
  { id: 4, name: 'Blog' },
  { id: 5, name: 'Careers' },
  { id: 6, name: 'Privacy' },
  { id: 7, name: 'Terms' },
  { id: 8, name: 'About' },
  { id: 9, name: 'Knowable' },
];

export function Sidebar() {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="w-full flex flex-col xl:right-[5%] xl:w-1/5 lg:h-screen lg:pb-12 lg:pt-4 lg:right-[2%] lg:w-1/5 lg:fixed md:w-full md:static sm:w-full sm:static">
      <div className="w-full h-full flex-wrap justify-between lg:flex lg:flex-col md:flex sm:flex">
        <div className="hidden lg:flex lg:flex-col lg:items-start">
          <img src={user?.image} className="w-12 rounded-full lg:w-1/4" alt="avatar" />
          <div className="ml-2 flex flex-col justify-between lg:block">
            <p className="font-medium text-base lg:pt-4">{user?.username}</p>
            <button className="hidden lg:block lg:font-normal lg:text-sm lg:text-emerald-500 lg:pt-4">
              Edit profile
            </button>
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap md:hidden sm:hidden hidden">
          {links.map((link) => (
            <Link key={link.id} link={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
