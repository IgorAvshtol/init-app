import './Animation.css';
import { useEffect } from 'react';

export function Animation() {
  useEffect(() => {
    const fadingHeading = document.querySelectorAll('.fading');
    for (let a = 0; a < fadingHeading.length; a++) {
      const letters = fadingHeading[a].textContent?.split('');
      const content =
        letters &&
        letters.map((val) => {
          const delay = Math.floor(Math.random() * 30000 + 1);
          return '<span style="animation-delay: ' + delay + 'ms">' + val + '</span>';
        });
      fadingHeading[a].innerHTML = ' ';
      if (content)
        for (let i = 0; i < content.length; i++) {
          fadingHeading[a].innerHTML += content[i];
        }
    }
  }, []);

  return (
    <div className="absolute z-20 right-0 hidden xl:absolute xl:w-1/2 xl:h-4/5 lg:absolute lg:w-1/2 lg:h-4/5 md:block md:w-1/2 sm:hidden">
      <div className="fading">M M M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M</div>
      <div className="fading">M M M M M M M M</div>
      <div className="fading">M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M M M M M</div>
      <div className="fading">M M M M</div>
      <div className="fading">M M M M M M M M M M M M</div>
    </div>
  );
}
