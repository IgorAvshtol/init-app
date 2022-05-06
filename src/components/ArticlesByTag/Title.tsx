import bookmark from 'image/bookmark.png';
import { useAppSelector } from '../../store/store';

interface IHeader {
  title: string;
}

export function Title({ title }: IHeader) {
  const { selectedTag } = useAppSelector((state) => state.tags);

  return (
    <div className="mb-4 flex flex-col">
      <div className="flex">
        <img src={bookmark} alt="mark" className="w-6 md:w-10" />
        <span className="pl-2 text-xl font-bold md:text-5xl">{title}</span>
      </div>
      <div className=" block mt-6 flex flex-col lg:hidden">
        <span className="text-xl font-bold">{selectedTag.length}</span>
        <span>Stories</span>
      </div>
      <div className="mt-6 flex">
        <button className="bg-emerald-600 rounded-full text-sm text-white font-light py-1 px-3">
          Follow
        </button>
        <button className="ml-2 border-emerald-600 border-[1px] rounded-full text-sm text-emerald-600 font-light py-1 px-3">
          Start writing
        </button>
      </div>
    </div>
  );
}
