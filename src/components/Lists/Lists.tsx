import { nanoid } from 'nanoid';

import { List } from './List';
import { Tabs } from '../Tabs/Tabs';

const listParams = [{ id: nanoid(), name: 'Saved', isActive: true }];

export function Lists() {
  return (
    <div className="mt-5 w-full flex flex-col justify-start xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
      <p className="text-3xl font-bold lg:text-5xl md:text-4xl sm:text-3xl">Your list</p>
      <Tabs list={listParams} />
      <List />
    </div>
  );
}
