import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

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
