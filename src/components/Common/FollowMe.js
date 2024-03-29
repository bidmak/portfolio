import React from "react";

const FollowMe = ({ followLinks, lnkStyle, iconStyle }) => {
  return (
    <>
      <span className="text-[16px] font-medium ">Follow me:</span>
      <ul className="flex items-center space-x-2 relative top-[5px] ml-2">
        {followLinks.map((LinkItem) => {
          return (
            <li className="group " key={LinkItem.profile}>
              <a
                className={`inline-block relative rounded-full ${
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
