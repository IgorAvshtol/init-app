import { useState } from 'react';

interface ITabs {
  id: string;
  name: string;
  isActive: boolean;
}

interface ITabsLIst {
  list: ITabs[];
  showAllArticles?: boolean;
  setShowAllArticles?: (value: boolean) => void;
}

export function Tabs({ list, showAllArticles, setShowAllArticles }: ITabsLIst) {
  const [activeId, setActiveId] = useState<string>(list[0].id);
  const onActiveStatusHandler = (id: string) => {
    setActiveId(id);
    setShowAllArticles && setShowAllArticles(!showAllArticles);
  };
  const activeStatusIsChange = (id: string) => {
    return list.map((param) =>
      param.id === id ? { ...param, isActive: true } : { ...param, isActive: false }
    );
  };
  return (
    <div className="mt-4 relative w-full">
      <div className="flex">
        {activeStatusIsChange(activeId).map((parameter) => {
          return (
            <button
              key={parameter.id}
              className="mr-6 font-light"
              onClick={() => onActiveStatusHandler(parameter.id)}
            >
              <p
                className={
                  parameter.isActive
                    ? 'border-b-2 border-black w-full'
                    : 'text-zinc-500 border-b-2 border-transparent'
                }
              >
                {parameter.name}
              </p>
            </button>
          );
        })}
      </div>
      <hr className="w-full absolute bottom-[0.5px] -z-10" />
    </div>
  );
}
