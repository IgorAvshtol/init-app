import { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Form } from './components/Form';

function App() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onSignInBtnClick={setIsSignInModalOpen}
        onSignUpBtnClick={setIsSignUpModalOpen}
        setThisModalOpen={setIsModalOpen}
      />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <Form isSignInModalOpen={isSignInModalOpen} isSignUpModalOpen={isSignUpModalOpen} />
      </Modal>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
