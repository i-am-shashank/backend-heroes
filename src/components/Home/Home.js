import React from "react";
import Post from "./Post";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";

export default function Home() {
  return (
    <div className="w-[100%] lg:max-w-[780px] pb-[2rem]">
      <Post />
      <Testimonials />
      <FAQs />
    </div>
  );
}
