import React from 'react';

import { Posts } from '../Posts/Posts';
import { Sidebar } from '../Sidebar/Sidebar';
import { Title } from './Title';

export function Main() {
  return (
    <main className="mt-12 pt-3 h-24 w-3/4 m-auto flex-col justify-between items-center flex-1">
      <Title />
      <div className="w-full pt-10 flex justify-between">
        <Posts />
        <Sidebar />
      </div>
    </main>
  );
}
