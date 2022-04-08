import { nanoid } from 'nanoid';

import spinner from '../../image/spinner.gif';

import { Tag } from './Tag';
import { Link } from './Link';
import { useFetch } from '../../hooks/useFetch';
import { ITags, TypeLoadingStatus } from '../../interfaces';

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
  const { data, loading, error } = useFetch<ITags>('/tags');
  const tags = data?.tags;
  return (
    <div className="xl:right-[10%] lg:right-[5%] xl:w-1/4 lg:w-1/4 lg:fixed md:w-full md:static md:mt-4 sm:mt-4 sm:w-full sm:static w-full flex flex-col">
      <p className="text-xs font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="h-24 w-full pt-4 flex flex-wrap justify-start">
        {error && loading === TypeLoadingStatus.IS_REJECTED ? (
          <div className="w-full flex justify-center items-center">
            <p className="text-sm">Sorry, tag field is not available now!</p>
          </div>
        ) : loading === TypeLoadingStatus.IS_PENDING ? (
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
            <Link key={link.id} link={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
