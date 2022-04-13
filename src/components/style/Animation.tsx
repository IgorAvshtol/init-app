import './Animation.css';

export function Animation() {
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
  return (
    <div className="absolute h-[390px] z-10 right-0 hidden xl:block lg:block md:block sm:static">
      <div className="fading">M M M M M M M M M M M M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M M M M M M M M M</div>
      <div className="fading"> M M M M M M M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M M M M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M</div>
      <div className="fading">M M M M M M M M M M M M M</div>
    </div>
  );
}
