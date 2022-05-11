import { useAppSelector } from 'store/store';
import { Tags } from '../Tags/Tags';
import { Links } from '../Links/Links';

export function Sidebar() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div
      className={
        !user
          ? 'static w-full flex flex-col xl:w-1/5 xl:sticky xl:top-[55px] xl:mt-6 lg:w-1/5 lg:sticky lg:h-full lg:top-[55px] lg:mt-6 md:w-full md:static sm:w-full sm:static'
          : 'xl:right-[5%] lg:right-[2%] xl:w-1/5 lg:w-1/5 lg:fixed md:w-full md:static md:mt-6 sm:mt-4 sm:w-full sm:static w-full flex flex-col'
      }
    >
      <p className="text-xs font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="w-full pt-4 flex flex-wrap justify-start">
        <Tags />
        <hr className={user ? 'w-full mt-2 mb-2 xl:w-5/6' : 'w-full mt-2 mb-2'} />
        <div className="lg:flex lg:flex-wrap md:hidden sm:hidden hidden">
          <Links />
        </div>
      </div>
    </div>
  );
}
