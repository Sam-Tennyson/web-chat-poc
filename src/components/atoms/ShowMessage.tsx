import React from "react";

interface IChatBubble {
  message: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ShowMessage: React.FC<IChatBubble> = (props) => {
  const { message, onclick } = props;
  return (
    <div className="flex md:flex-row flex-col md:items-start items-end justify-between gap-4 shadow-lg border-[1px] border-slate-400 rounded-lg p-4">
      <div className={`flex-1 `}>
        <div className="">{message}</div>
      </div>
      <button className="btn btn-success" onClick={onclick}>
        Reply
      </button>
    </div>
  );
};

export default ShowMessage;
