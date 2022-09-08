import React from "react";

export default function Testimonials() {
  const posts = [
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gxCrcJ9wcnuS-hppF4l8ggHaHa%26pid%3DApi&f=1",
      name: "Alicia Jhonson",
      title: "Student @ Harvard",
      content: "Backend Heros helped me to learn and grow",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mj1l753EgMwOfLFDRLvKxgHaHY%26pid%3DApi&f=1",
      name: "Kneau Bose",
      title: "Engineer @ ineuron",
      content: "This community is one of the best thing in my day",
    },
  ];

  return (
    <>
      <p className="font-semibold underline decoration-sec text-pri text-[24px] mt-[4rem]">
        Testimonials
      </p>
      <div className="flex justify-between mt-[2rem]">
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className="flex flex-col w-[45%] items-center text-black bg-off-white rounded-md shadow-sm mb-[24px] p-[18px]"
            >
              <div className="flex flex-col items-center ">
                <img
                  className="rounded-full h-[64px] w-[64px]"
                  alt="author"
                  src={post.imgURL}
                />
                <div className="text-center">
                  <p className="text-[18px] font-medium">{post.name}</p>
                  <p className="text-[16px]">{post.title}</p>
                </div>
              </div>
              <div className="my-[8px] text-[32px] font-bold">
                "{post.content}"
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
