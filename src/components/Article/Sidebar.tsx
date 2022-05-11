import { Links } from 'components/Links/Links';
import { useAppDispatch, useAppSelector } from 'store/store';
import { follow, unfollow } from 'store/profile/profileThunk';

interface IArticleSidebar {
  avatar: string;
  author: string;
}

export function Sidebar({ avatar, author }: IArticleSidebar) {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.profile);
  const { user } = useAppSelector((state) => state.auth);
  const currentUserName = user?.username;

  const onFollowClickHandler = () => {
    !profile.following && dispatch(follow(profile.username));
    profile.following && dispatch(unfollow(profile.username));
  };

  return (
    <div className="sticky top-24 ml-4 flex-col xl:w-full lg:w-4/5">
      <img src={avatar} className="w-1/3 h-1/3 rounded-full" alt="avatar" />
      <p className="pt-2 font-bold text-lg">{author}</p>
      {currentUserName !== author && (
        <div className="pt-1 w-full flex">
          <button
            className="w-20 h-8 text-white bg-emerald-600 hover:bg-emerald-800 font-medium rounded-full text-sm mr-2 mb-2"
            onClick={onFollowClickHandler}
          >
            {profile.following ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      )}
      <hr className="my-2" />
      <div className="w-full flex flex-wrap">
        <Links />
      </div>
    </div>
  );
}
