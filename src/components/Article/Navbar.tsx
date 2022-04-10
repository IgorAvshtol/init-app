import home from 'image/home.png';
import comments from 'image/comments.png';

interface INavbar {
  setIsOpen: (value: boolean) => void;
}

export function Navbar({ setIsOpen }: INavbar) {
  const showComments = () => {
    setIsOpen(true);
  };
  return (
    <div className="bg-white fixed h-12 bottom-0 flex items-center justify-center w-full xl:static	xl:h-screen xl:flex xl:justify-center xl:items-center xl:w-16 lg:static	lg:h-screen lg:flex lg:justify-center lg:items-center lg:w-16 md:fixed md:h-12 md:w-full md:bottom-0 sm:fixed sm:h-12 sm:w-full sm:bottom-0">
      <div className="w-5/6 fixed bottom-0 h-12 flex justify-around items-center xl:w-16 xl:h-full xl:flex-col xl:justify-center xl:items-center lg:w-16 lg:h-screen lg:flex-col lg:items-center lg:justify-center md:w-5/6 md:flex md:justify-around md:fixed md:bottom-0 sm:w-5/6 sm:flex sm:justify-around">
        <a
          href="/"
          className="relative hover:after:content-['Home'] after:w-12 after:text-center after:rounded-lg after:bg-emerald-100 after:absolute after:bottom-10 after:left-4 lg:after:left-10 lg:after:bottom-0 md:after:bottom-12 md:after:left-4 sm:after:bottom-10 sm:after:left-4"
        >
          <img className="w-9" src={home} alt="home" />
        </a>
        <hr className="hidden xl:block xl:mt-4 xl:w-5/6 lg:block lg:mt-4 lg:w-5/6 md:hidden sm:hidden" />
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
    </div>
  );
}
