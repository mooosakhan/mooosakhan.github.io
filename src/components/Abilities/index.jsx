// import React, { useState } from "react";

// const Index = () => {
//     const [skills] = useState([
//         { name: "Web Layout", description: "Web Design is one of my favourite things. I love designing web pages. It's amazing how beautiful and creative we can be with a website.", percentage: 75 },
//         { name: "Responsiveness", description: "Creating responsive designs that adapt to different screen sizes is a key part of modern web development. I focus on delivering great experiences across devices.", percentage: 85 },
//         { name: "Backend Solution", description: "I have experience in building backend solutions using modern technologies, focusing on performance, security, and scalability.", percentage: 70 },
//         { name: "Communication Ability", description: "Effective communication is key in all projects, whether it's collaborating with teams or engaging with clients to understand their needs.", percentage: 90 }
//     ]);

//     return (
//         <>
//             <div id="abilities" className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
//                 {/* Hero Section */}
//                 <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
//                     <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
//                         Abilities
//                     </h1>
//                     <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
//                         WEB DEVELOPMENT AND PHYSICAL SKILLS
//                     </h1>
//                 </div>

//                 {/* Skills Section */}
//                 <div className="text flex gap-6 flex-col flex-wrap md:flex-row flex-1">
//                     {skills.map((skill, index) => (
//                         <div key={index} className="skills flex gap-4 text-lg text-yellow-500 flex-col lg:w-[20vw]">
//                             <h1 className="font-bold">{skill.name}</h1>
//                             <p className="text-sm text-zinc-100">
//                                 {skill.description}
//                             </p>
//                             <div className="Percentage">
//                                 <div className="percentage_text text-teal-300 text-xs">{skill.percentage}%</div>
//                                 <div className="line overflow-hidden w-full h-1 bg-gray-800 relative">
//                                     {/* Full line */}
//                                     <div
//                                         className="w-full h-full bg-gray-800"
//                                         style={{ width: "100%" }}
//                                     ></div>
//                                     {/* Dynamic filled part */}
//                                     <div
//                                         className="h-full bg-teal-600 absolute top-0 left-0"
//                                         style={{ width: `${skill.percentage}%` }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Index;

import React, { useState } from "react";

const Index = () => {
    const skills = [
        {
            title: "Web Layout",
            description: "Web Design is one of my favourite things. I love designing web pages. It's amazing how beautiful and creative we can be with a website.",
            percentage: 75,
        },
        {
            title: "Responsiveness",
            description: "Creating responsive designs that adapt to different screen sizes is a key part of modern web development. I focus on delivering great.",
            percentage: 80,
        },
        {
            title: "Backend Solution",
            description: "I have experience in building backend solutions using modern technologies, focusing on performance, security, and scalability.",
            percentage: 70,
        },
        {
            title: "Communication Ability",
            description: "Effective communication is key in all projects, whether it's collaborating with teams or engaging with clients to understand their needs.",
            percentage: 85,
        },
    ];

    return (
        <div id="abilities" className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
            {/* Hero Section */}
            <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                    Abilities
                </h1>
                <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                    WEB DEVELOPMENT AND PHYSICAL SKILLS
                </h1>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                {skills.map((skill, index) => (
                    <div key={index} className="skills flex gap-4 text-lg text-yellow-500 flex-col">
                        <h1 className="font-bold">{skill.title}</h1>
                        <p className="text-sm text-zinc-100">{skill.description}</p>
                        <div className="Percentage">
                            <div className="percentage_text text-teal-300 text-xs">{skill.percentage}%</div>
                            <div className="line overflow-hidden w-full h-1 bg-gray-800 relative">
                                {/* Full line */}
                                <div className="w-full h-full bg-gray-800" style={{ width: "100%" }}></div>
                                {/* Dynamic filled part */}
                                <div className="h-full bg-teal-600 absolute top-0 left-0" style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
