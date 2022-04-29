import React from 'react';

import { Posts } from './Posts';
import { MyPublications } from './MyPublications';
import { Tabs } from '../Tabs/Tabs';
import { ITabs } from 'interfaces';

const tabs: ITabs[] = [
  {
    label: 'All',
    index: 1,
    Component: Posts,
  },
  {
    label: 'My publications',
    index: 2,
    Component: MyPublications,
  },
];

export function PostsContainer() {
  return (
    <div className="w-full flex flex-col items-center justify-between xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
      <Tabs tabs={tabs} />
    </div>
  );
}
