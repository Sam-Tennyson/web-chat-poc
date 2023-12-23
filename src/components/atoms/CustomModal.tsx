import React, { ReactNode } from "react";

interface ICustomModal {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<ICustomModal> = (props) => {
  const { children, isOpen = false, onClose } = props;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 justify-center items-center transition-opacity duration-500 ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg shadow-md lg:w-[40%] md:w-[60%] w-[90%] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomModal;
