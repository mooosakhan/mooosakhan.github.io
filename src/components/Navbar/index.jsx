import { useState } from "react";
import Button from "./../Button";
import { Link } from 'react-scroll';
import "./index.css";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  return (
    <div className="font-poppins text-zinc-100 bg-black bg-opacity-30 h-18 flex items-center rounded-full justify-between mx-12 z-50 relative">
      {/* Logo on the right */}

      <div className="flex items-center justify-between w-full mx-5">
         {/* github+moosakhan */}
      <a href="https://github.com/mooosakhan" target="blank" className="flex ">

           <button className="cursor-pointer w-fit h-fit invert rounded-full scale-50 transition-all ">
            <svg height="95" width="98" xmlns="http://www.w3.org/2000/svg">
             <path
                fill="#000"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                // clip-rule="evenodd"
                // fill-rule="evenodd"
              ></path>
            </svg>
          </button>
         <div className="text-zinc-100 text-xl self-center font-extrabold lg:block" >mooosa <br /> khan</div>

        </a>
          {/* hamburger menu */}
        <button
          onClick={toggleModal}
          className="block lg:hidden p-2 bg-zinc-900 rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation for larger screens */}
      <div className="right font-poppins font-bold hidden lg:flex items-center justify-center">
      <div className="list flex gap-7 text-xs font-extrabold cursor-pointer smooth-transition">
      
  <a href="#home" style={{ color: 'white' }}>HOME</a>
  <a href="#about" style={{ color: 'white' }}>ABOUT</a>
  <a href="#portfolio" style={{ color: 'white' }}>PORTFOLIO</a>
  <a href="#coding-skills" style={{ color: 'white' }}>CODING_SKILLS</a>
  <a href="#internships" style={{ color: 'white' }}>INTERNSHIPS</a>
  <a href="#abilities" style={{ color: 'white' }}>ABILITIES</a>
</div>

  <div className="Download mx-10">
    <Button />
  </div>
</div>




      {/* Modal for mobile navigation */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-80 flex flex-col items-center justify-center z-50 font-semibold">
          <button
            onClick={toggleModal}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
          <div className="list flex flex-col items-center gap-5 text-white text-xl cursor-pointer">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="about" smooth={true} duration={500}>About</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
            <Link to="resume" smooth={true} duration={500}>Resume</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
