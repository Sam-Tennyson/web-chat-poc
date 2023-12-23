import React, { useState } from "react";
import ReactQRCode from "../atoms/ReactQRCode";
import InputComponent from "../atoms/InputComponent";

const QRComponent: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

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
            <button className="btn btn-info w-28">Send</button>
          </div>
        </div>
        <ReactQRCode value="https://softwarehelpernews.com/" size={256} />
      </div>
    </>
  );
};

export default QRComponent;
