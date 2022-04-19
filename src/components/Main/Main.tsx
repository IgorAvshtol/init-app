import { Posts } from '../Posts/Posts';
import { Sidebar } from '../Sidebar/Sidebar';
import { Title } from './Title';
import { Navbar } from '../Article/Navbar';
import { useAppDispatch, useAppSelector } from 'store/store';
import { useEffect } from 'react';
import { getUserFromLocalStorage } from 'services/localStorage/localStorage';
import { getCurrentUser } from 'store/auth/authSlice';
import { getArticles } from 'store/articles/articlesThunk';
import { getTags } from 'store/tags/tagsThunk';

export function Main() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    const currentUser = getUserFromLocalStorage();
    currentUser && dispatch(getCurrentUser(currentUser));
    dispatch(getArticles());
    dispatch(getTags());
  }, [dispatch]);
  return (
    <main className="flex-col justify-between flex-1">
      {!user ? (
        <>
          <Title />
          <div className="pt-3 w-3/4 m-auto flex-col justify-between items-center flex-1 xl:w-3/5 lg:w-5/6 md:w-5/6 sm:w-5/6">
            <div className="w-full pt-4 flex flex-col justify-between md:flex md:flex-col sm:flex sm:flex-col">
              <Sidebar />
              <Posts />
            </div>
          </div>
        </>
      ) : (
        <article className="flex flex-1">
          <div className="w-5/6 m-auto flex xl:w-3/4 lg:4/5 md:w-5/6 sm:w-5/6">
            <Navbar />
            <div className="w-full min-h-screen mb-12 border-0 flex justify-center xl:w-3/4 xl:mt-0 xl:border-x-2 xl:pt-14 lg:w-3/4 lg:mb-0 lg:border-x-2 md:mt-12 sm:mb-12">
              <div className="w-full pt-4 flex flex-col justify-between items-center md:flex md:flex-col sm:flex sm:flex-col">
                <Sidebar />
                <Posts />
              </div>
            </div>
          </div>
        </article>
      )}
    </main>
  );
}
