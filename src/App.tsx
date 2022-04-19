import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { SignInForm } from 'components/SignInForm/SignInForm';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Header } from 'components/Header';
import { Main } from 'components/Main/Main';
import { Modal } from 'components/Modal';
import { Page } from 'components/Article/Page';
import { Form } from 'components/Article/AddArticleForm/Form';
import { PrivateRoute } from './components/Routes/PrivateRoute';

function App() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [purpose, setPurpose] = useState(false);
  const { pathname } = useLocation();

  const toggleSignInModal = useCallback(() => {
    setIsSignInModalOpen((isOpen) => !isOpen);
  }, []);
  const toggleSignUpModal = useCallback(() => {
    setIsSignUpModalOpen((isOpen) => !isOpen);
  }, []);

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

  return (
    <div className="min-h-screen h-full flex flex-col">
      <div className={pathname !== '/' ? 'hidden' : 'block'}>
        <Header
          purpose={purpose}
          onSignInBtnClick={toggleSignInModal}
          onSignUpBtnClick={toggleSignUpModal}
        />
      </div>
      <Modal isOpen={isSignInModalOpen} onClose={toggleSignInModal}>
        <SignInForm onSignIn={toggleSignInModal} />
      </Modal>
      <Modal isOpen={isSignUpModalOpen} onClose={toggleSignUpModal}>
        <SignUpForm onSignUp={toggleSignUpModal} />
      </Modal>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:slug" element={<Page toggleSignInModal={toggleSignInModal} />} />
        <Route
          path="/new-article"
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
