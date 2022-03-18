import React, { Dispatch, Fragment, SetStateAction } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

interface IModal {
  modalName: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export function Modal({ modalName, isOpen, setIsOpen }: IModal) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8209;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-emerald-100 shadow-xl rounded-2xl">
                {modalName === 'Sign In' ? <SignInForm /> : <SignUpForm />}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
