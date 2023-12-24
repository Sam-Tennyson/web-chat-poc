import React from "react";

const Loading: React.ComponentType<any> = (props) => {
  const { customClass } = props;
  return (
    <span
      className={`loading loading-spinner ${customClass || "loading-xs"}`}
    ></span>
  );
};

export default Loading;
