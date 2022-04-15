import logo from 'image/logo.png';

import { useAuth } from 'hooks/useProvideAuth';

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
      <div className="w-3/4 mt-2 flex-col justify-between items-center xl:w-3/5 lg:w-5/6 md:w-5/6 sm:w-5/6 z-10">
        <div className="w-full flex justify-between items-center relative">
          <a href="/" className="w-8">
            <img src={logo} alt="main-logo" />
          </a>
          <div className="w-36 flex justify-between items-center">
            <div className="w-full flex justify-between items-center">
              <button
                disabled={purpose}
                className={purpose ? 'text-green-300 cursor-pointer' : 'text-white cursor-pointer'}
                onClick={onSignInBtnClick}
              >
                Sign In
              </button>
              <button
                disabled={purpose}
                className={purpose ? 'text-green-300 cursor-pointer' : 'text-white cursor-pointer'}
                onClick={onSignUpBtnClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="pt-2" />
    </header>
  );
}
