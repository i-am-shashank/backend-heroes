import React from "react";
import Post from "./Post";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";

export default function Home() {
  return (
    <div className="w-[100%]">
      <Post />
      <Testimonials />
      <FAQs />
    </div>
  );
}
