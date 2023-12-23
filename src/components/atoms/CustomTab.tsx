import React from "react";
import { ICustomTabProps } from "../../interface/customTab";

const CustomTab: React.FC<ICustomTabProps> = (props) => {
  const { tabList, activeTab, onclick } = props;
  return (
    <div
      role="tablist"
      className="tabs tabs-boxed flex md:flex-row flex-col items-center justify-center gap-2 mb-4"
    >
      {tabList?.map((tab) => (
        <a
          href={tab.sectionId}
          className={`tab font-bold w-full ${
            activeTab?.id === tab?.id ? "tab-active" : ""
          }`}
          onClick={() => onclick(tab)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

export default CustomTab;
