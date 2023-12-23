import React from "react";

interface IInputComponent {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputComponent: React.FC<IInputComponent> = (props) => {
  const { id, label, type, placeholder, value, onchange } = props;
  return (
    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
      <label
        className="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative  h-7"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="bg-[#ffffff] rounded-[5px] border-solid border-[#9889e1] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default InputComponent;
