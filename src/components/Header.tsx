import React, { Dispatch, SetStateAction } from 'react';

import logo from '../image/logo.png';

interface IHeader {
  setSetTitleModal: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setSetTitleModal, setIsOpen }: IHeader) {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSetTitleModal(e.currentTarget.textContent!);
    setIsOpen(true);
  };

  return (
    <header className="h-28 w-4/5 m-auto">
      <div className="h-full flex items-center">
        <div className="w-full flex justify-between items-center">
          <a href="/">
            <img width={80} src={logo} alt="main-logo" />
          </a>
          <div className="w-36 flex justify-between">
            <div
              className="text-green-300 hover:text-green-700 cursor-pointer"
              onClick={onClickHandler}
            >
              Sign In
            </div>
            <div
              className="text-green-300 hover:text-green-700 cursor-pointer"
              onClick={onClickHandler}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <hr className="pt-2" />
    </header>
  );
}
