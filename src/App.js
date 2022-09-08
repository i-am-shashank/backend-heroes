import { useState, useRef } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { MdOutlineHome, MdOutlineGroups, MdEvent } from "react-icons/md";
import Home from "./components/Home/Home";
import Groups from "./components/Groups";
import Events from "./components/Events";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <Layout>
      {/* top section */}

      <div
        className="flex flex-row justify-center w-[100vw] h-[568px]] relative isolate z-[-1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 238, 238, 0) 14.06%, #EEEEEE 100%)",
        }}
      >
        <div className="absolute right-[-256px] top-[-256px] rounded-full z-[-1] opacity-[0.8] h-[512px] w-[512px] bg-sec-l"></div>
        <div className="absolute right-[-128px] top-[128px] rounded-full z-[-1] opacity-[0.5] h-[256px] w-[256px] bg-pri"></div>

        <img
          src="https://res.cloudinary.com/dwmwpmrpo/image/upload/v1662388675/icpzixt53lrqzbimmgir.png"
          className="max-h-[512px] mb-[2rem] px-[255px]"
        />
      </div>

      {/* bottom section */}

      <div className="flex relative isolate pt-[4rem] px-[255px] justify-between bg-white">
        <img
          alt="img"
          className="absolute mt-[2rem] w-[20vw] z-[-1] left-0"
          src="https://res.cloudinary.com/dwmwpmrpo/image/upload/v1662479151/xihijvreuiwvrs44w3h5.png"
        />

        {/* sidebar */}
        <div className="w-[456px] border-pri border-t-[4px] rounded-sm max-w-[40%] mr-[42px]">
          <div
            onClick={() => setSelectedTab("home")}
            className="flex items-center text-black text-[16px] cursor-pointer my-[1rem] hover:text-pri active:scale-[0.99] "
          >
            <MdOutlineHome className="mr-[8px] text-[24px]" /> Home
          </div>
          <div
            onClick={() => setSelectedTab("groups")}
            className="flex items-center text-black text-[16px] cursor-pointer my-[1rem] hover:text-pri active:scale-[0.99] "
          >
            <MdOutlineGroups className="mr-[8px] text-[24px]" /> Explore Groups
          </div>
          <div
            onClick={() => setSelectedTab("events")}
            className="flex items-center text-black text-[16px] cursor-pointer my-[1rem] hover:text-pri active:scale-[0.99] "
          >
            <MdEvent className="mr-[8px] text-[24px]" /> Events
          </div>
        </div>

        <div className="max-w-[864px] w-[100%] mb-[4rem]">
          {selectedTab === "home" && <Home />}
          {selectedTab === "groups" && <Groups />}
          {selectedTab === "events" && <Events />}
        </div>
      </div>
    </Layout>
  );
}

export default App;
