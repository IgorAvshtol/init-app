import { Menu } from '@headlessui/react';

import menuLogo from '../image/menulogo.png';
import avatar from '../image/avatar.png';

import { useAuth } from '../hooks/useProvideAuth';

export function DropdownMenu() {
  const { user, logout } = useAuth();

  return (
    <Menu as="div">
      <div className="absolute right-0 h-full flex items-center">
        <Menu.Button>
          <div className="w-20 flex items-center justify-between">
            <img src={menuLogo} className="h-6 w-6" alt="menu" />
            <img src={user?.user.image || avatar} className="h-8" alt="avatar" />
          </div>
        </Menu.Button>
      </div>
      <Menu.Items className="bg-slate-100 rounded-xl border-inherit absolute top-24 right-0">
        <div className="w-32 flex flex-col justify-items-start p-5">
          <Menu.Item>
            {({ active }) => <a className={`${active ? 'underline pb-2' : 'pb-2'}`}>Settings</a>}
          </Menu.Item>
          <Menu.Item disabled>
            <hr className="bg-emerald-100 h-0.5" />
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active ? 'underline pt-2' : 'pt-2'}`} onClick={logout} href="/">
                Logout
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
