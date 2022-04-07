import home from '../../image/home.png';
import comments from '../../image/comments.png';

interface INavbar {
  setIsOpen: (value: boolean) => void;
}

export function Navbar({ setIsOpen }: INavbar) {
  const showComments = () => {
    setIsOpen(true);
  };
  return (
    <div className="mt-96 w-full border-t-2 bg-white fixed bottom-0 flex justify-center items-center xl:sticky xl:flex-col xl:justify-center xl:border-0 xl:top-24 lg:sticky lg:flex-col lg:border-0 lg:top-24 md:fixed md:bottom-0 md:flex md:h-12 sm:fixed sm:bottom-0 sm:flex">
      <a
        href="/"
        className="relative hover:after:content-['Home'] after:w-12 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 after:left-4 lg:after:left-10 lg:after:bottom-0 md:after:bottom-12 md:after:left-4 sm:after:bottom-10 sm:after:left-4"
      >
        <img className="w-9" src={home} alt="home" />
      </a>
      <button
        onClick={showComments}
        className="relative hover:after:content-['Comments'] after:w-24 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 after:left-2 lg:after:left-8 lg:after:bottom-0 md:after:bottom-12 md:after:left-2 sm:after:bottom-10 sm:after:left-2"
      >
        <img
          className="w-6 ml-1.5 ml-6 xl:mt-6 xl:ml-0 lg:mt-6 lg:ml-0"
          src={comments}
          alt="notification"
        />
      </button>
    </div>
  );
}
