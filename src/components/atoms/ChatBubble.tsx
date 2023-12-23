import React from "react";

interface IChatBubble {
  message: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  isRight?: boolean;
}

const ChatBubble: React.FC<IChatBubble> = (props) => {
  const { message, isRight = false, onclick } = props;
  return (
    <div className=" rounded-lg flex md:flex-row flex-col items-start justify-between">
      <div className={`chat ${isRight ? "chat-end" : "chat-start"}`}>
        <div className="chat-bubble chat-bubble-info">{message}</div>
      </div>
      <button className="btn btn-success" onClick={onclick}>
        Reply
      </button>
    </div>
  );
};

export default ChatBubble;
