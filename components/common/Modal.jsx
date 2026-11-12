import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactDOM from "react-dom";

export default function Example({
  open,
  onClose,
  title,
  children,
  noScroll = false,
}) {
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
      className="fixed inset-0 z-[100000] bg-gray-500/75"
      role="dialog"
      aria-modal="true"
      aria-labelledby="student-housing-modal-title"
      onMouseDown={handleBackdropClick}
    >
      {/* Centered in the viewport, no outer scrollbar */}
      <div
        className="flex h-full w-full items-center justify-center p-2 sm:p-4"
        onMouseDown={handleBackdropClick}
      >
        {/* Panel never taller than the screen (desktop + mobile) */}
        <div
          className="relative flex w-full flex-col rounded-lg bg-white p-4 text-left shadow-xl sm:max-w-xl max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)]"
          onMouseDown={(event) => event.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => onClose()}
            className="absolute top-3 right-3 z-20 p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <h3
            id="student-housing-modal-title"
            className="mb-3 shrink-0 pr-8 text-lg font-medium leading-6 text-gray-900"
          >
            {title || "Title"}
          </h3>

          {/* noScroll: no scrollbar (video). Default: scrolls only if content is taller than the screen */}
          <div
            className={
              noScroll
                ? "min-h-0 flex-1 overflow-hidden"
                : "min-h-0 flex-1 overflow-y-auto"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}