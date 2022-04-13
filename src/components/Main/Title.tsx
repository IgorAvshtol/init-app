import { Animation } from '../style/Animation';

export function Title() {
  return (
    <div className="relative w-full mt-12 bg-emerald-400 flex justify-end items-center h-[450px] border-b-[1px] border-black -z-10">
      <div className="w-5/6 mx-auto xl:ml-[20%] lg:ml-[10%] md:ml-[10%]">
        <h1 className="text-5xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-7xl">Itransition.</h1>
        <h4 className="mt-4 text-2xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl">
          We’re a global software engineering company <br /> making success stories for over 20
          years
        </h4>
        <button className="mt-4 bg-emerald-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full">
          Start
        </button>
      </div>
      <Animation />
    </div>
  );
}
