import React from "react";
import { BiUpvote, BiCommentDetail } from "react-icons/bi";

export default function Post() {
  const posts = [
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Zz0nVELryfmBS9strggNFgAAAA%26pid%3DApi&f=1",
      name: "Hitesh Choudhary",
      time: "4 min ago",
      content: "I Guess Shashank Mishra will win this Hackathon. 🙊",
      likes: "7B",
      comments: "94M",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.g9ZTCB4hkiUBoUvhEmLECgAAAA%26pid%3DApi&f=1",
      name: "Some cool programmer",
      time: "1 day ago",
      content: "Programming is not so cool, but programmers are (;",
      likes: "12K",
      comments: "4M",
    },
  ];

  return (
    <>
      {posts.map((post, i) => {
        return (
          <div
            key={i}
            className="flex flex-col w-[100%] text-black bg-off-white rounded-md shadow-sm mb-[24px] p-[18px]"
          >
            <div className="flex items-center ">
              <img
                className="mr-[8px] rounded-full h-[64px] w-[64px]"
                alt="author"
                src={post.imgURL}
              />
              <div>
                <p className="text-[18px]">{post.name}</p>
                <p className="text-[16px]">{post.time}</p>
              </div>
            </div>
            <div className="my-[8px] text-[32px] font-bold">{post.content}</div>
            <div className="flex items-center">
              <BiUpvote className="mr-[4px]" />{" "}
              <p className="mr-[1rem]">{post.likes}</p>
              <BiCommentDetail className="mr-[4px]" /> <p>{post.comments}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
