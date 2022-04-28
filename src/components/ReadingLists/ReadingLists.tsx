import { Navbar } from '../Article/Navbar';
import { Sidebar } from './Sidebar';
import { Lists } from './Lists';

export function ReadingLists() {
  return (
    <article className="flex">
      <div className="w-5/6 m-auto flex xl:w-3/4 lg:4/5 md:w-5/6 sm:w-5/6">
        <Navbar />
        <div className="w-full min-h-screen mb-12 border-0 flex justify-center xl:w-3/4 xl:mt-0 xl:border-x-2 lg:w-3/4 lg:mb-0 lg:border-x-2">
          <div className="w-full pt-4 flex flex-col items-center md:flex md:flex-col sm:flex sm:flex-col">
            <Sidebar />
            <Lists />
          </div>
        </div>
      </div>
    </article>
  );
}
