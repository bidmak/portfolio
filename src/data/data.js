import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import test3 from "../assets/images/3.jpeg";
import test4 from "../assets/images/4.png";
import test5 from "../assets/images/5.png";

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
  "Javascript",
  "React",
  "SQL",
  "HTML",
  "CSS",
  "Express.js",
  "Angular",
  "Flask",
  "Kotlin",
  "NoSQL",
  "MongoDB",
  "TensorFlow",
  "UI/UX",
  "Github",
  "Sci-Kit-Learn",
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
    imgUrl: test3,
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
    imgUrl: test3,
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
    imgUrl: test3,
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
    imgUrl: test3,
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
    imgUrl: test3,
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
    imgUrl: test3,
  },
];

export const projects = [
  {
    projectName: "My Portfolio Website",
    projectType: "Web Development",
    description: [
      "Welcome to my project, a showcase of creativity, innovation, and technical excellence! Built with React and 99% Tailwind CSS, this project embodies the perfect fusion of cutting-edge technology and stunning design.",
      "Fully responsive and meticulously crafted, my project adapts seamlessly to every screen size, ensuring a flawless experience for every user. With features like dark and light mode, users can customize their viewing experience to suit their preferences, enhancing accessibility and usability.",
      "But that's not all – my project offers a range of convenient features to elevate the user experience. With just one click, visitors can download my CV directly from the site, making it easier than ever for recruiters to access my credentials. Additionally, users can effortlessly send an email directly from the site, streamlining communication and fostering engagement.",
      "Beyond its functionality, my project boasts an intuitive user interface designed to delight and captivate visitors. From its sleek design to its smooth animations, every detail has been meticulously crafted to ensure a memorable and enjoyable experience.",
      "Join me on this journey as I showcase my skills, passion, and dedication to excellence in web development. Explore my project today and discover the perfect blend of technology and creativity.",
    ],
    imgUrl: test5,
    additionalImages: [test4, test4, test5],
    projectLink: "https://samuelbidmak.vercel.app/",
  },
  {
    projectName: "My Portfolio Website",
    projectType: "Web Development",
    description: [
      "Welcome to my project, a showcase of creativity, innovation, and technical excellence! Built with React and 99% Tailwind CSS, this project embodies the perfect fusion of cutting-edge technology and stunning design.",
      "Fully responsive and meticulously crafted, my project adapts seamlessly to every screen size, ensuring a flawless experience for every user. With features like dark and light mode, users can customize their viewing experience to suit their preferences, enhancing accessibility and usability.",
      "But that's not all – my project offers a range of convenient features to elevate the user experience. With just one click, visitors can download my CV directly from the site, making it easier than ever for recruiters to access my credentials. Additionally, users can effortlessly send an email directly from the site, streamlining communication and fostering engagement.",
      "Beyond its functionality, my project boasts an intuitive user interface designed to delight and captivate visitors. From its sleek design to its smooth animations, every detail has been meticulously crafted to ensure a memorable and enjoyable experience.",
      "Join me on this journey as I showcase my skills, passion, and dedication to excellence in web development. Explore my project today and discover the perfect blend of technology and creativity.",
    ],
    imgUrl: test4,
    additionalImages: [test4, test4, test5],
    projectLink: "https://samuelbidmak.vercel.app/",
  },
  {
    projectName: "My Portfolio Website",
    projectType: "Web Development",
    description: [
      "Welcome to my project, a showcase of creativity, innovation, and technical excellence! Built with React and 99% Tailwind CSS, this project embodies the perfect fusion of cutting-edge technology and stunning design.",
      "Fully responsive and meticulously crafted, my project adapts seamlessly to every screen size, ensuring a flawless experience for every user. With features like dark and light mode, users can customize their viewing experience to suit their preferences, enhancing accessibility and usability.",
      "But that's not all – my project offers a range of convenient features to elevate the user experience. With just one click, visitors can download my CV directly from the site, making it easier than ever for recruiters to access my credentials. Additionally, users can effortlessly send an email directly from the site, streamlining communication and fostering engagement.",
      "Beyond its functionality, my project boasts an intuitive user interface designed to delight and captivate visitors. From its sleek design to its smooth animations, every detail has been meticulously crafted to ensure a memorable and enjoyable experience.",
      "Join me on this journey as I showcase my skills, passion, and dedication to excellence in web development. Explore my project today and discover the perfect blend of technology and creativity.",
    ],
    imgUrl: test4,
    additionalImages: [test4, test4, test5],
    projectLink: "https://samuelbidmak.vercel.app/",
  },
  {
    projectName: "My Portfolio Website",
    projectType: "Web Development",
    description: [
      "Welcome to my project, a showcase of creativity, innovation, and technical excellence! Built with React and 99% Tailwind CSS, this project embodies the perfect fusion of cutting-edge technology and stunning design.",
      "Fully responsive and meticulously crafted, my project adapts seamlessly to every screen size, ensuring a flawless experience for every user. With features like dark and light mode, users can customize their viewing experience to suit their preferences, enhancing accessibility and usability.",
      "But that's not all – my project offers a range of convenient features to elevate the user experience. With just one click, visitors can download my CV directly from the site, making it easier than ever for recruiters to access my credentials. Additionally, users can effortlessly send an email directly from the site, streamlining communication and fostering engagement.",
      "Beyond its functionality, my project boasts an intuitive user interface designed to delight and captivate visitors. From its sleek design to its smooth animations, every detail has been meticulously crafted to ensure a memorable and enjoyable experience.",
      "Join me on this journey as I showcase my skills, passion, and dedication to excellence in web development. Explore my project today and discover the perfect blend of technology and creativity.",
    ],
    imgUrl: test5,
    additionalImages: [test4, test4, test5],
    projectLink: "https://samuelbidmak.vercel.app/",
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
    "Let's connect and explore exciting opportunities together! Whether you have a project idea, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through my details below or drop me an email with a single click. For recruiters, you can download my CV to learn more about my professional background.  Looking forward to connecting!",
};
