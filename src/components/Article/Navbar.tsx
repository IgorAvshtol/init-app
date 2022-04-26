import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

import logo from 'image/logo.png';
import home from 'image/home.png';
import write from 'image/write.png';
import lists from 'image/lists.png';
import { DropdownMenu } from '../Menu';
import { useAppDispatch, useAppSelector } from 'store/store';
import { isSignInModalOpen } from 'store/auth/authSlice';

export function Navbar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const forwarding = () => {
    if (!user) {
      dispatch(isSignInModalOpen());
      return;
    }
    navigate('/new-article');
  };

  return (
    <div className="bg-emerald-100 z-10 fixed h-12 left-0 bottom-0 flex items-center justify-center w-full xl:static xl:h-full xl:flex xl:justify-center xl:items-center xl:w-16 lg:static	lg:h-full lg:flex lg:justify-around lg:items-center lg:w-16 md:fixed md:h-12 md:w-full md:left-0 md:bottom-0 sm:fixed sm:h-12 sm:w-full sm:left-0 sm:bottom-0">
      <div
        className={
          user
            ? 'w-5/6 fixed bottom-0 h-12 flex justify-between items-center xl:w-16 xl:h-full xl:flex-col xl:justify-around xl:items-center lg:w-16 lg:h-screen lg:flex-col lg:items-center lg:justify-around md:w-5/6 md:flex md:justify-around md:fixed md:bottom-0 sm:w-5/6 sm:flex sm:justify-around'
            : 'w-5/6 fixed bottom-0 h-12 flex justify-center items-center xl:w-16 xl:h-full xl:flex-col xl:justify-around xl:items-center lg:w-16 lg:h-screen lg:flex-col lg:items-center lg:justify-around md:w-5/6 md:flex md:justify-around md:fixed md:bottom-0 sm:w-5/6 sm:flex sm:justify-around'
        }
      >
        {user && <img className="w-9" src={logo} alt="logo" />}
        <div className="flex items-center justify-between xl:w-full xl:flex xl:flex-col lg:w-full lg:flex lg:flex-col md:flex md:justify-between sm:flex sm:justify-between">
          <a
            href="/"
            className="relative hover:after:content-['Home'] after:w-12 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 after:left-4 lg:after:left-10 lg:after:bottom-0 md:after:bottom-12 md:after:left-4 sm:after:bottom-10 sm:after:left-4"
          >
            <img className="w-9" src={home} alt="home" />
          </a>
          <Link
            to="/lists"
            className="relative hover:after:content-['Lists'] after:w-24 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 after:left-2 lg:after:left-8 lg:after:bottom-0 md:after:bottom-12 md:after:left-2 sm:after:bottom-10 sm:after:left-2"
          >
            <img
              className="w-7 ml-1.5 ml-6 xl:mt-6 xl:ml-0 lg:mt-6 lg:ml-0"
              src={lists}
              alt="lists"
            />
          </Link>
          <hr className="hidden xl:block xl:mt-4 xl:w-5/6 lg:block lg:mt-4 lg:w-5/6 md:hidden sm:hidden" />
          <a
            onClick={forwarding}
            className="relative hover:after:content-['Write'] after:w-24 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 after:left-2 lg:after:left-8 lg:after:bottom-0 md:after:bottom-12 md:after:left-2 sm:after:bottom-10 sm:after:left-2"
          >
            <img
              className="w-6 ml-1.5 ml-6 xl:mt-6 xl:ml-0 lg:mt-6 lg:ml-0"
              src={write}
              alt="write"
            />
          </a>
        </div>
        {user && <DropdownMenu />}
      </div>
    </div>
  );
}
