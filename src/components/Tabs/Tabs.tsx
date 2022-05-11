import React from 'react';

import { useAppDispatch } from 'store/store';
import { changeTab } from 'store/tabs/tabsSlice';

interface ITabs {
  selectedTab: number;
  tabs: {
    label: string;
    index: number;
  }[];
}

export function Tabs({ tabs, selectedTab }: ITabs) {
  const dispatch = useAppDispatch();

  const onTabClickHandler = (index: number) => {
    dispatch(changeTab(index));
  };

  return (
    <>
      <div className="mt-4 relative w-full">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              className="mr-6 font-light"
              onClick={() => onTabClickHandler(tab.index)}
              key={tab.label}
            >
              <span
                className={
                  selectedTab === tab.index
                    ? 'border-b-2 border-black'
                    : 'text-zinc-500 border-b-2 border-transparent'
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <hr className="w-full absolute bottom-[1px]" />
      </div>
    </>
  );
}
