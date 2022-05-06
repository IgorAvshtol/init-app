import React from 'react';

import { useAppSelector } from 'store/store';

export function Header() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="w-full flex items-center mt-6">
        <img src={user?.image} alt="avatar" className="w-12 rounded-full" />
        <div className="ml-4 flex flex-col items-start">
          <span className="font-bold">{user?.username}</span>
          <span className="text-zinc-600">@{user?.username}</span>
        </div>
      </div>
      <hr className="w-full absolute left-0 mt-4" />
    </>
  );
}
