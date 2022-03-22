// @ts-ignore
import classNames from 'classnames';

interface ICase {
  width?: string;
  textColor?: string;
  bgColor?: string;
  bg?: string;
  bgRepeat?: string;
  bgPosition?: string;
  bgCover?: string;
  title: string;
  description: string;
}

export function Case({
  width,
  bgColor,
  bg,
  bgCover,
  bgRepeat,
  bgPosition,
  textColor,
  title,
  description,
}: ICase) {
  const classStr = classNames('p-9', width, bgColor, bg, bgCover, bgRepeat, bgPosition, textColor);

  return (
    <div className={classStr}>
      <p className="text-lg font-medium leading-6">Case study</p>
      <a href="/">
        <p className="text-lg font-extrabold leading-tight my-5 hover:underline">{title}</p>
      </a>
      <p className="text-base font-medium leading-normal">{description}</p>
    </div>
  );
}
