import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignInForm } from './components/SignInForm/SignInForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { Header } from './components/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ProvideAuth } from './hooks/useProvideAuth';
import { Page } from './components/Article/Page';
import { IArticles } from './interfaces';
import { useArticles } from './hooks/useArticles';

function App() {
  const { data, isLoading } = useArticles<IArticles>('/articles', 'articles');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [purpose, setPurpose] = useState(false);

  const toggleSignInModal = useCallback(() => {
    setIsSignInModalOpen((isOpen) => !isOpen);
  }, []);
  const toggleSignUpModal = useCallback(() => {
    setIsSignUpModalOpen((isOpen) => !isOpen);
  }, []);

  const listenScrollEvent = () => {
    if (window.scrollY > 222) {
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
    <ProvideAuth>
      <div className="min-h-screen flex flex-col">
        <Header
          purpose={purpose}
          onSignInBtnClick={toggleSignInModal}
          onSignUpBtnClick={toggleSignUpModal}
        />
        <Modal isOpen={isSignInModalOpen} onClose={toggleSignInModal}>
          <SignInForm onSignIn={toggleSignInModal} />
        </Modal>
        <Modal isOpen={isSignUpModalOpen} onClose={toggleSignUpModal}>
          <SignUpForm onSignUp={toggleSignUpModal} />
        </Modal>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:slug" element={<Page />} />
        </Routes>
        <Footer />
      </div>
    </ProvideAuth>
  );
}

export default App;
