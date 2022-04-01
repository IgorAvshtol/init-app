import avatar from '../../image/avatar.png';
import add from '../../image/add.svg';
import lens from '../../image/lens.webp';

export function Post() {
  return (
    <div className="w-full pt-2 flex justify-around">
      <div className="w-2/3 flex flex-col">
        <a href="/" className="flex">
          <img src={avatar} width={25} height={20} alt="avatar" />
          <p className="ml-2">Name</p>
        </a>
        <a href="/">
          <h2 className="text-xl font-bold pt-2">In Defense Of The M-Dash</h2>
        </a>
        <h3 className="text-base font-normal text-zinc-400">
          Writers worry they overuse it. They shouldn’ - it’s awesome
        </h3>
        <div className="flex justify-between items-center text-sm text-zinc-400">
          <div className="w-52 flex justify-between">
            <span>Apr1</span>
            <span>·</span>
            <span>3 min read</span>
            <span>·</span>
            <a href="/" className="w-16 bg-zinc-200 text-center rounded-full border-black">
              <span>Writing</span>
            </a>
          </div>
          <a href="/">
            <img src={add} height={25} width={25} className="fill-white" alt="favourite" />
          </a>
        </div>
      </div>
      <a href="/">
        <img src={lens} width={200} height={134} alt="post-cover" />
      </a>
    </div>
  );
}
