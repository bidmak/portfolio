import React from "react";

const FollowMe = ({ followLinks, lnkStyle, iconStyle }) => {
  return (
    <>
      <span class="text-[16px] font-medium">Follow me:</span>
      <ul class="flex items-center relative top-[5px] ml-2">
        {followLinks.map((LinkItem) => {
          return (
            <li className="group mr-2" key={LinkItem.profile}>
              <a
                class={`inline-block relative rounded-full ${
                  lnkStyle ? lnkStyle : ""
                } `}
                href={LinkItem.link}
                target="_blank"
                rel="noreferrer"
                title={`Follow me on ${LinkItem.profile}`}
              >
                {React.cloneElement(LinkItem.icon, {
                  className: `absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    iconStyle ? iconStyle : ""
                  }`,
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
