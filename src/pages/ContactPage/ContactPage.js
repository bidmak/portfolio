import React from "react";
import FollowMe from "../../components/Common/FollowMe";
import AboutSvg from "../../components/Common/AboutSvg";
import { GiShamrock } from "react-icons/gi";
import { PiShootingStarLight } from "react-icons/pi";
import { PiStarLight } from "react-icons/pi";

const ContactPage = ({ id, contactDetails }) => {
  return (
    <section
      id={id}
      className="contact-section w-full h-auto clear-both bg-neutral-950"
    >
      <div className="container py-[120px] text-white relative">
        <div className="mx-28 mb-28">
          <h3 className="mb-5 text-[44px] font-bold">Let's work together</h3>
          <p className="text-neutral-400 font-light leading-[28px]">
            {contactDetails.message}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="personal-contacts flex space-x-20">
            <div className="phone-number space-y-2">
              <span className="text-neutral-400">Call:</span>
              <h3 className="font-semibold text-2xl tracking-[-0.5px]">
                {contactDetails.phoneNumber}
              </h3>
            </div>
            <div className="email space-y-2">
              <span className="text-neutral-400">Email:</span>
              <h3 className="font-semibold text-2xl tracking-[-0.5px]">
                {contactDetails.email}
              </h3>
            </div>
          </div>
          <div className="social-medias flex items-center">
            <FollowMe
              followLinks={contactDetails.followLinks}
              lnkStyle="w-[52px] h-[52px] bg-neutral-700 rounded-full  group-hover:bg-neutral-50"
              iconStyle="fill-white group-hover:fill-black group-hover:text-2xl"
            />
          </div>
        </div>
        <AboutSvg className="absolute right-32 top-32 w-[56px] h-[56px] scale-x-[-1]" />
        <GiShamrock className="absolute left-6  w-[60px] h-[60px] fill-neutral-300 -rotate-12" />
        <PiShootingStarLight className="absolute left-28 top-64 w-[30px] h-[30px] fill-neutral-400 -rotate-12" />
        <PiStarLight className="absolute left-[140px] top-56  w-[28px] h-[28px] fill-neutral-200 -rotate-12" />
      </div>
    </section>
  );
};

export default ContactPage;
