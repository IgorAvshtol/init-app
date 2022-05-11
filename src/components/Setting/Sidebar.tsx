import { Links } from '../Links/Links';

export function Sidebar() {
  return (
    <div className="top-24 sticky h-full w-1/3 hidden xl:block">
      <span className="font-medium text-2xl">Settings</span>
      <hr className="mt-8 w-11/12" />
      <div className="mt-2 w-full flex flex-wrap">
        <Links />
      </div>
    </div>
  );
}
