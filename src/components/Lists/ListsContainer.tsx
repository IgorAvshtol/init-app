import React from 'react';

import { List } from './List';
import { Tabs } from '../Tabs/Tabs';
import { ITabs } from 'interfaces';
import { useAppSelector } from 'store/store';

const tabs: ITabs[] = [
  {
    label: 'Saved',
    index: 1,
  },
];

export function ListsContainer() {
  const { selectedTab } = useAppSelector((state) => state.tabs);
  return (
    <div className="mt-5 w-full flex flex-col justify-start xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
      <p className="text-3xl font-bold lg:text-5xl md:text-4xl sm:text-3xl">Your list</p>
      <Tabs tabs={tabs} selectedTab={selectedTab} />
      {selectedTab === 1 && <List />}
    </div>
  );
}
