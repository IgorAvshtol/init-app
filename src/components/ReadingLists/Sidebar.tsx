import { useAppSelector } from 'store/store';
import { Links } from '../Links/Links';

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
          <Links />
        </div>
      </div>
    </div>
  );
}
