import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/store';

type PropsType = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PropsType) {
  const { user } = useAppSelector((state) => state.auth);
  if (!user?.username) {
    return <Navigate to="/" />;
  }
  return children;
}
