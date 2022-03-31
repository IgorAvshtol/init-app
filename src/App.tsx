import { useCallback, useState } from 'react';

import { SignInForm } from './components/SignInForm';
import { SignUpForm } from './components/SignUpForm';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ProvideAuth } from './components/hooks/useProvideAuth';

function App() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleSignInModal = useCallback(() => {
    setIsSignInModalOpen((isOpen) => !isOpen);
  }, []);
  const toggleSignUpModal = useCallback(() => {
    setIsSignUpModalOpen((isOpen) => !isOpen);
  }, []);
  return (
    <ProvideAuth>
      <div className="min-h-screen flex flex-col">
        <Header onSignInBtnClick={toggleSignInModal} onSignUpBtnClick={toggleSignUpModal} />
        <Modal isOpen={isSignInModalOpen} onClose={toggleSignInModal}>
          <SignInForm onSignIn={toggleSignInModal} />
        </Modal>
        <Modal isOpen={isSignUpModalOpen} onClose={toggleSignUpModal}>
          <SignUpForm onSignUp={toggleSignUpModal} />
        </Modal>
        <Main />
        <Footer />
      </div>
    </ProvideAuth>
  );
}

export default App;
