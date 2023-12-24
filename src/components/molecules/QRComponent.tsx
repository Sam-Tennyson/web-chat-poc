// libs
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

// components
import ReactQRCode from "../atoms/ReactQRCode";
import InputComponent from "../atoms/InputComponent";
import ActionButton from "../atoms/ActionButton";

// services
import { createSession } from "../../services/sessions";

const QRComponent: React.FC = () => {
  // Mutations
  const { mutate, isPending } = useMutation({
    mutationFn: createSession,
    onSuccess: async () => {
      // Invalidate and refetch
      console.log("success");
      setPhoneNumber("");
    },
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSend = () => {
    const payload = {
      phone: phoneNumber,
    };

    mutate({ payload });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <div className="flex sm:flex-row flex-col justify-between  gap-4 items-end lg:w-[40%] md:w-[60%] w-full mx-auto">
          <div className="flex-1 w-full">
            <InputComponent
              label="Phone number"
              value={phoneNumber}
              placeholder={"Enter your phone number"}
              onchange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <ActionButton
              text={"Send"}
              isLoading={isPending}
              onclick={handleSend}
              customClass="btn btn-info"
            />
          </div>
        </div>
        <ReactQRCode value="https://softwarehelpernews.com/" size={256} />
      </div>
    </>
  );
};

export default QRComponent;
