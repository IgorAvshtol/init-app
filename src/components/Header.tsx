import logo from 'image/logo.png';

import { useAuth } from 'hooks/useProvideAuth';

import { DropdownMenu } from './Menu';

interface IHeader {
  onSignInBtnClick: () => void;
  onSignUpBtnClick: () => void;
  purpose: boolean;
}

export function Header({ onSignInBtnClick, onSignUpBtnClick, purpose }: IHeader) {
  const { user } = useAuth();
  return (
    <header
      className={
        !user
          ? purpose
            ? 'h-12 w-full fixed flex flex-col items-center justify-center border-b-[1px] border-black duration-1000 ease-out bg-white z-30'
            : 'h-12 w-full fixed flex flex-col items-center justify-center border-b-[1px] border-black duration-1000 ease-out bg-emerald-400 z-30'
          : 'hidden'
      }
    >
      <div className="w-3/4 m-auto flex-col justify-between items-center flex-1 xl:w-3/5 lg:w-5/6 md:w-5/6 sm:w-5/6 z-10">
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
                  className={
                    purpose
                      ? 'text-green-300 hover:text-green-700 cursor-pointer'
                      : 'text-white cursor-pointer'
                  }
                  onClick={onSignInBtnClick}
                >
                  Sign In
                </button>
                <button
                  className={
                    purpose
                      ? 'text-green-300 hover:text-green-700 cursor-pointer'
                      : 'text-white cursor-pointer'
                  }
                  onClick={onSignUpBtnClick}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
