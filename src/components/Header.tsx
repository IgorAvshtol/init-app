import logo from '../image/logo.png';

import { useAuth } from './hooks/useProvideAuth';

import { DropdownMenu } from './Menu';

interface IHeader {
  onSignInBtnClick: () => void;
  onSignUpBtnClick: () => void;
}

export function Header({ onSignInBtnClick, onSignUpBtnClick }: IHeader) {
  const { user, logout } = useAuth();
  const image = 'https://api.realworld.io/images/smiley-cyrus.jpeg';
  const auth = true;

  return (
    <header className="h-28 w-4/5 m-auto">
      <div className="h-full flex items-center">
        <div className="w-full flex justify-between items-center relative">
          <a href="/">
            <img width={80} src={logo} alt="main-logo" />
          </a>
          <div className="h-28 w-36 flex justify-between">
            {auth ? (
              <DropdownMenu image={image} />
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
      <hr className="pt-2" />
    </header>
  );
}
