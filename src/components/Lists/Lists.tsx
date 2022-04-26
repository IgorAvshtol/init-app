import { useState } from 'react';
import { nanoid } from 'nanoid';

import { List } from './List';

const listParams = [
  { id: nanoid(), name: 'Saved', isActive: true },
  { id: nanoid(), name: 'Highlights', isActive: false },
];

export function Lists() {
  const [activeId, setActiveId] = useState<string>(listParams[0].id);
  const onActiveStatusHandler = (id: string) => {
    setActiveId(id);
  };
  const activeStatusIsChange = (id: string) => {
    return listParams.map((param) =>
      param.id === id ? { ...param, isActive: true } : { ...param, isActive: false }
    );
  };
  return (
    <div className="mt-5 w-full flex flex-col justify-start xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
      <p className="text-3xl font-bold lg:text-5xl md:text-4xl sm:text-3xl">Your list</p>
      <div className="mt-10 relative">
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
      <List />
    </div>
  );
}
