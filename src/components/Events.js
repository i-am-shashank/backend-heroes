import React from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { MdOutlineFrontHand } from "react-icons/md";

export default function Events() {
  const events = [
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Zz0nVELryfmBS9strggNFgAAAA%26pid%3DApi&f=1",
      name: "Hitesh Choudhary",
      time: "4 min ago",
      date: "04 - 09 - 2022",
      content: "REACT.JS Live Podcast on Today",
      attending: "12k",
    },
  ];

  return (
    <>
      {events.map((event, i) => {
        return (
          <div
            key={i}
            className="flex flex-col lg:w-[60vw] xl:w-full text-black bg-off-white rounded-md shadow-sm mb-[24px] p-[18px]"
          >
            <div className="flex justify-between">
              <div className="flex items-center ">
                <img
                  className="mr-[8px] rounded-full h-[46px] w-[46px] lg:h-[64px] lg:w-[64px]"
                  alt="author"
                  src={event.imgURL}
                />
                <div>
                  <p className="text-[16px] lg:text-[18px]">{event.name}</p>
                  <p className="text-[11px] lg:text-[16px]">{event.time}</p>
                </div>
              </div>
              <p className="bg-sec text-[12px] lg:text-[14px] text-white h-max px-2 py-1 rounded-md opacity-[0.9]">
                {event.date}
              </p>
            </div>
            <div className="my-[18px] text-[24px] lg:text-[32px] font-bold ">
              {event.content}
            </div>
            <div className="flex items-center text-[14px] lg:text-[16px]">
              <MdOutlineFrontHand className="mr-[4px]" />{" "}
              <p className="mr-[1rem]">{event.attending} attending</p>
              <BiCalendarEvent className="mr-[4px]" />{" "}
              <p className="cursor-pointer active:scale-[0.99]">
                add to calender
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
