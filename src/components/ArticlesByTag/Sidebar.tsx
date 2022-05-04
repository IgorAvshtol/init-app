import { useAppSelector } from 'store/store';
import { Link } from '../Sidebar/Link';
import { Tags } from '../Tags/Tags';

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
  const { selectedTag } = useAppSelector((state) => state.tags);
  return (
    <div className="w-full flex flex-col xl:right-[5%] xl:w-1/5 lg:h-screen lg:pb-12 lg:pt-4 lg:right-[2%] lg:w-1/5 lg:fixed md:w-full md:static sm:w-full sm:static">
      <div className="w-full h-full flex-wrap justify-between lg:flex lg:flex-col md:flex sm:flex">
        <div className="hidden lg:flex lg:flex-col lg:items-start">
          <span className="text-xl font-bold">{selectedTag.length}</span>
          <span>Stories</span>
          <hr className="mt-4 w-full" />
          <div className="mt-4">
            <p className="font-medium">Related Topics</p>
            <Tags />
          </div>
        </div>
        <div className="w-full lg:flex lg:flex-wrap md:hidden sm:hidden hidden">
          {links.map((link) => (
            <Link key={link.name} link={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
