import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Tabs } from '../Tabs/Tabs';
import { ITabs } from 'interfaces';
import { Profile } from './Profile';
import { Navbar } from '../Article/Navbar';
import { Sidebar } from './Sidebar';
import { useAppDispatch, useAppSelector } from 'store/store';
import { getUserProfile } from 'store/profile/profileThunk';

const tabs: ITabs[] = [
  {
    label: 'Home',
    index: 1,
  },
];

export function ProfileContainer() {
  const dispatch = useAppDispatch();
  const { selectedTab } = useAppSelector((state) => state.tabs);
  const { username } = useParams();
  const correctUsername = username?.split('').slice(1, username?.length).join('');
  const { profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    correctUsername && dispatch(getUserProfile(correctUsername));
  }, [dispatch, correctUsername]);

  return (
    <article className="flex">
      <div className="w-5/6 m-auto flex xl:w-3/4 lg:4/5 md:w-5/6 sm:w-5/6">
        <Navbar />
        <div className="w-full min-h-screen mb-12 border-0 flex justify-center xl:w-3/4 xl:mt-0 xl:border-x-2 lg:w-3/4 lg:mb-0 lg:border-x-2">
          <div className="w-full pt-4 flex flex-col items-center md:flex md:flex-col sm:flex sm:flex-col">
            <Sidebar />
            <div className="w-full flex flex-col justify-between xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
              <span className="mb-4 text-4xl font-bold hidden lg:block">{profile.username}</span>
              <Tabs tabs={tabs} selectedTab={selectedTab} />
              {selectedTab === 1 && <Profile />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
