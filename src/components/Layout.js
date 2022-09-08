import React from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
export default function Layout({ children }) {
  return (
    <>
      <div className="relative flex justify-between p-[10px] xxl:px-[255px] xxl:py-[14px] lg:px-[24px] bg-white">
        <img
          alt="Backend Heroes"
          className="scale-[0.9]"
          src="https://res.cloudinary.com/dwmwpmrpo/image/upload/v1662388710/g3lxufrad91y3lmv5g1s.png"
        />
        <button className="drop-shadow hover:drop-shadow-lg active:scale-[0.95] flex items-center justify-between bg-pri px-4 rounded text-white cursor-pointer text-[14px]">
          <HiOutlineCursorClick className="mr-[4px]" />
          Login
        </button>
      </div>
      {children}
    </>
  );
}
