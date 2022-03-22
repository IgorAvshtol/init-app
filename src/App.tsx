import { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

import { SignInForm } from './components/SignInForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleSignInModal = () => {
    setIsSignInModalOpen((isOpen) => !isOpen);
  };

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen((isOpen) => !isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSignInBtnClick={toggleSignInModal} onSignUpBtnClick={toggleSignUpModal} />
      <Modal isOpen={isSignInModalOpen} onClose={toggleSignInModal}>
        <SignInForm />
      </Modal>
      <Modal isOpen={isSignUpModalOpen} onClose={toggleSignUpModal}>
        <SignUpForm />
      </Modal>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
