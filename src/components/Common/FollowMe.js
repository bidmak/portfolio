import React from "react";

const FollowMe = ({ followLinks }) => {
  return (
    <>
      <span class="text-[16px] font-medium">Follow me:</span>
      <ul class="flex items-center relative top-[5px] ml-[20px]">
        {followLinks.map((LinkItem) => {
          return (
            <li className="group mr-2" key={LinkItem.profile}>
              <a
                class="inline-block relative w-[54px] h-[54px] bg-stone-100 rounded-full  hover:bg-stone-800"
                href={LinkItem.link}
                target="_blank"
                alt={LinkItem.profile}
              >
                {React.cloneElement(LinkItem.icon, {
                  className:
                    "absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:fill-white group-hover:text-2xl",
                })}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FollowMe;
