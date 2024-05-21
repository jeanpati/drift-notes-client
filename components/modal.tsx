import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

export default function Modal({
  showModal,
  setShowModal,
  title,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    }
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="outline outline-orange-500 bg-rose-100 rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <header className="flex justify-end items-center border-b pb-3">
          <button
            className="text-2xl text-black hover:text-red-500"
            aria-label="close"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
          <p className="text-xl font-semibold">{title}</p>
        </header>
        <section className="mt-4">{children}</section>
      </div>
    </div>
  );
}
