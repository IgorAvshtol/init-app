import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

import lens from 'image/lens.webp';

export function Image() {
  const initRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const zoomOut = () => {
    setIsOpen(false);
  };
  const zoomIn = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="inset-0 mt-4 flex items-center justify-center">
        <button type="button" onClick={zoomIn} className="cursor-zoom-in">
          <img src={lens} className="w-full" alt="image" />
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 bg-emerald-50"
          initialFocus={initRef}
          onClose={zoomOut}
        >
          <div className="text-center">
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
            <span ref={initRef} className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
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
              <div className="inline-block w-5/6 p-6 mt-4 transition-all transform bg-white shadow-xl rounded-2xl">
                <img src={lens} className="w-full" alt="image" />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
