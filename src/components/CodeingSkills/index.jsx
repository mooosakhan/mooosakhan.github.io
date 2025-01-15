import React from "react";

const CircularProgress = ({ percentage }) => {
  // Calculate the circumference of the circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke dasharray and dashoffset
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine if the ring should be split
  const isSplit = percentage < 83;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full">
        {/* Background Circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth="3"
          className="text-zinc-700 fill-none"
          stroke="currentColor"
        />
        {/* Foreground Circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth="3"
          className={`text-teal-300 fill-none stroke-current ${isSplit ? 'stroke-dashed' : ''}`}
          strokeDasharray={isSplit ? `${strokeDasharray / 2} ${strokeDasharray / 2}` : strokeDasharray}
          strokeDashoffset={isSplit ? strokeDashoffset - (circumference / 2) : strokeDashoffset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-teal-300">
        {percentage}%
      </span>
    </div>
  );
};

const Index = () => {
  const skills = [
    {
      name: "React",
      percentage: 87,
      description: "Building dynamic user interfaces and single-page applications using React.",
    },
    {
      name: "Next.js",
      percentage: 83,
      description: "Developing full-stack React applications with server-side rendering using Next.js.",
    },
    {
      name: "MongoDB",
      percentage: 70,
      description: "Using MongoDB for efficient, scalable, and flexible database management in web applications.",
    },
    {
      name: "SQL",
      percentage: 65,
      description: "Working with SQL databases to manage structured data and optimize queries.",
    },
    {
      name: "Git/GitHub",
      percentage: 80,
      description: "Version control and collaborative development with Git and GitHub for efficient workflow.",
    },
    {
      name: "Deployment (Vercel, Netlify, GitHub)",
      percentage: 90,
      description: "Deploying web applications seamlessly with platforms like Vercel, Netlify, and GitHub.",
    },
    {
      name: "Express.js",
      percentage: 70,
      description: "Building RESTful APIs and back-end applications using Express.js and Node.js.",
    },
    {
      name: "Node.js",
      percentage: 70,
      description: "Building scalable and efficient back-end services using Node.js and JavaScript.",
    },
    {
      name: "Three.js",
      percentage: 60,
      description: "Creating interactive 3D web applications and visualizations using Three.js.",
    },
    {
      name: "Tailwind CSS",
      percentage: 79,
      description: "Designing modern, responsive websites quickly with utility-first CSS framework, Tailwind CSS.",
    },
    {
      name: "Bootstrap",
      percentage: 80,
      description: "Using Bootstrap to build responsive and mobile-first websites with ease.",
    },
    {
      name: "Flask",
      percentage: 75,
      description: "Building lightweight web applications and APIs with Flask in Python.",
    },
    {
      name: "C",
      percentage: 90,
      description: "Proficient in programming with C for system-level applications and algorithms.",
    },
    {
      name: "C++",
      percentage: 80,
      description: "Developing high-performance applications and systems with C++.",
    },
    {
      name: "TypeScript",
      percentage: 60,
      description: "Developing strong-typed applications with TypeScript to improve code quality and reliability.",
    },
  ];

  return (
    <div id="coding-skills" className="flex flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
      {/* Hero Section */}
      <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
        <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
          Coding Skills
        </h1>
        <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
          DEVELOPING ON...
        </h1>
      </div>

      {/* Skills Section */}
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white rounded-lg p-6 border-gray-700">
              <CircularProgress percentage={skill.percentage} />
              <h3 className="text-yellow-500 text-lg font-bold mt-4">{skill.name}</h3>
              <p className="text-zinc-100 mt-2 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
