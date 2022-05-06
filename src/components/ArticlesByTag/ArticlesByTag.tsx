import { Tabs } from '../Tabs/Tabs';
import { ITabs } from 'interfaces';
import { Navbar } from '../Article/Navbar';
import { Sidebar } from './Sidebar';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Articles } from './Articles';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByTag } from '../../store/articles/articlesThunk';
import { Title } from './Title';

const tabs: ITabs[] = [
  {
    label: 'Trending',
    index: 1,
  },
];

export function ArticlesByTag() {
  const dispatch = useAppDispatch();
  const { tag } = useParams();
  const { selectedTab } = useAppSelector((state) => state.tabs);
  const { selectedTag } = useAppSelector((state) => state.tags);

  useEffect(() => {
    tag && dispatch(getArticlesByTag(tag));
  }, [dispatch, tag]);

  return (
    <article className="flex">
      <div className="w-5/6 m-auto flex xl:w-3/4 lg:4/5 md:w-5/6 sm:w-5/6">
        <Navbar />
        <div className="w-full min-h-screen mb-12 border-0 flex justify-center xl:w-3/4 xl:mt-0 xl:border-x-2 lg:w-3/4 lg:mb-0 lg:border-x-2">
          <div className="w-full pt-4 flex flex-col items-center md:flex md:flex-col sm:flex sm:flex-col">
            <Sidebar />
            <div className="w-full flex flex-col justify-between xl:w-2/3 lg:w-3/4 md:w-full sm:w-full">
              <Title title={selectedTag} />
              <Tabs tabs={tabs} selectedTab={selectedTab} />
              {selectedTab === 1 && <Articles />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
