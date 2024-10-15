import { useState, useRef, useEffect } from "react";
import { BiX } from "react-icons/bi";

const Modal = ({ children, textBtn, className, id, icon, onOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef(null);

  const openModal = () => {
    if (dialogRef.current && !isModalOpen) {
      dialogRef.current.showModal();
      setIsModalOpen(true);
      if (onOpen) onOpen();
    }
  };

  const closeModal = () => {
    if (dialogRef.current && isModalOpen) {
      dialogRef.current.close();
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (dialogElement && isModalOpen) {
      const handleBackdropClick = (event) => {
        const dialogDimensions = dialogElement.getBoundingClientRect();
        if (
          event.clientX < dialogDimensions.left ||
          event.clientX > dialogDimensions.right ||
          event.clientY < dialogDimensions.top ||
          event.clientY > dialogDimensions.bottom
        ) {
          closeModal();
        }
      };

      dialogElement.addEventListener("click", handleBackdropClick);

      return () => {
        dialogElement.removeEventListener("click", handleBackdropClick);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <button className={className} onClick={openModal}>
        {icon}
        {textBtn}
      </button>
      <dialog
        ref={dialogRef}
        id={`modal-${id}`}
        className="modal"
        aria-modal="true"
        aria-labelledby={`modal-label-${id}`}
      >
        <div className="bg-bg_light dark:bg-bg_dark p-4 rounded-xl modal-box">
          <div className="flex justify-between items-center w-full">
            <h5 id={`modal-label-${id}`} className="text-secondary">
              {id}
            </h5>

            <div className="modal-action">
              <button onClick={closeModal} aria-label="Close modal">
                <BiX className="h-8 w-8" />
              </button>
            </div>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
