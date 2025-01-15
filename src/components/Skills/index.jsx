
// import React, { useState, useEffect } from "react";
// import Button from "./../Button";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faReact } from '@fortawesome/free-solid-svg-icons';


// const Index = () => {

//     return (
//         <>
//             <div className="flex flex-col md:justify-center items-center  md:items-start justify-center gap-14 h-auto p-14 md:py-28  ">
//                 {/* Hero Section */}

//                 <div className="hero text-center lg:text-left flex flex-col gap-3 items-center lg:items-start lg:self-start self-center">

//                     <h1 className="text-yellow-500 text-3xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
//                         Skills
//                     </h1>

//                     <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left lg:self-start">
//                         THINGS I AM GOOD AT
//                     </h1>


//                 </div>
//                 <div className="text flex flex-col gap-6">

//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">
//                         <FontAwesomeIcon icon={faReact} />
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">Cloud
//                             Computing</div>
//                         <div className="text-zinc-100 text-left text-md">Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gastby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.</div>
//                     </div>
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">iicon</div>
//                         <div className="text-yellow-500 font-bold text-lg">Cloud
//                             Computing</div>
//                         <div className="text-zinc-100 text-left text-md">Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gastby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.</div>
//                     </div>
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">Cloud
//                             Computing</div>
//                         <div className="text-zinc-100 text-left text-md">Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gastby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.</div>
//                     </div>




//                 </div>
//             </div>
//         </>
//     );
// };

// export default Index;
import React from "react";


// const Index = () => {
//     return (
//         <>
//             <div id="resume" className="flex flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
//                 {/* Hero Section */}
//                 <div className="hero text-center lg:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
//                     <h1 className="text-yellow-500 text-4xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
//                         Skills
//                     </h1>
//                     <h1 className="text-teal-300 text-center font-bold text-sm font-poppins ">
//                         THINGS I AM GOOD AT
//                     </h1>
//                 </div>

//                 {/* Skills Section */}
//                 <div className="text flex flex-col gap-6 flex-1">
//                     {/* First Skill */}
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">1. Front-End Development </div>
//                         <div className="text-zinc-100 text-left text-sm">As a web developer, I specialize in crafting dynamic, responsive single-page applications (SPAs) with intuitive layouts that adapt seamlessly across devices, ensuring optimal user experiences. By leveraging modern web technologies, I deliver high-quality, maintainable, and user-friendly web applications.
//                         </div>
//                     </div>

//                     {/* Second Skill */}
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">2. Back-End Development</div>
//                         <div className="text-zinc-100 text-left text-sm">I design and implement back-end logic using languages such as Flask and Node.js, delivering high-quality, maintainable, and user-friendly web applications.
//                         </div>
//                     </div>

//                     {/* Third Skill */}
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">3. Database Management
//                         </div>
//                         <div className="text-zinc-100 text-left text-sm">I possess expertise in both SQL and NoSQL databases, including MySQL, Oracle, and MongoDB. I design and implement efficient database schemas, write seamless queries, and ensure data integrity and security. My proficiency in these databases enables me to develop robust back-end systems that effectively manage and retrieve data.   </div>
//                     </div>

//                     {/* Fourth Skill */}
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">
//                         4. Data Structures and Algorithms
//                         </div>
//                         <div className="text-zinc-100 text-left text-sm">
// I possess a strong understanding of data structures and algorithms, with a particular focus on sorting techniques. I am proficient in implementing various sorting algorithms, enabling me to optimize data processing and enhance application performance. This expertise allows me to develop efficient solutions tailored to specific project requirements.   </div>
//                     </div>
//                     {/* Third Skill */}
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">5. Machine Learning (ML)</div>
//                         <div className="text-zinc-100 text-left text-sm">


// I have a foundational understanding of machine learning algorithms and data models, enabling systems to learn and make decisions. Currently, I am expanding my knowledge in this area to develop more intelligent applications.
//      </div>
//                     </div>
//                     {/* Third Skill */}
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">6. Natural Language Processing (NLP)</div>
//                         <div className="text-zinc-100 text-left text-sm">



// I am gaining knowledge in NLP, focusing on developing applications that understand and process human language. This includes tasks such as text analysis and language translation.            </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Index;
import { FaReact, FaNodeJs, FaDatabase, FaCogs, FaRobot, FaLanguage } from 'react-icons/fa';

const Index = () => {
    return (
        <>
            <div id="resume" className="flex flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
                {/* Hero Section */}
                <div className="hero text-center lg:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
                        Skills
                    </h1>
                    <h1 className="text-teal-300 text-center font-bold text-sm font-poppins ">
                        THINGS I AM GOOD AT
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="text flex flex-col gap-12">
                    {/* First Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <FaReact size={24} />
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Front-End Development</div>
                        <div className="text-zinc-100 text-left text-sm">
                            As a web developer, I specialize in crafting dynamic, responsive single-page applications (SPAs) with intuitive layouts that adapt seamlessly across devices, ensuring optimal user experiences. By leveraging modern web technologies, I deliver high-quality, maintainable, and user-friendly web applications.
                        </div>
                    </div>

                    {/* Second Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <FaNodeJs size={24} />
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Back-End Development</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I design and implement back-end logic using languages such as Flask and Node.js, delivering high-quality, maintainable, and user-friendly web applications.
                        </div>
                    </div>

                    {/* Third Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <FaDatabase size={24} />
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Database Management</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I possess expertise in both SQL and NoSQL databases, including MySQL, Oracle, and MongoDB. I design and implement efficient database schemas, write seamless queries, and ensure data integrity and security. My proficiency in these databases enables me to develop robust back-end systems that effectively manage and retrieve data.
                        </div>
                    </div>

                    {/* Fourth Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <FaCogs size={24} />
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Data Structures and Algorithms</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I possess a strong understanding of data structures and algorithms, with a particular focus on sorting techniques. I am proficient in implementing various sorting algorithms, enabling me to optimize data processing and enhance application performance. This expertise allows me to develop efficient solutions tailored to specific project requirements.
                        </div>
                    </div>

                    {/* Fifth Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <FaRobot size={24} />
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Machine Learning (ML)</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I have a foundational understanding of machine learning algorithms and data models, enabling systems to learn and make decisions. Currently, I am expanding my knowledge in this area to develop more intelligent applications.
                        </div>
                    </div>

                    {/* Sixth Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <FaLanguage size={24} />
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Natural Language Processing (NLP)</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I am gaining knowledge in NLP, focusing on developing applications that understand and process human language. This includes tasks such as text analysis and language translation.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
