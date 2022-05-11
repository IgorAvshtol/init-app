import { Link } from './Link';

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

export function Links() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} link={link.name} />
      ))}
    </>
  );
}
