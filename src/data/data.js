import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import strathclyde from "../assets/images/strathclyde.png";
import portfolio1 from "../assets/images/portfolio1.png";
import portfolio2 from "../assets/images/portfolio2.png";
import portfolio3 from "../assets/images/portfolio3.png";
import portfolio4 from "../assets/images/portfolio4.png";
import developer from "../assets/images/developer.jpeg";
import technician from "../assets/images/technician.jpeg";
import lasu from "../assets/images/lasu.jpeg";
import intern from "../assets/images/intern.jpeg";
import commerce from "../assets/images/commerce.png";
import commerce2 from "../assets/images/commerce2.png";
import auction from "../assets/images/auction.png";
import auction2 from "../assets/images/auction2.png";
import auction3 from "../assets/images/auction3.png";
import auction4 from "../assets/images/auction4.png";

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
  "Next.js",
  "Express.js",
  "HTML",
  "CSS",
  "MySQL",
  "Kotlin",
  "NoSQL",
  "MongoDB",
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
      "Master of Science in Advanced Software Engineering from the esteemed University of Strathclyde, Glasgow.",
      "Collaborated closely with a team of three members to conduct an extensive data analysis on a dataset comprising 70,000 records related to Cardiovascular Disease (CVD).",
      "Excelled in a rigorous academic program, delving deep into cutting-edge topics and emerging technologies.",
      "Acquired comprehensive knowledge and practical skills in software engineering principles, advanced algorithms, and distributed information systems.",
      "Designed and implementated a User-centric Cardiovascular Health App, prioritizing user experience and accessibility.",
      "Stood out as a proactive learner, consistently engaging in challenging coursework and hands-on projects.",
      "Demonstrated proficiency in developing innovative solutions, including a Fitness Activity Mobile App with Kotlin aimed at promoting active lifestyles.",
      "Collaborated effectively with peers and faculty, fostering a dynamic learning environment and achieving remarkable results.",
    ],
    link: "#",
    imgUrl: strathclyde,
  },
  {
    startDate: "Sep 2021",
    endDate: "Jan 2023",
    company: "Outcess Limited",
    title: "Software Developer",
    description: [
      "Collaborated cross-functionally with various teams to discern software requirements and architect robust, scalable APIs using Django, facilitating seamless data transmission.",
      "Worked in tandem with developers to analyze the underlying causes of defects, providing essential insights for timely resolution and improvement.",
      "Contributed to the development of backend systems supporting frontend applications, prioritizing efficient data management, processing, and analytics.",
      "Played a key role in brainstorming sessions and problem-solving exercises, leveraging technical expertise to address complex challenges and optimize software performance.",
    ],
    link: "#",
    imgUrl: developer,
  },
  {
    startDate: "Feb 2018",
    endDate: "Sep 2021",
    company: "MainOne",
    title: "System Engineer",
    description: [
      "I worked closely with team members including software engineers to obtain data and storage requirements and deliver solutions to meet business needs.",
      "Analyzed user requirements and translated them into system specifications.",
      "Collaborated closely with supervisors to promptly escalate and address customer inquiries and technical issues, fostering strong teamwork and efficient problem resolution.",
    ],
    link: "#",
    imgUrl: technician,
  },
  {
    startDate: "Sep 2012",
    endDate: "Dec 2017",
    company: "Lagos State University",
    title: "BSc Mechanical Engr",
    description: [
      "Completed a Bachelor of Science degree in Mechanical Engineering, gaining comprehensive knowledge and skills in various engineering principles and practices.",
      "Studied diverse subjects including mechanics, thermodynamics, fluid dynamics, and materials science, developing a solid foundation in engineering fundamentals.",
      "Engaged in laboratory experiments to apply theoretical knowledge to real-world engineering problems, fostering practical problem-solving abilities.",
      "Collaborated with classmates and professors on group projects, honing teamwork and communication skills essential for success in the engineering field.",
      "Participated in internship program to gain practical industry experience and further enhance understanding of mechanical engineering concepts.",
    ],
    link: "#",
    imgUrl: lasu,
  },
  {
    startDate: "June 2016",
    endDate: "Dec 2016",
    company: "Beta Glass PLC",
    title: "Mech Engr Intern",
    description: [
      "Maintained organized physical files and digitized records, ensuring easy access and retrieval for authorized team members.",
      "Performed daily data entry tasks, accurately inputting monitoring readings into Microsoft Excel spreadsheets to support ongoing operations.",
      "Collaborated with colleagues to complete assigned tasks efficiently and contribute to team objectives.",
      "Assisted with quality control procedures and conducted routine inspections to ensure compliance with industry standards.",
      "Contributed to team meetings and discussions, offering insights and suggestions for process improvements.",
    ],
    link: "#",
    imgUrl: intern,
  },
];

export const projects = [
  {
    projectName: "My Portfolio Website",
    projectType: "Web Development",
    stacks: ["React", "Tailwind CSS"],
    description: [
      "Welcome to my project, a showcase of creativity, innovation, and technical excellence! Built with React and 99% Tailwind CSS, this project embodies the perfect fusion of cutting-edge technology and stunning design.",
      "Fully responsive and meticulously crafted, my project adapts seamlessly to every screen size, ensuring a flawless experience for every user. With features like dark and light mode, users can customize their viewing experience to suit their preferences, enhancing accessibility and usability.",
      "But that's not all – my project offers a range of convenient features to elevate the user experience. With just one click, visitors can download my CV directly from the site, making it easier than ever for recruiters to access my credentials. Additionally, users can effortlessly send an email directly from the site, streamlining communication and fostering engagement.",
      "Beyond its functionality, my project boasts an intuitive user interface designed to delight and captivate visitors. From its sleek design to its smooth animations, every detail has been meticulously crafted to ensure a memorable and enjoyable experience.",
      "Join me on this journey as I showcase my skills, passion, and dedication to excellence in web development. Explore my project today and discover the perfect blend of technology and creativity.",
    ],
    imgUrl: portfolio1,
    additionalImages: [portfolio2, portfolio3, portfolio4],
    projectLink: "https://samuelbidmak.com",
  },
  {
    projectName: "Auctions Marketplace",
    projectType: "Full-Stack Web Development",
    stacks: ["Django", "Tailwind CSS"],
    description: [
      "This Django Auctions Marketplace project aims to provide a comprehensive platform for users to buy and sell goods through online auctions, similar to popular platforms like eBay. Leveraging the Django framework, this project offers a robust and user-friendly interface for both buyers and sellers, facilitating seamless transactions in a secure environment.",
      "Key Features:",
      "1. User Authentication: Users can register and log in securely, ensuring personalized experiences and safeguarding their account information.",
      "2. Auction Listings: Sellers can create auction listings for their items, including detailed descriptions, images, and starting bid prices.",
      "3. Bidding System: Buyers can place bids on auction listings, with real-time updates on current bid amounts.",
      "4. Watchlist: Users can add items to their watchlist to keep track of auctions they're interested in and receive notifications about bidding activity.",
      "5. Feedback System: Built-in messaging functionality enables communication between buyers and sellers, facilitating negotiations and resolving queries.",
      "6. Search and Filter: Advanced search and filtering options empower users to find specific items based on categories, keywords, price ranges, and more.",
      "7. Admin Panel: Administrators have access to a powerful admin panel to manage users, listings, bids, and site settings, ensuring smooth operation and oversight.",
      "Future Enhancements:",
      "1. Multi-currency Support: Enable support for multiple currencies to cater to users from diverse geographic regions.",
      "2. Mobile App Integration: Develop a mobile app version of the platform to reach a wider audience and offer convenience on-the-go.",
      "3. Social Media Integration: Integrate social media sharing options to allow users to share listings and promote their auctions.",
    ],
    imgUrl: commerce,
    additionalImages: [commerce2, commerce, commerce2],
    projectLink: "https://github.com/bidmak/E-commerce/tree/version2",
  },
  {
    projectName: "Auctions Marketplace First Edition",
    projectType: "Full-Stack Web Development",
    stacks: ["Django"],
    description: [
      "This Django Auctions Marketplace first edition project aims to provide a comprehensive platform for users to buy and sell goods through online auctions, similar to popular platforms like eBay. Leveraging the Django framework, this project offers a robust and user-friendly interface for both buyers and sellers, facilitating seamless transactions in a secure environment.",
      "Key Features:",
      "1. User Authentication: Users can register and log in securely, ensuring personalized experiences and safeguarding their account information.",
      "2. Auction Listings: Sellers can create auction listings for their items, including detailed descriptions, images, and starting bid prices.",
      "3. Bidding System: Buyers can place bids on auction listings, with real-time updates on current bid amounts.",
      "4. Watchlist: Users can add items to their watchlist to keep track of auctions they're interested in and receive notifications about bidding activity.",
      "5. Feedback System: Built-in messaging functionality enables communication between buyers and sellers, facilitating negotiations and resolving queries.",
      "6. Search and Filter: Advanced search and filtering options empower users to find specific items based on categories, keywords, price ranges, and more.",
      "Future Enhancements:",
      "1. UI imporvement: Enhance the visual design and user interface to create a more engaging and aesthetically pleasing experience.",
      "2. Responsiveness: Ensure that the website layout and elements adapt seamlessly to different screen sizes and devices for improved accessibility and usability.",
    ],
    imgUrl: auction,
    additionalImages: [auction3, auction2, auction4],
    projectLink: "https://github.com/bidmak/E-commerce/tree/main",
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
  subject: "Portfolio: Let's connect.",
  message:
    "Let's connect and explore exciting opportunities together! Whether you have a project idea, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through my details below or drop me an email with a single click. For recruiters, you can download my CV to learn more about my professional background.  Looking forward to connecting!",
};
