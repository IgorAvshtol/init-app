import { useAuth } from 'hooks/useProvideAuth';
import logo from 'image/logo.png';
import { DropdownMenu } from '../../Menu';

export function Header() {
  const { user } = useAuth();
  return (
    <div className="w-1/2 h-14 bg-fuchsia-500 flex justify-between items-center">
      <div className="flex">
        <a href="/">
          <img width={30} src={logo} alt="main-logo" />
        </a>
        <p className="pl-3">Draft in {user?.user.username}</p>
      </div>
      <div className="flex justify-center">
        <DropdownMenu />
      </div>
    </div>
  );
}
