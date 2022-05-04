import { Link } from '../Sidebar/Link';
import message from 'image/message.png';

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

interface ISidebar {
  image: string;
  username: string;
  bio: string;
}

export function Sidebar({ image, username, bio }: ISidebar) {
  return (
    <div className="w-full flex flex-col xl:right-[5%] xl:w-1/5 lg:h-screen lg:pb-12 lg:pt-4 lg:right-[2%] lg:w-1/5 lg:fixed md:w-full md:static sm:w-full sm:static">
      <div className="w-full h-full flex-wrap justify-between lg:flex lg:flex-col md:flex sm:flex">
        <div className="w-full flex flex-col lg:flex lg:flex-col lg:items-start">
          <div className="flex lg:flex lg:flex-col">
            <img src={image} className="w-16 rounded-full lg:w-28 md:w-16 sm:w-16" alt="avatar" />
            <div className="ml-2 flex flex-col justify-between lg:block lg:ml-0">
              <p className="font-bold text-lg lg:font-medium lg:text-base lg:pt-4">{username}</p>
              {bio && <p className="lg:text-base lg:py-2">{bio}</p>}
            </div>
          </div>
          <div className="pt-1 w-full flex">
            <button className="w-full h-8 text-black font-light bg-emerald-500 hover:bg-emerald-800 font-medium rounded-full text-sm mr-2 mb-2 lg:w-20">
              Follow
            </button>
            <button className="h-8 bg-emerald-500 hover:bg-emerald-800 rounded-full mr-2 p-2 flex justify-center items-center">
              <img src={message} alt="message" className="w-4" />
            </button>
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap md:hidden sm:hidden hidden">
          {links.map((link) => (
            <Link key={link.name} link={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
