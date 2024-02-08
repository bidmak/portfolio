import React from "react";
import FollowMe from "../../components/Common/FollowMe";
import AboutSvg from "../../components/Common/AboutSvg";
import DownloadSvg from "../../components/Common/DownloadSvg";
import Resume from "../../data/cv/Samuel_Makanjuola_Resume.pdf";
import { GiShamrock } from "react-icons/gi";
import { PiShootingStarLight } from "react-icons/pi";
import { PiStarLight } from "react-icons/pi";

const ContactPage = ({ id, contactDetails }) => {
  return (
    <section id={id} className="w-full h-auto clear-both bg-neutral-950">
      <div className="container py-[120px] text-white relative">
        <div className="mx-28 mb-28 flex items-center justify-between space-x-10">
          <div className="info">
            <h3 className="mb-5 text-heading">Let's work together</h3>
            <p className="text-neutral-400 font-light leading-[28px]">
              {contactDetails.message}
            </p>
          </div>
          <div className="w-auto">
            <a
              className="group space-x-4 whitespace-nowrap font-semibold text-lg text-white bg-[#6244c5]  px-[30px] py-[15px] rounded-xl transition duration-300 hover:text-black hover:bg-neutral-50"
              href={Resume}
              download="Samuel_Makanjuola_CV.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download my CV"
            >
              Download CV
              <DownloadSvg className="inline-block ms-3 fill-white transition duration-300 group-hover:fill-black group-hover:text-2xl" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-20">
          <div className="flex space-x-20">
            <div className="space-y-2">
              <span className="text-neutral-400">Call:</span>
              <h3 className="font-semibold text-2xl tracking-[-0.5px]">
                {contactDetails.phoneNumber}
              </h3>
            </div>
            <div className="space-y-2">
              <span className="text-neutral-400">Email:</span>
              <h3 className="relative font-semibold text-2xl tracking-[-0.5px]">
                {contactDetails.email}
                <a
                  className="absolute inset-0"
                  href={`mailto:${contactDetails.email}`}
                  target="_blank"
                  rel="noreferrer"
                  title={`Send an email to ${contactDetails.email}`}
                ></a>
              </h3>
            </div>
          </div>
          <div className="flex items-center">
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
