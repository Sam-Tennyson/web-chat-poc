/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ShowMessage from "../atoms/ShowMessage";
import CustomModal from "../atoms/CustomModal";

const Chat: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => setOpenModal(true);
  const hideModal = () => setOpenModal(false);
  const message = `    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod quaerat tenetur nam quam voluptatem in dolor, culpa corporis similique. Fug. Molestiae distinctio, dolorem eligendi tempora itaque unde placeat velit eius fugit esse aperiam enim delectus inventore expedita reprehenderit rei`;

  const handleReply = (data: any) => {
    console.log(data);
    showModal();
  };
  return (
    <>
      {openModal && (
        <CustomModal isOpen={openModal} onClose={hideModal}>
          <div className="flex flex-col gap-5 p-6">
            <h2 className="font-bold font-xl">Message</h2>
            <textarea
              cols={30}
              rows={4}
              placeholder={"Type the message you want to send..."}
              className="bg-[#ffffff] pt-2.5 pr-[15px] pb-2.5 pl-[15px] rounded-[5px] border-solid border-[#9889e1] border flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
            ></textarea>
            <button className="btn btn-info">Add</button>
          </div>
        </CustomModal>
      )}
      <div className="flex flex-col gap-2">
        <ShowMessage message={message} onclick={handleReply} />
      </div>
    </>
  );
};

export default Chat;
