import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import developer from "../assets/images/developer.jpeg";
import strathclyde from "../assets/images/strathclyde.png";
import lasu from "../assets/images/lasu.jpeg";
import technician from "../assets/images/technician.jpeg";
import intern from "../assets/images/intern.jpeg";
import auction from "../assets/images/auction.png";

export const companyName = "Bidmak";
export const name = "Samuel Makanjuola";
export const profession = "Software Engineer";

export const instagram = "https://www.instagram.com/_bidmak";
export const aboutMe = (
  <>
    I'm a versatile <span className="font-medium">{profession}</span>, based in
    Glasgow, UK, dedicated to bringing creative ideas to life through robust and
    user-friendly applications.
  </>
);

export const followLinks = [
  {
    profile: "instagram",
    link: "https://www.instagram.com/_bidmak",
    icon: <IoLogoInstagram />,
  },
  {
    profile: "linkedin",
    link: "https://www.linkedin.com/in/samuel-makanjuola-8118a0212",
    icon: <IoLogoLinkedin />,
  },
  {
    profile: "github",
    link: "https://github.com/bidmak",
    icon: <IoLogoGithub />,
  },
];

export const navItems = {
  home: {
    page: "Home",
    label: "home",
  },
  about: {
    page: "About",
    label: "about",
  },
  experience: {
    page: "Experience",
    label: "experience",
  },
  projects: {
    page: "Projects",
    label: "projects",
  },
  contact: {
    page: "Contact",
    label: "contact",
  },
};

export const aboutDetails = (
  <>
    Hi, my name is {name}, and I live in Glasgow, UK. I'm a passionate and
    results-driven individual with a master's degree in Advanced Software
    Engineering from the University of Strathclyde. My diverse experience
    includes leading teams in projects ranging from mobile apps and big data
    analysis to web development. Outside of tech, I'm enthusiastic about music,
    exploring new destinations, and immersing myself in captivating reads. My
    diverse personal interests complement my love for technology.
    <br />
    <br />
    In web development, I am proficient in both front-end and back-end
    frameworks. On the front end, I have expertise in React, creating dynamic
    and user-friendly interfaces. On the back end, I've worked extensively with
    Django, crafting robust and scalable APIs.
    <br />
    <br />
    My academic journey has equipped me with a solid foundation in various
    technologies, allowing me to contribute effectively to different stages of
    the development lifecycle. I am excited to bring my versatile skills and
    leadership experience to collaborative projects. Let's connect and explore
    opportunities together!
  </>
);

export const mySkills = [
  "Python",
  "Django",
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Express.js",
  "Angular",
  "Flask",
  "Kotlin",
  "SQL",
  "NoSQL",
  "MongoDB",
  "TensorFlow",
  "Sci-Kit-Learn",
  "UI/UX",
  "Github",
];

export const experiences = [
  {
    startDate: "Jan 2023",
    endDate: "Jan 2024",
    company: "University of Strathclyde",
    title: "MSc Adv. Software Engr",
    description: [
      "Collaborative software engineer adept at understanding cross-team requirements. Specialized in crafting...",
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    link: "#",
    imgUrl: strathclyde,
  },
  {
    startDate: "Jan 2021",
    endDate: "Jan 2023",
    company: "Outcess Limited",
    title: "Software Developer",
    description: [
      "Collaborative software engineer adept at understanding cross-team requirements. Specialized in crafting...",
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    link: "#",
    imgUrl: developer,
  },
  {
    startDate: "Jan 2019",
    endDate: "Jan 2021",
    company: "Netcom Africa Limited",
    title: "Support Engineer",
    description: [
      "Collaborative software engineer adept at understanding cross-team requirements. Specialized in crafting...",
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    link: "#",
    imgUrl: technician,
  },
  {
    startDate: "Jan 2017",
    endDate: "Jan 2019",
    company: "TotalEnergies",
    title: "Graduate Engineer",
    description: [
      "Collaborative software engineer adept at understanding cross-team requirements. Specialized in crafting...",
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    link: "#",
    imgUrl: technician,
  },
  {
    startDate: "Jan 2012",
    endDate: "Jan 2017",
    company: "Lagos State University",
    title: "BSc Mechanical Engr",
    description: [
      "Collaborative software engineer adept at understanding cross-team requirements. ido is a leading web design agency with an award-winning design team that creates innovative, effecti Specialized in crafting...",
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    link: "#",
    imgUrl: lasu,
  },
  {
    startDate: "Jan 2016",
    endDate: "Dec 2016",
    company: "Beta Glass PLC",
    title: "Mech Engr Intern",
    description: [
      "Collaborative software engineer adept at understanding cross-team requirements. Specialized in crafting...",
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    link: "#",
    imgUrl: intern,
  },
];

export const projects = [
  {
    projectName: "E-Commerce Website",
    projectType: "Web Development",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    imgUrl: strathclyde,
    additionalImages: [technician, intern, strathclyde, developer],
    projectLink: "https://www.google.com",
  },
  {
    projectName: "E-Commerce Website",
    projectType: "Web Development",
    description: ["Job Description", "Job Description", "Job Description"],
    imgUrl: developer,
  },
  {
    projectName: "E-Commerce Website",
    projectType: "Web Development",
    description: ["Job Description", "Job Description", "Job Description"],
    imgUrl: auction,
  },
  {
    projectName: "E-Commerce Website",
    projectType: "Web Development",
    description: ["Job Description", "Job Description", "Job Description"],
    imgUrl: strathclyde,
  },
  {
    projectName: "E-Commerce Website",
    projectType: "Web Development",
    description: ["Job Description", "Job Description", "Job Description"],
    imgUrl: developer,
  },
];

export const popData = {
  startDate: "Start Month - Year",
  endDate: "End Month - Year",
  company: "Company Name",
  imgUrl: "",
  title: "Job Title",
  description: ["Job Description", "Job Description", "Job Description"],
  projectName: "Project's Name",
  projectType: "Project's Type",
  projectLink: "Project's Link",
};

export const contactDetails = {
  phoneNumber: "This is my phone number",
};
