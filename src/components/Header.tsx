import { Dispatch, SetStateAction } from 'react';

import logo from '../image/logo.png';

interface IHeader {
  onSignInBtnClick: Dispatch<SetStateAction<boolean>>;
  onSignUpBtnClick: Dispatch<SetStateAction<boolean>>;
  setThisModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ onSignInBtnClick, onSignUpBtnClick, setThisModalOpen }: IHeader) {
  const onClickSignInHandler = () => {
    onSignUpBtnClick(false);
    onSignInBtnClick(true);
    setThisModalOpen(true);
  };

  const onClickSignUpHandler = () => {
    onSignInBtnClick(false);
    onSignUpBtnClick(true);
    setThisModalOpen(true);
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
