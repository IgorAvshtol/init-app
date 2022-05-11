import { Route, Routes } from 'react-router-dom';

import { Posts } from '../Posts/Posts';
import { Sidebar } from '../Sidebar/Sidebar';
import { Title } from './Title';
import { Navbar } from '../Article/Navbar';
import { useAppSelector } from 'store/store';
import { PostsContainer } from '../Posts/PostsContainer';
import { ListsContainer } from '../Lists/ListsContainer';

export function Main() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <main className="flex-col justify-between">
      {!user ? (
        <>
          <Title />
          <div className="pt-3 w-3/4 m-auto flex-col justify-between items-center xl:w-3/5 lg:w-5/6 md:w-5/6 sm:w-5/6">
            <div className="w-full pt-4 flex flex-col-reverse justify-between xl:flex-row xl:items-start lg:flex-row md:flex md:flex-col-reverse sm:flex-col-reverse">
              <Posts />
              <Sidebar />
            </div>
          </div>
        </>
      ) : (
        <article className="flex">
          <div className="w-5/6 m-auto flex xl:w-3/4 lg:4/5 md:w-5/6 sm:w-5/6">
            <Navbar />
            <div className="w-full min-h-screen mb-12 border-0 flex justify-center xl:w-3/4 xl:mt-0 xl:border-x-2 lg:w-3/4 lg:mb-0 lg:border-x-2">
              <div className="w-full pt-4 flex flex-col items-center md:flex md:flex-col sm:flex sm:flex-col">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<PostsContainer />} />
                  <Route path="/lists" element={<ListsContainer />} />
                </Routes>
              </div>
            </div>
          </div>
        </article>
      )}
    </main>
  );
}
