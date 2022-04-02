import logo from '../image/logo.png';

import { useAuth } from './hooks/useProvideAuth';

import { DropdownMenu } from './Menu';

interface IHeader {
  onSignInBtnClick: () => void;
  onSignUpBtnClick: () => void;
}

export function Header({ onSignInBtnClick, onSignUpBtnClick }: IHeader) {
  const { user } = useAuth();

  return (
    <header className="h-12 w-full fixed flex flex-col items-center justify-center bg-emerald-50">
      <div className="h-full w-4/5 flex justify-center items-center">
        <div className="w-full flex justify-between items-center relative">
          <a href="/">
            <img width={30} src={logo} alt="main-logo" />
          </a>
          <div className="h-28 w-36 flex justify-between">
            {user ? (
              <DropdownMenu />
            ) : (
              <div className="w-full flex justify-between">
                <button
                  className="text-green-300 hover:text-green-700 cursor-pointer"
                  onClick={onSignInBtnClick}
                >
                  Sign In
                </button>
                <button
                  className="text-green-300 hover:text-green-700 cursor-pointer"
                  onClick={onSignUpBtnClick}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="h-0.5 w-full bg-black" />
    </header>
  );
}
