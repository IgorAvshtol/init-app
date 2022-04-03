import React from 'react';

import { Posts } from '../Posts/Posts';
import { Sidebar } from '../Sidebar/Sidebar';
import { Title } from './Title';

export function Main() {
  return (
    <main className="mt-12 pt-3 h-24 w-3/4 m-auto flex-col justify-between items-center flex-1 xl:w-3/5 lg:w-5/6 md:w-5/6 sm:w-5/6">
      <Title />
      <div className="w-full pt-4 flex flex-col justify-between md:flex md:flex-col sm:flex sm:flex-col">
        <Sidebar />
        <Posts />
      </div>
    </main>
  );
}
