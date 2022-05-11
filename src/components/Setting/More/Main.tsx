import { Link } from 'react-router-dom';

import { logout } from 'store/auth/authSlice';
import { useAppDispatch } from 'store/store';

export function Main() {
  const dispatch = useAppDispatch();

  const onLogoutButtonHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="mt-4 flex flex-col items-start">
      <Link to="/lists" className="mt-4 font-normal">
        Lists
      </Link>
      <Link to={'/me/publications'} className="mt-4 font-normal">
        Publications
      </Link>
      <button className="mt-4" onClick={onLogoutButtonHandler}>
        Sign Out
      </button>
    </div>
  );
}
