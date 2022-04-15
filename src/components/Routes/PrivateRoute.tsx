import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useProvideAuth';

type PropsType = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PropsType) {
  const { user } = useAuth();

  if (!user?.user.username) {
    return <Navigate to="/" />;
  }

  return children;
}
