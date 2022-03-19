import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Cases } from './components/Cases/Cases';

function App() {
  const [modalName, setModalName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header setSetTitleModal={setModalName} setIsOpen={setIsModalOpen} />
      <Modal modalName={modalName} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <Main />
      <Cases />
      <Footer />
    </div>
  );
}

export default App;
