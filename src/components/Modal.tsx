import { Dispatch, Fragment, SetStateAction, useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';

interface IModal {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  children: JSX.Element;
}

export function Modal({ isOpen, setIsOpen, children }: IModal) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const initRef = useRef(null);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={initRef}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
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
            <Dialog.Overlay className="fixed inset-0 bg-slate-500 opacity-60" />
          </Transition.Child>
          <span ref={initRef} className="inline-block h-screen align-middle" aria-hidden="true">
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
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
