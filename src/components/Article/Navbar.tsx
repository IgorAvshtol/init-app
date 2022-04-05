import home from '../../image/home.png';
import notification from '../../image/notification.png';

export function Navbar() {
  return (
    <div className="mt-96 w-full sticky flex-col top-24">
      <a
        href="/"
        className="relative hover:after:content-['Home'] after:absolute after:top-2 after:left-10 after:rounded-lg after:px-1 after:bg-emerald-100"
      >
        <img className="w-9" src={home} alt="home" />
      </a>
      <a
        href="/"
        className="relative hover:after:content-['Notification'] after:absolute after:top-6 after:left-10 after:rounded-lg after:px-1 after:bg-emerald-100"
      >
        <img className="w-6 ml-1.5 mt-6" src={notification} alt="notification" />
      </a>
    </div>
  );
}
