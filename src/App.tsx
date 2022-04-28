import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import useSWR from 'swr';

import { SignInForm } from 'components/SignInForm/SignInForm';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Header } from 'components/Header';
import { Main } from 'components/Main/Main';
import { Modal } from 'components/Modal';
import { Page } from 'components/Article/Page';
import { Form } from 'components/Article/AddArticleForm/Form';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import { useAppDispatch, useAppSelector } from 'store/store';
import {
  getArticles,
  getCurrentUserArticles,
  getFavoriteArticles,
} from 'store/articles/articlesThunk';
import { getTags } from 'store/tags/tagsThunk';
import { getUserFromLocalStorage } from 'services/localStorage/localStorage';
import { getCurrentUser } from 'store/auth/authSlice';
import { IUserData } from 'interfaces';
import { ReadingLists } from './components/ReadingLists/ReadingLists';

function App() {
  const { data: currentUser } = useSWR<IUserData>('userData', getUserFromLocalStorage);
  const { signInModalOpen, signUpModalOpen } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [purpose, setPurpose] = useState(false);
  const { pathname } = useLocation();
  const listenScrollEvent = () => {
    if (window.scrollY > 350) {
      setPurpose(true);
    } else {
      setPurpose(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  useEffect(() => {
    if (currentUser) {
      dispatch(getCurrentUser(currentUser));
      dispatch(getCurrentUserArticles(currentUser?.user.username));
      dispatch(getFavoriteArticles(currentUser?.user.username));
    }
    dispatch(getArticles());
    dispatch(getTags());
  }, [dispatch, currentUser]);

  return (
    <div className="min-h-screen h-full flex flex-col">
      <div className={pathname !== '/' ? 'hidden' : 'block'}>
        <Header purpose={purpose} />
      </div>
      <Modal>
        {signInModalOpen && <SignInForm />}
        {signUpModalOpen && <SignUpForm />}
      </Modal>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/posts/:slug" element={<Page />} />
        <Route path="lists/:username/list/reading-list/*" element={<ReadingLists />} />
        <Route
          path="/new-article"
          element={
            <PrivateRoute>
              <Form />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-:slug"
          element={
            <PrivateRoute>
              <Form />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
