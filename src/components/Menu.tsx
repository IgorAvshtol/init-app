import { Menu } from '@headlessui/react';

import avatar from 'image/avatar.png';

import { useAuth } from 'hooks/useProvideAuth';

export function DropdownMenu() {
  const { user, logout } = useAuth();

  return (
    <Menu as="div" className="relative">
      <div className="h-full flex items-center">
        <Menu.Button>
          <div className="flex justify-center">
            <img src={user?.user.image || avatar} className="h-8" alt="avatar" />
          </div>
        </Menu.Button>
      </div>
      <Menu.Items className="fixed bg-slate-100 rounded-xl border-inherit absolute left-10 z-3">
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
