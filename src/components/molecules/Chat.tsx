import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

// components
import ShowMessage from "../atoms/ShowMessage";
import CustomModal from "../atoms/CustomModal";
import ActionButton from "../atoms/ActionButton";

// services
import { createSession } from "../../services/sessions";

const Chat: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => setOpenModal(true);
  const hideModal = () => setOpenModal(false);

  const resetModal = () => {
    hideModal();
    setPhoneNumber("");
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createSession,
    onSuccess: async () => {
      // Invalidate and refetch
      console.log("success");
      resetModal();
    },
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSend = () => {
    const payload = {
      msg: phoneNumber,
    };

    mutate({ payload });
  };

  const message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod quaerat tenetur nam quam voluptatem in dolor, culpa corporis similique. Fug. Molestiae distinctio, dolorem eligendi tempora itaque unde placeat velit eius fugit esse aperiam enim delectus inventore expedita reprehenderit rei`;

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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={"Type the message you want to send..."}
              className="bg-[#ffffff] pt-2.5 pr-[15px] pb-2.5 pl-[15px] rounded-[5px] border-solid border-[#9889e1] border flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
            ></textarea>
            <div className="flex justify-end items-center gap-4">
              <ActionButton
                text={"Close"}
                onclick={resetModal}
                customClass="btn btn-error"
              />
              <ActionButton
                text={"Add"}
                isLoading={isPending}
                onclick={handleSend}
                customClass="btn btn-info"
              />
            </div>
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
