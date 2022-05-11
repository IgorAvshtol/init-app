import comments from 'image/comments.png';
import clap from 'image/clap.svg';

interface IResponse {
  setIsOpen: (value: boolean) => void;
}

export function Response({ setIsOpen }: IResponse) {
  const showComments = () => {
    setIsOpen(true);
  };

  return (
    <div className="bg-white w-32 flex justify-between px-6 py-3 shadow-2xl border rounded-xl">
      <button className="relative hover:after:content-['Favourite'] after:w-24 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 lg:after:bottom-12 md:after:bottom-12 md:after:left-2 sm:after:bottom-10 sm:after:left-2">
        <img className="w-8" src={clap} alt="notification" />
      </button>
      <hr className="w-0.5 h-full border" />
      <button
        onClick={showComments}
        className="relative hover:after:content-['Comments'] after:w-24 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 lg:after:bottom-12 md:after:bottom-12 md:after:left-2 sm:after:bottom-10 sm:after:left-2"
      >
        <img className="w-6" src={comments} alt="notification" />
      </button>
    </div>
  );
}
