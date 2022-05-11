import React from 'react';

import { Tabs } from '../Tabs/Tabs';
import { ITabs, TypeLoadingStatus } from 'interfaces';
import { useAppSelector } from 'store/store';
import notFound from 'image/404-not-found.png';
import spinner from 'image/spinner.gif';
import { MyPosts } from './MyPosts';
import { Posts } from './Posts';

const tabs: ITabs[] = [
  {
    label: 'All',
    index: 1,
  },
  {
    label: 'My publications',
    index: 2,
  },
];

export function PostsContainer() {
  const { loading } = useAppSelector((state) => state.articles);
  const { selectedTab } = useAppSelector((state) => state.tabs);

  return (
    <div className="w-full flex flex-col items-center xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
      <Tabs tabs={tabs} selectedTab={selectedTab} />
      {loading === TypeLoadingStatus.IS_REJECTED && (
        <div className="w-full h-full flex justify-center items-center">
          <img src={notFound} alt="not-found" />
        </div>
      )}
      {loading === TypeLoadingStatus.IS_PENDING && (
        <div className="w-full h-full flex justify-center items-center">
          <img src={spinner} width={100} alt="spinner" />
        </div>
      )}
      {loading === TypeLoadingStatus.IS_RESOLVED && selectedTab === 1 && <Posts />}
      {loading === TypeLoadingStatus.IS_RESOLVED && selectedTab === 2 && <MyPosts />}
    </div>
  );
}
