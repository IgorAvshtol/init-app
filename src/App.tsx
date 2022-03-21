import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Form, ISignUpData } from './components/Form';
import useAuth from './hooks/useAuth';

function App() {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authData, setAuthData] = useState<ISignUpData>();
  const { userData, error } = useAuth(authData);
  console.log(userData);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        setSignInModalOpen={setSignInModalOpen}
        setSignUpModalOpen={setSignUpModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <Form
          signUpModalOpen={signUpModalOpen}
          signInModalOpen={signInModalOpen}
          setAuthData={setAuthData}
        />
      </Modal>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
