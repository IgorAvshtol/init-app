import React, { createContext, useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Form, ISignUpData } from './components/Form';
import { IResponse, useRegister } from './hooks/useRegister';

export const userDataContext = createContext<IResponse | null | undefined>(null);

function App() {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerData, setRegisterData] = useState<ISignUpData>();
  const { userData, error } = useRegister(registerData);

  return (
    <userDataContext.Provider value={userData?.user}>
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
            setRegisterData={setRegisterData}
            setIsOpen={setIsModalOpen}
          />
        </Modal>
        <Main />
        <Footer />
      </div>
    </userDataContext.Provider>
  );
}

export default App;
