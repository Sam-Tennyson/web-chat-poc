/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

// components
import CustomTab from "../components/atoms/CustomTab";
import StartSession from "../components/molecules/StartSession";
import Chat from "../components/molecules/Chat";
import QRComponent from "../components/molecules/QRComponent";

// constants
import { STRINGS, TAB_OPTIONS } from "../shared/constants";
import CustomModal from "../components/atoms/CustomModal";
import { openModal } from "../shared/utilies";

const Home = () => {
  const [activeTab, setActiveTab] = useState<any>(TAB_OPTIONS?.[0]);

  const renderSkillComponents = () => {
    switch (activeTab?.label) {
      case STRINGS.START_NEW_SESSION:
        return (
          <section>
            <StartSession />{" "}
          </section>
        );
      case STRINGS.CHAT:
        return (
          <section>
            <Chat />{" "}
          </section>
        );
      case STRINGS.PHONE_NUMBER:
        return (
          <section>
            <QRComponent />{" "}
          </section>
        );
      default:
        console.log("Tab not found");
        return <div>Coming Soon ...</div>;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      openModal("test");
    }, 3000);
  }, []);
  return (
    <>
      <CustomModal id="test">
        <h3>jkjkjkj</h3>
      </CustomModal>
      <CustomTab
        tabList={TAB_OPTIONS}
        activeTab={activeTab}
        onclick={(data) => setActiveTab(data)}
      />
      {renderSkillComponents()}
    </>
  );
};

export default Home;
