import React from "react";
import { MdGroups } from "react-icons/md";

export default function Groups() {
  const groups = [
    {
      title: "React Ninjas",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "28k",
    },
    {
      title: "Hirings",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "15k",
    },
    {
      title: "Code in Java",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "8k",
    },
    {
      title: "Linux",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "10k",
    },
    {
      title: "Mac Devs.",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "10k",
    },
    {
      title: "Networking",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "12k",
    },
    {
      title: "JS Guides",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "20k",
    },
    {
      title: "CP Problems",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "19k",
    },
    {
      title: "Node Js",
      content:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      tags: ["DSA", "Leetcode", "C++"],
      members: "19k",
    },
  ];
  return (
    <div className="flex flex-wrap justify-between">
      {groups.map((group, i) => {
        return (
          <div
            key={i}
            className="w-[100%] md:w-[218px] h-[201px] flex flex-col justify-between px-[12px] py-[8px] bg-off-white active:scale-[0.99] hover:shadow-lg rounded-md shadow-md cursor-pointer mb-[32px] lg:mx-[8px]"
          >
            <p className="font-bold text-pri text-[24px]">{group.title}</p>
            <p className="text-[16px] text-black">
              {group.content.substring(0, 85)}...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex">
                {group.tags.map((tag, i) => {
                  return (
                    <p
                      className="text-[11px] mr-2 text-white bg-sec rounded-md w-max px-[4px] opacity-[0.8]"
                      key={i}
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
              <div className="flex text-black text-[14px] items-center">
                <MdGroups className="ml-[8px] mr-[4px] text-[20px]" />{" "}
                {group.members}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
