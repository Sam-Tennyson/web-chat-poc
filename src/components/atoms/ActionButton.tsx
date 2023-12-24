import { IActionButton } from "../../interface/actionButton";
import Loading from "./Loading";

const ActionButton = (props: IActionButton) => {
  const { text, onclick, isLoading, disabled, customClass, isSubmit } = props;
  return (
    <>
      <button
        type={isSubmit ? "submit" : "button"}
        disabled={disabled || isLoading}
        className={`${disabled ? "btn-disabled" : ""} ${
          customClass ?? ""
        } min-w-[100px]`}
        onClick={onclick}
      >
        {isLoading ? <Loading /> : text}
      </button>
    </>
  );
};

export default ActionButton;
