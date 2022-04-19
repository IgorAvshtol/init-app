import { Menu } from '@headlessui/react';

import avatar from 'image/avatar.png';
import { useAppDispatch, useAppSelector } from 'store/store';
import { logout } from 'store/auth/authSlice';

interface IDropdownMenu {
  positionTop?: boolean;
}

export function DropdownMenu({ positionTop }: IDropdownMenu) {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onLogoutButtonHandler = () => {
    dispatch(logout());
  };
  return (
    <Menu as="div" className="relative z-10">
      <div className="h-full flex items-center">
        <Menu.Button>
          <div className="flex justify-center">
            <img src={user?.image || avatar} className="h-8" alt="avatar" />
          </div>
        </Menu.Button>
      </div>
      <Menu.Items
        className={
          positionTop
            ? 'fixed bg-slate-100 rounded-xl border-inherit top-11 absolute xl:left-5 xl:top-10 lg:left-5 lg:top-10 md:top-11 sm:top-11 sm:top-11'
            : 'fixed bg-slate-100 rounded-xl border-inherit bottom-11 right-5 absolute xl:left-5 xl:top-10 lg:left-5 lg:top-10 md:bottom-11 sm:bottom-11 sm:right-5'
        }
      >
        <div className="w-24 bg-slate-100 rounded-xl flex flex-col items-start p-4 sm:w-24">
          <Menu.Item>
            {({ active }) => <a className={`${active ? 'underline pb-2' : 'pb-2'}`}>Settings</a>}
          </Menu.Item>
          <Menu.Item disabled>
            <hr className="bg-emerald-100 h-0.5 w-full" />
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'underline pt-2' : 'pt-2'}`}
                onClick={onLogoutButtonHandler}
                href="/"
              >
                Logout
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
