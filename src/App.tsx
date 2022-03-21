import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Form } from './components/Form';

function App() {
  const [onSignInButtonClick, setOnSignInButtonClick] = useState(false);
  const [onSignUpButtonClick, setOnSignUpButtonClick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        setOnSignInButtonClick={setOnSignInButtonClick}
        setOnSignUpButtonClick={setOnSignUpButtonClick}
        setIsOpen={setIsModalOpen}
      />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <Form signUpModalOpen={onSignUpButtonClick} signInModalOpen={onSignInButtonClick} />
      </Modal>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
