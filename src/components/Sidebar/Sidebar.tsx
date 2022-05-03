import { nanoid } from 'nanoid';

import spinner from 'image/spinner.gif';
import { Tag } from './Tag';
import { Link } from './Link';
import { TypeLoadingStatus } from 'interfaces';
import { useAppSelector } from 'store/store';

export const links = [
  { name: 'Help' },
  { name: 'Status' },
  { name: 'Writers' },
  { name: 'Blog' },
  { name: 'Careers' },
  { name: 'Privacy' },
  { name: 'Terms' },
  { name: 'About' },
  { name: 'Knowable' },
];

export function Sidebar() {
  const { tags, loading, error } = useAppSelector((state) => state.tags);
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
        {loading === TypeLoadingStatus.IS_REJECTED ? (
          <div className="w-full flex justify-center items-center">
            <p className="text-sm">Sorry, tag field is not available now!</p>
          </div>
        ) : error && loading === TypeLoadingStatus.IS_PENDING ? (
          <div className="w-full h-full flex justify-center items-center">
            <img src={spinner} width={20} height={20} alt="spinner" />
          </div>
        ) : (
          loading === TypeLoadingStatus.IS_RESOLVED &&
          tags?.map((tag) => <Tag key={nanoid()} tag={tag} />)
        )}
        <hr className="w-full mt-2 mb-2" />
        <div className="lg:flex lg:flex-wrap md:hidden sm:hidden hidden">
          {links.map((link) => (
            <Link key={link.name} link={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
