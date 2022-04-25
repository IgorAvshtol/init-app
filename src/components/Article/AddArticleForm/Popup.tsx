import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/store';
import { closeModal } from 'store/articles/articleSlice';
import { TypeLoadingStatus } from 'interfaces';

export function Popup() {
  const { error, loading, isSuccess } = useAppSelector((state) => state.articles);
  const initRef = useRef(null);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    setIsOpen(false);
    dispatch(closeModal());
  }
  useEffect(() => {
    if (loading === TypeLoadingStatus.IS_REJECTED || isSuccess) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [error, isSuccess, loading]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={initRef}
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={close}
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
              <div className="inline-block h-28 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className={
                    error
                      ? 'flex justify-center item-center w-full mt-6 text-lg font-medium leading-6 text-red-600'
                      : 'flex justify-center item-center w-full mt-6 text-lg font-medium leading-6 text-green-500'
                  }
                >
                  {error && error}
                  {isSuccess && 'Popup'}
                </Dialog.Title>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
