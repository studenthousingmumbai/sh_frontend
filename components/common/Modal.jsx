import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactDOM from "react-dom";

export default function Example({ open, onClose, title, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  /*
   * Lock page scroll while modal is open.
   * Restore everything when modal closes/unmounts.
   */
  useEffect(() => {
    if (!open) {
      // Safety cleanup
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.overflow = "";

      return;
    }

    const bodyOverflow = document.body.style.overflow;
    const bodyPaddingRight = document.body.style.paddingRight;
    const htmlOverflow = document.documentElement.style.overflow;

    // Prevent background page scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.body.style.paddingRight = bodyPaddingRight;
      document.documentElement.style.overflow = htmlOverflow;
    };
  }, [open]);

  /*
   * Close modal with ESC
   */
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[100000] bg-gray-500/75 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="student-housing-modal-title"
      onMouseDown={handleBackdropClick}
    >
      <div className="flex justify-center p-4 text-center items-start pt-[260px] sm:pt-[220px]">
        <div
          className="relative flex flex-col rounded-lg p-4 bg-white text-left shadow-xl sm:w-full sm:max-w-xl w-full"
          onMouseDown={(event) => event.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <h3
            id="student-housing-modal-title"
            className="text-lg font-medium leading-6 text-gray-900 mb-3 pr-8"
          >
            {title || "Title"}
          </h3>

          <div>{children}</div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}