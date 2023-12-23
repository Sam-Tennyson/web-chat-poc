import React, { ReactNode } from "react";

interface ICustomModal {
  children: ReactNode;
  id: string;
}

const CustomModal: React.FC<ICustomModal> = (props) => {
  const { children, id } = props;
  return (
    <>
      <div
        id={id}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 justify-center items-center hidden transition-opacity duration-500"
      >
        <div className="bg-white rounded-lg shadow-md  w-4/5 flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomModal;
