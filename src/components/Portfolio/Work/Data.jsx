import ee from "./../../../assets/ee.png";

export const projects = [
  {
    id: 1,
    image: "https://github.com/mooosakhan/Portfolio.me/blob/main/src/assets/images/Usepopcorn.jpg?raw=true",
    title: "Usepopcorn - Movie Website",
    description: "A movie website where you can search for movies, view details, and give ratings. Built with React.",
    url: "https://usepopcornwebsite.vercel.app/",
    category: "React js"
  },
  {
    id: 2,
    image: "https://github.com/mooosakhan/Portfolio.me/blob/main/src/assets/images/Ochi.jpg?raw=true",
    title: "Ochi Design Clone",
    description: "A frontend website clone of the Ochi design, utilizing GSAP and React ScrollTrigger for animations.",
    url: "https://mooosakhan.github.io/ochi.design_clone/",
    category: "React js",
  },
  {
    id: 3,
    image: "https://github.com/mooosakhan/Portfolio.me/blob/main/src/assets/images/3DPortfolio.jpg?raw=true",
    title: "3D Portfolio Website",
    description: "A 3D canvas portfolio website created with Three.js for interactive and visually engaging elements.",
    url: "https://mooosakhan.github.io/Portfolio/",
    category: "typescript",
  },
  {
    id: 4,
    image: "https://github.com/mooosakhan/Portfolio.me/blob/main/src/assets/images/ESS.png?raw=true",
    title: "Exam Scheduling System",
    description: "The Exam Scheduling System is a web application designed to simplify the process of scheduling university exams. (Frontend)",
    url: "https://exam-scheduling-system.vercel.app",
    category: "React js",
  },
  {
    id: 5,
    image: ee,
    title: "Exclusive Ecommerce",
    description: "Exclusive Ecommerce an ecommerce website",
    url: "https://exclusives-ecommerce.vercel.app",
    category: "React js",
  }
];

export const projectsNav = [
  { name: "all" },
  { name: "React js" },
  { name: "Next js/ts" },
].map(item => ({ ...item, name: item.name.toLowerCase() }));