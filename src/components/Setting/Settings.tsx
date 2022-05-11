import { Main } from './Main';
import { Sidebar } from './Sidebar';

export function Settings() {
  return (
    <div className="relative mt-28 flex justify-center w-5/6 xl:w-7/12 xl:flex xl:justify-between sm:w-5/6">
      <Sidebar />
      <Main />
    </div>
  );
}
