import React from 'react';

import { Partners } from './Partners';
import { Posts } from './Posts/Posts';
import { Sidebar } from './Sidebar/Sidebar';

export function Main() {
  return (
    <main className="mt-28 pt-3 h-24 w-4/5 m-auto flex-col justify-between items-center flex-1">
      <h1 className="text-6xl">Itransition</h1>
      <h4 className="text-3xl">
        We’re a global software engineering company making success stories for over 20 years
      </h4>
      <button className="mt-2 bg-emerald-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full">
        Start
      </button>
      <div className="w-full pt-10 flex justify-between">
        <Posts />
        <Sidebar />
      </div>
      <Partners />
    </main>
  );
}
