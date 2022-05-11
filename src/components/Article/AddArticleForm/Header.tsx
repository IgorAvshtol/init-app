import { DropdownMenu } from '../../Menu';
import logo from 'image/logo.png';
import { useAppSelector } from 'store/store';

export function Header() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="w-1/2 h-14 flex justify-between items-center text-xs md:text-lg">
      <div className="flex">
        <a href="/">
          <img width={30} src={logo} alt="main-logo" />
        </a>
        <p className="pl-3 flex items-center">Draft in {user?.username}</p>
      </div>
      <div className="flex justify-center">
        <DropdownMenu positionTop={true} />
      </div>
    </div>
  );
}
