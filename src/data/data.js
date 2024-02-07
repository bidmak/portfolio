import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import developer from "../assets/images/developer.jpeg";
import strathclyde from "../assets/images/lasu.jpeg";
import lasu from "../assets/images/lasu.jpeg";
import technician from "../assets/images/technician.jpeg";
import intern from "../assets/images/intern.jpeg";

export const companyName = "Bidmak";
export const name = "Samuel Makanjuola";
export const profession = "Software Engineer";

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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
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
      "In web development, I am proficient in both front-end and back-end frameworks. On the front end, I have expertise in React, creating dynamic and user-friendly interfaces. On the back end, I've worked extensively with Django, crafting robust and scalable APIs.",
      "My academic journey has equipped me with a solid foundation in various technologies, allowing me to contribute effectively to different stages of the development lifecycle. I am excited to bring my versatile skills and leadership experience to collaborative projects. Let's connect and explore opportunities together!",
    ],
    imgUrl: strathclyde,
    additionalImages: [technician, intern, strathclyde, developer],
    projectLink: "https://www.google.com",
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
    imgUrl: strathclyde,
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
  followLinks: followLinks,
  phoneNumber: "+44 (0)73 6667 3338",
  email: "bidmak4sure@yahoo.com",
  message:
    "Let's connect and explore exciting opportunities together! Whether you have a project idea, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through my details below or drop me an email. For recruiters, you can download my CV to learn more about my professional background.  Looking forward to connecting!",
};
