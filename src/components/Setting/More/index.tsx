import React, { useRef } from 'react';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { Header } from './Header';
import { Main } from './Main';

interface IEditMenu {
  setEditMenuIsOpen: (value: boolean) => void;
}

export function More({ setEditMenuIsOpen }: IEditMenu) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, setEditMenuIsOpen);

  return (
    <div
      className="w-56 absolute right-0 top-8 px-6 py-4 rounded border-[1px] bg-white shadow-xl font-thin flex flex-col items-start text-zinc-600 text-sm"
      ref={ref}
    >
      <Header />
      <Main />
    </div>
  );
}
