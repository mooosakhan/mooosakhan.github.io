import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CiLocationArrow1 } from "react-icons/ci";
import axios from "axios";
import './index.css';

const Index = () => {
  const form = useRef();
  const [starCount, setStarCount] = useState(null);
  const username = "mooosakhan";
  const repo = "mooosakhan";
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fetch GitHub star count
  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`);
        setStarCount(response.data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };
    
    fetchStarCount();
  }, [username, repo]);

  // Handle email form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_publs7e', 'template_nlbjr4l', form.current, 'jBOYbUOjNJdKvd_QA') // Ensure you're using the correct public key
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setPopupMessage('Message sent successfully!');
          setPopupType('success');
          setShowPopup(true);
          // Hide popup after 4 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setPopupMessage('Failed to send message. Please try again!');
          setPopupType('error');
          setShowPopup(true);
          // Hide popup after 4 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 4000);
        }
      );

    // Clear form data
    setFormData({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  return (
    <div id="contact" className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
      {/* Hero Section */}
      <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
        <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">Contact</h1>
        <h1 className="text-teal-300 font-bold text-sm font-poppins self-center lg:text-left md:self-start">LETZ TALK</h1>
      </div>

      {/* Contact Form and GitHub Info */}
      <div className="flex gap-16 md:gap-8 flex-col md:flex-row w-full items-center justify-center">
        <div className="left flex flex-col rounded-2xl w-full h-[65vh] md:w-[49%] justify-between align-middle items-center">
        <form ref={form} onSubmit={sendEmail} className="w-full  bg-zinc-900">
            <div className="relative mb-8 text-zinc-100 font-poppins">
              <label className="absolute -top-1.5 left-10 px-2 text-xs bg-zinc-900 font-bold ">
                FULL NAME <span className="text-teal-300 text-md">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                required
                value={formData.from_name} // controlled input
                onChange={handleInputChange} // handle input change
                className="w-full h-16 border border-zinc-600 rounded-full p-4 focus:outline-none focus:border-teal-300 bg-zinc-90 placeholder:px-0 bg-zinc-900 placeholder:text-zinc-500 placeholder:text-sm px-10"
                placeholder="eg. John Doe"
              />
            </div>
            <div className="relative mb-8 text-zinc-100 font-poppins">
              <label className="absolute -top-1.5 left-10 px-2 text-xs bg-zinc-900 font-bold ">
                EMAIL ADDRESS <span className="text-teal-300 text-md">*</span>
              </label>
              <input
                type="text"
                name="from_email"
                required
                value={formData.from_email} // controlled input
                onChange={handleInputChange} // handle input change
                className="w-full h-16 border border-zinc-600 rounded-full py-4 focus:outline-none focus:border-teal-300 bg-zinc-90 placeholder:px-0 bg-zinc-900 placeholder:text-zinc-500  placeholder:text-sm px-10 "
                placeholder="email@domain.com"
              />
            </div>
            <div className="relative mb-8 text-zinc-100 font-poppins">
              <label className="absolute -top-1.5 left-10 px-2 text-xs bg-zinc-900 font-bold ">
                MESSAGE <span className="text-teal-300 text-md">*</span>
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message} // controlled input
                onChange={handleInputChange} // handle input change
                className="w-full h-44 border border-zinc-600 rounded-[2rem] p-4 focus:outline-none focus:border-teal-300 bg-zinc-90 placeholder:py-2 bg-zinc-900 placeholder:text-zinc-500 placeholder:text-sm resize-none px-10"
                placeholder="Hi, I would like to connect with you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center border border-zinc-600 text-white justify-center gap-2 px-8 py-5 hover:border-teal-300 transition duration-300 bg-zinc-900 rounded-full font-bold text-sm"
            >
              SEND MESSAGE
              <CiLocationArrow1 className="text-xl" />
            </button>
          </form>
          

        </div>
        {/* Popup Section */}
        {showPopup && (
          <div className={`popup ${popupType === 'success' ? 'popup-success' : 'popup-error'} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg bg-zinc-800 text-white`}>
            <p>{popupMessage}</p>
          </div>
        )}
        
        <div className="right border rounded-3xl w-full h-[65vh] md:w-[49%] border-zinc-600 flex flex-col gap-12 p-8 text-sm font-poppins font-bold">
          <div className="flex flex-col gap-0 items-start">
            <h1 className="text-yellow-500 text-xl font-extrabold">Moosa Khan</h1>
            <h1 className="text-teal-300 text-sm">Student & Technology Enthusiast</h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-teal-300">AGE : <span className="text-zinc-100">18</span></p>
            <p className="text-teal-300">PHONE : <span className="text-zinc-100">+92 331 4027135</span></p>
            <p className="text-teal-300">EMAIL : <span className="text-zinc-100"><a target='blank' href="mailto:moosakhan@gmail.com" className="hover:text-teal-300">moosakhan3856902@gmail.com</a></span></p>
            <p className="text-teal-300">RESIDENCE : <span className="text-zinc-100">Pakistan 🇵🇰</span></p>
            <p className="text-teal-300">ADDRESS : <span className="text-zinc-100">Karachi</span></p>
            <a target='blank' href="https://www.linkedin.com/in/mooosakhan/"><p className="text-teal-300">Linked In : <span className="text-zinc-100 hover:text-teal-300">linkedin.com/in/mooosakhan/</span></p></a>
            <a target='blank' href="https://github.com/mooosakhan">
            <p className="text-teal-300">Github : <span className="text-zinc-100 hover:text-teal-300">github.com/mooosakhan</span></p>
            </a>
          </div>
          <a target='blank' href="https://github.com/mooosakhan" > <button
                            target='blank' href="#"
                            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        >
                            <span
                                className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                            ></span>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
                                    <path d="M409.132 114.573..." />
                                </svg>
                                <span className="ml-1 text-white">Star on GitHub</span>
                            </div>
                            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                                <svg
                                    className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">
                                    {starCount !== null ? starCount : "Loading..."}
                                </span>
                            </div>
                        </button></a>
         
        </div>
      </div>
    </div>
  );
};

export default Index;


// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { CiLocationArrow1 } from "react-icons/ci";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Index = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_publs7e', 'template_nlbjr4l', form.current, 'jBOYbUOjNJdKvd_QA') // Ensure you're using the correct public key
//       .then(
//         (response) => {
//           console.log('SUCCESS!', response);
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         }
//       );
//   };




// const Index = () => {
//     const [starCount, setStarCount] = useState(null);
//     const username = "mooosakhan";
//     const repo = "mooosakhan";

//     useEffect(() => {
//         // Fetch star count using GitHub API
//         const fetchStarCount = async () => {
//             try {
//                 const response = await axios.get(
//                     https://api.github.com/repos/${username}/${repo}
//                 );
//                 setStarCount(response.data.stargazers_count);
//             } catch (error) {
//                 console.error("Error fetching star count:", error);
//             }
//         };

//         fetchStarCount();
//     }, [username, repo]);
//     return (
//         <>
//             <div id="contact" className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center  gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
//                 {/* Hero Section */}
//                 <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
//                     <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
//                         Contact

//                     </h1>
//                     <h1 className="text-teal-300 font-bold text-sm font-poppins self-center lg:text-left md:self-start">
//                         {"LET'  S TALk"}
//                     </h1>
//                 </div>

//                 {/* Skills Section */}
//                 <div className="flex gap-16 md:gap-8 flex-col  md:flex-row w-full items-center justify-center">
//                     <div className="left flex flex-col rounded-2xl w-full h-[65vh] md:w-[49%] justify-between align-middle items-center ">
//                         <form className="w-full  bg-zinc-900">
//                             <div className="relative mb-8 text-zinc-100 font-poppins">
//                                 <label className="absolute -top-1.5 left-10 px-2 text-xs bg-zinc-900 font-bold ">FULL NAME <span className="text-teal-300 text-md">*</span></label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     required
//                                     className="w-full h-16 border border-zinc-600 rounded-full p-4 focus:outline-none focus:border-teal-300 bg-zinc-90 placeholder:px-4 bg-zinc-900 placeholder:text-zinc-500 placeholder:text-sm"
//                                     placeholder="eg. John Doe"
//                                 />
//                             </div>
//                             <div className="relative mb-8 text-zinc-100 font-poppins">
//                                 <label className="absolute -top-1.5 left-10 px-2 text-xs bg-zinc-900 font-bold ">EMAIL ADDRESS <span className="text-teal-300 text-md"> *</span></label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     required
//                                     className="w-full h-16 border border-zinc-600 rounded-full p-4 focus:outline-none focus:border-teal-300 bg-zinc-90 placeholder:px-4 bg-zinc-900 placeholder:text-zinc-500
//                                         placeholder:text-sm"
//                                     placeholder="email@domain.com"
//                                 />
//                             </div>
//                             <div className="relative mb-8 text-zinc-100 font-poppins">
//                                 <label className="absolute -top-1.5 left-10 px-2 text-xs bg-zinc-900 font-bold ">MESSAGE <span className="text-teal-300 text-md"> *</span></label>
//                                 <textarea
//                                     name="message"
//                                     required
//                                     rows="4"
//                                     className="w-full h-44 border border-zinc-600 rounded-[2rem] p-4 focus:outline-none focus:border-teal-300 bg-zinc-90 placeholder:px-4 bg-zinc-900 placeholder:text-zinc-500
//                                         placeholder:text-sm resize-none"
//                                     placeholder="Hi, I would like to connect with you..."
//                                 ></textarea>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="flex items-center border border-zinc-600 text-white justify-center gap-2 px-8 py-5  hover:border-teal-300 transition duration-300 bg-zinc-900 rounded-full font-bold text-sm"
//                             >
//                                 SEND MESSAGE
//                                 <CiLocationArrow1 className="text-xl" />

//                             </button>
//                         </form>
//                     </div>
//                     <div className="right border rounded-3xl w-full h-[65vh] md:w-[49%] border-zinc-600 flex flex-col gap-12 p-8 text-sm font-poppins font-bold">
//                         <div className="flex flex-col gap-0 items-start">
//                             <h1 className="text-yellow-500 text-xl font-extrabold">Moosa Khan</h1>
//                             <h1 className="text-teal-300 text-sm">Student & Technology Enthusiast</h1>

//                         </div>

//                         <div className="flex flex-col gap-4 ">
//                             <p className="text-teal-300">AGE : <span className="text-zinc-100"> 18 </span></p>
//                             <p className="text-teal-300">PHONE : <span className="text-zinc-100"> +92 3314027135</span></p>
//                             <p className="text-teal-300">EMAIL : <span className="text-zinc-100">
//                                 <a target='blank' href="mailto:aa" className="hover:text-teal-300">
//                                     moosakhan@gmail.com
//                                 </a>
//                             </span>
//                             </p>
//                             <p className="text-teal-300">RESIDENCE : <span className="text-zinc-100">  Pakistan <span className="subpixel-antialiased font-light text-xs">🇵🇰</span></span></p>
//                             <p className="text-teal-300">ADDRESS : <span className="text-zinc-100"> Karachi </span></p>
//                             <p className="text-teal-300">TWITTER : <span className="text-zinc-100">  @mooosaKhan </span></p>
//                         </div>

                          
//                         <button
//                             href="#"
//                             className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
//                         >
//                             <span
//                                 className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
//                             ></span>
//                             <div className="flex items-center">
//                                 <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
//                                     <path d="M409.132 114.573..." />
//                                 </svg>
//                                 <span className="ml-1 text-white">Star on GitHub</span>
//                             </div>
//                             <div className="ml-2 flex items-center gap-1 text-sm md:flex">
//                                 <svg
//                                     className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
//                                     data-slot="icon"
//                                     aria-hidden="true"
//                                     fill="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         clipRule="evenodd"
//                                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
//                                         fillRule="evenodd"
//                                     ></path>
//                                 </svg>
//                                 <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">
//                                     {starCount !== null ? starCount : "Loading..."}
//                                 </span>
//                             </div>
//                         </button>


//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Index; 