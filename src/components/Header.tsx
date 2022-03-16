import React, { Dispatch, SetStateAction } from 'react';
import logo from '../image/logo.png';

interface IHeader {
  setSignInModalOn: Dispatch<SetStateAction<boolean>>;
  setSignUpModalOn: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setSignInModalOn, setSignUpModalOn }: IHeader) {
  const onClickSignInHandler = () => {
    setSignInModalOn(true);
  };

  const onClickSignUpHandler = () => {
    setSignUpModalOn(true);
  };

  return (
    <header className="h-26 w-4/5 m-auto">
      <div className="flex justify-between items-center">
        <img className="mt-1" width={80} src={logo} alt="main-logo" />
        <div className="w-36 flex justify-between">
          <div className="text-green-300 hover:text-green-700" onClick={onClickSignInHandler}>
            Sign In
          </div>
          <div className="text-green-300 hover:text-green-700" onClick={onClickSignUpHandler}>
            Sign Up
          </div>
        </div>
      </div>
      <hr className="mt-2" />
    </header>
  );
}
