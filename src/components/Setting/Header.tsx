import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from 'image/logo.png';
import lists from 'image/lists.png';
import { useAppSelector } from 'store/store';
import { More } from './More';

interface IHeader {
  scrollingUp: boolean;
}

export function Header({ scrollingUp }: IHeader) {
  const { user } = useAppSelector((state) => state.auth);
  const [editMenuIsOpen, setEditMenuIsOpen] = useState<boolean>(false);

  const onEditButtonHandler = () => {
    setEditMenuIsOpen(true);
  };

  return (
    <header
      className={
        !scrollingUp
          ? 'h-16 opacity-0 w-full bg-white fixed flex flex-col items-center justify-center shadow-md shadow-zinc-100 transition-transform z-10'
          : 'h-16 w-full bg-white fixed flex flex-col items-center justify-center shadow-md shadow-zinc-100 duration-700 ease-in z-10'
      }
    >
      <div className="w-5/6 flex-col justify-between items-center xl:w-7/12 sm:w-5/6">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="main-logo" className="w-8" />
          </Link>
          <div className="w-20 flex justify-between items-center">
            <Link to="/lists">
              <img src={lists} alt="lists" className="w-5" />
            </Link>
            <button onClick={onEditButtonHandler} className="relative">
              <img src={user?.image} alt="avatar" className="w-8 rounded-full" />
              {editMenuIsOpen && <More setEditMenuIsOpen={setEditMenuIsOpen} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
