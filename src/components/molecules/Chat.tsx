/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ShowMessage from "../atoms/ShowMessage";

const Chat: React.FC = () => {
  const message = `    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod quaerat tenetur nam quam voluptatem in dolor, culpa corporis similique. Fug. Molestiae distinctio, dolorem eligendi tempora itaque unde placeat velit eius fugit esse aperiam enim delectus inventore expedita reprehenderit rei`;

  const handleReply = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-2">
      <ShowMessage message={message} onclick={handleReply} />
    </div>
  );
};

export default Chat;
