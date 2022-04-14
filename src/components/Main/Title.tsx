import { Animation } from '../Style/Animation';

export function Title() {
  return (
    <div className="relative w-full mt-12 bg-emerald-400 flex justify-end items-center h-[450px] border-b-[1px] border-black -z-10">
      <div className="relative w-3/4 m-auto flex-col justify-between items-center xl:w-3/5 lg:w-5/6 md:w-5/6 sm:w-5/6 z-10">
        <h1 className="text-5xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl font-serif	">
          Itransition.
        </h1>
        <h4 className="mt-10 font-light text-2xl xl:text-2xl lg:text-2xl md:text-3xl sm:text-3xl">
          We’re a global software engineering company <br /> making success stories for over 20
          years
        </h4>
        <button className="mt-10 bg-emerald-600 text-xl	text-white w-52 py-2 px-4 rounded-full">
          Start reading
        </button>
      </div>
      <Animation />
    </div>
  );
}
