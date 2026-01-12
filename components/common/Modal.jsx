import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ReactDOM from "react-dom";

export default function Example({ open, onClose, title, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <Transition.Root show={open} as={Fragment} className="z-1">
      <Dialog as="div" className="absolute z-1000" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex justify-center p-4 text-center items-start pt-[260px] sm:pt-[220px]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex flex-col transform rounded-lg p-4 bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-xl w-full">
                {/* ❌ Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </button>

                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-3"
                >
                  {title || "Title"}
                </Dialog.Title>
                <div className="">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>,
    modalRoot
  );
}
