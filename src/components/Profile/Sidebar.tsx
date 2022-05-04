import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/store';
import { Link } from '../Sidebar/Link';
import { getUserProfile } from 'store/profile/profileThunk';

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
  const dispatch = useAppDispatch();
  const { username } = useParams();
  const correctUsername = username?.split('').slice(1, username?.length).join('');
  const { profile } = useAppSelector((state) => state.profile);
  useEffect(() => {
    correctUsername && dispatch(getUserProfile(correctUsername));
  }, [dispatch, correctUsername]);
  return (
    <div className="w-full flex flex-col xl:right-[5%] xl:w-1/5 lg:h-screen lg:pb-12 lg:pt-4 lg:right-[2%] lg:w-1/5 lg:fixed md:w-full md:static sm:w-full sm:static">
      <div className="w-full h-full flex-wrap justify-between lg:flex lg:flex-col md:flex sm:flex">
        <div className="flex lg:flex lg:flex-col lg:items-start">
          <img
            src={profile?.image}
            className="w-20 rounded-full lg:w-1/4 md:w-24 sm:w-20"
            alt="avatar"
          />
          <div className="ml-2 flex flex-col justify-between lg:block">
            <p className="font-bold text-lg lg:font-medium lg:text-base md:pt-4">
              {profile?.username}
            </p>
            {profile?.bio && <p className="font-medium lg:text-base pt-4">{profile.bio}</p>}
            <div className="pt-1 w-full flex">
              <button className="w-20 h-8 text-white font-light bg-black hover:bg-blue-800 font-medium rounded-full text-sm mr-2 mb-2">
                Follow
              </button>
            </div>
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
