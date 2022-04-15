import { Fragment, useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { useAuth } from 'hooks/useProvideAuth';

interface IModal {
  onClose: () => void;
  isOpen: boolean;
  children: JSX.Element;
}

export function Modal({ isOpen, onClose, children }: IModal) {
  const { error, setError } = useAuth();
  const initRef = useRef(null);
  const onCloseModal = () => {
    onClose();
    setError('');
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={initRef}
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        onClose={onCloseModal}
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
            <div className="inline-block z-30 max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-emerald-100 shadow-xl rounded-2xl">
              {children}
              {error && <div className="pt-2 w-64 text-red-600 text-center">{error}</div>}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
