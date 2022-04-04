import message from '../../image/message.png';

interface IArticleSidebar {
  avatar: string;
  author: string;
}

export function ArticleSidebar({ avatar, author }: IArticleSidebar) {
  return (
    <div className="sticky top-24 ml-2 flex-col">
      <img src={avatar} className="w-24 rounded-full" alt="avatar" />
      <p className="pt-2 font-bold text-lg">{author}</p>
      <div className="pt-1 w-full flex">
        <button className="text-black bg-blue-500 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Follow
        </button>
        <button className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <img className="w-5" src={message} alt="send-message" />
        </button>
      </div>
    </div>
  );
}
