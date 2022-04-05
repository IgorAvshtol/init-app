import home from '../../image/home.png';
import notification from '../../image/notification.png';

export function Navbar() {
  return (
    <div className="mt-96 w-full sticky flex-col top-24">
      <a href="/">
        <img className="w-9" src={home} alt="home" />
      </a>
      <a href="/">
        <img className="w-6 ml-1.5 mt-6" src={notification} alt="notification" />
      </a>
    </div>
  );
}
