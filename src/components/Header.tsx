import logo from '../image/logo.png';
import { useAuth } from '../hooks/useProvideAuth';

interface IHeader {
  onSignInBtnClick: () => void;
  onSignUpBtnClick: () => void;
}

export function Header({ onSignInBtnClick, onSignUpBtnClick }: IHeader) {
  const auth = useAuth();
  return (
    <header className="h-28 w-4/5 m-auto">
      <div className="h-full flex items-center">
        <div className="w-full flex justify-between items-center">
          <a href="/">
            <img width={80} src={logo} alt="main-logo" />
          </a>
          {auth.userData?.user ? (
            <button
              className="text-green-300 hover:text-green-700 cursor-pointer"
              onClick={onSignInBtnClick}
            >
              {auth.userData.user.email}
            </button>
          ) : (
            <div className="w-36 flex justify-between">
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
      <hr className="pt-2" />
    </header>
  );
}
