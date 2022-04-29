import React, { FC, useState } from 'react';

interface ITabs {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
}

export function Tabs({ tabs }: ITabs) {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const onTabClickHandler = (index: number) => {
    setSelectedTab(index);
  };
  const panel = tabs.find((tab) => tab.index === selectedTab);
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
                    ? 'border-b-2 border-black w-full'
                    : 'text-zinc-500 border-b-2 border-transparent'
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <hr className="w-full absolute bottom-[1px] -z-10" />
      </div>
      {panel && <panel.Component index={selectedTab} />}
    </>
  );
}
