import { Tags } from './Tags';
import { Links } from './Links';

const tags = [
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Politics' },
  { id: 3, name: 'Health' },
  { id: 4, name: 'Javascript' },
  { id: 5, name: 'Belarus' },
  { id: 6, name: 'Itransitions' },
  { id: 7, name: 'Gym' },
  { id: 8, name: 'Hardcore' },
];

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
  return (
    <div className="w-1/3 flex flex-col">
      <p className="text-xs font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="h-24 pt-2 pl-2 flex flex-wrap justify-start">
        {tags.map((tag) => (
          <Tags key={tag.id} tag={tag.name} />
        ))}
      </div>
      <hr className="mt-10" />
      <div className="pt-4 flex flex-wrap justify-start">
        {links.map((link) => (
          <Links key={link.id} link={link.name} />
        ))}
      </div>
    </div>
  );
}
