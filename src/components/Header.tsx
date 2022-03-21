import React, { Dispatch, SetStateAction } from 'react';

import logo from '../image/logo.png';

interface IHeader {
  setSignUpModalOpen: Dispatch<SetStateAction<boolean>>;
  setSignInModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setSignInModalOpen, setSignUpModalOpen, setIsOpen }: IHeader) {
  const onClickSignInHandler = () => {
    setSignUpModalOpen(false);
    setSignInModalOpen(true);
    setIsOpen(true);
  };

  const onClickSignUpHandler = () => {
    setSignInModalOpen(false);
    setSignUpModalOpen(true);
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
              onClick={onClickSignInHandler}
            >
              Sign In
            </div>
            <div
              className="text-green-300 hover:text-green-700 cursor-pointer"
              onClick={onClickSignUpHandler}
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
