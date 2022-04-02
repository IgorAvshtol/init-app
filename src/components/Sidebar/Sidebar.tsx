import spinner from '../../image/spinner.gif';

import { Tags } from './Tags';
import { Links } from './Links';
import { useFetch } from '../hooks/useFetch';

const links = [
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
  const { tags, loading } = useFetch();
  return (
    <div className="w-1/3 h-72 flex flex-col fixed right-[12%]">
      <p className="text-xs font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="h-24 pt-4 pl-2 flex flex-wrap justify-start">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <img src={spinner} width={20} height={20} alt="spinner" />
          </div>
        ) : (
          tags?.map((tag, index) => <Tags key={index} tag={tag} />)
        )}
      </div>
      <hr className="ml-2" />
      <div className="mt-4 flex flex-wrap justify-start">
        {links.map((link) => (
          <Links key={link.id} link={link.name} />
        ))}
      </div>
    </div>
  );
}
