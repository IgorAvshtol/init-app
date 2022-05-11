import { Navigate } from 'react-router-dom';
import { getUserFromLocalStorage } from 'services/localStorage/localStorage';

type PropsType = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PropsType) {
  const currentUser = getUserFromLocalStorage();
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return children;
}
