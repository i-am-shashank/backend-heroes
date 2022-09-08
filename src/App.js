import { useState, useRef } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { MdOutlineHome, MdOutlineGroups, MdEvent } from "react-icons/md";
import Home from "./components/Home/Home";
import Groups from "./components/Groups";
import Events from "./components/Events";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [ShowAuthorInro, setShowAuthorInro] = useState(true);
  return (
    <Layout>
      {/* top section */}
      {ShowAuthorInro && (
        <div className="z-[9] bg-[#0000004a] text-white h-[100vh] w-[100vw] top-0 left-0 fixed flex">
          <div className=" p-4 flex flex-col items-center w-[400px] h-[540px] bg-white self-center mx-auto rounded-md">
            <img
              className="h-[156px] w-[156px] rounded-full"
              src="https://shashank.vercel.app/profile.png"
            />
            <p className="text-black text-[24px] mt-4 font-bold">
              👋 Hi, I am the author
            </p>
            <p className="text-black text-[16px] mt-4 px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </p>
            <button
              onClick={() => setShowAuthorInro(false)}
              className="bg-pri text-white w-[8rem] h-[2rem] mt-8 rounded-md active:scale-[0.9] shadow-sm"
            >
              ok
            </button>
          </div>
        </div>
      )}
      <div
        className="flex flex-row justify-center w-[100vw] h-[568px] relative isolate z-[-1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 238, 238, 0) 14.06%, #EEEEEE 100%)",
        }}
      >
        <div className="absolute right-[-256px] top-[-256px] rounded-full z-[-1] opacity-[0.8] h-[512px] w-[512px]  bg-sec-l"></div>
        <div className="absolute right-[-128px] top-[128px] rounded-full z-[-1] opacity-[0.5] h-[256px] w-[256px] bg-pri"></div>
        <div className="relative isolate flex bg-hero bg-no-repeat w-[100%] mb-[2rem] mx-[10px] xxl:mx-[255px] lg:mx-[24px] text-white">
          <div
            className="absolute w-full h-full z-[-1]"
            style={{
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(74, 74, 74, 0.8) 99.48%),",
            }}
          ></div>
          <div className="flex flex-col mt-auto mb-[2rem] ml-[1rem] w-[80vw] md:w-[50%] h-[max-content]">
            <p className="flex flex-wrap font-bold text-[24px] md:text-[34px]">
              We Innovate, we design <p className="flex flex-wrap">we are the
              <p className="text-pri">&nbsp;Backend Heroes!</p></p>
            </p>
            <p className="text-[16px] md:text-[18px]">
              Welcome to Backend Heroes. You might be learning from any place,
              company or resource, we are here to help you. Post any of your
              doubt and there are other fellow coders along with our team to
              solve your doubts.
            </p>
          </div>
        </div>
      </div>

      {/* bottom section */}

      <div className="flex flex-col lg:w- lg:flex-row lg:justify-between h-3 w-full relative isolate pt-[2rem]  p-[10px] xxl:px-[255px] lg:px-[24px] py-[8px] xxl:justify-between bg-white">
        {/* sidebar */}
        <div className="flex flex-col border-pri border-t-[4px] lg:mr-4 rounded-sm lg:max-w-[38%] xxl:mr-[42px] lg:w-[340px]">
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

        <div className="w-max-content pb-[4rem] ">
          {selectedTab === "home" && <Home />}
          {selectedTab === "groups" && <Groups />}
          {selectedTab === "events" && <Events />}
        </div>
      </div>
    </Layout>
  );
}

export default App;
