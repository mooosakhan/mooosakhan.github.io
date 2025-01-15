import  { useState, useEffect } from "react";
import Button from "../Button"; 
const Index = () => {
  const [svgUrl, setSvgUrl] = useState("");

  useEffect(() => {
    const updateSvgUrl = () => {
      const isLgOrBigger = window.innerWidth >= 1024;

      const url = isLgOrBigger
        ? "https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER%3BPYTHON%20DEVELOPER%3BBACKEND%20DEVELOPER!&color=5eead4"
        : "https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&center=true&vCenter=true&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER%3BPYTHON%20DEVELOPER%3BBACKEND%20DEVELOPER!&color=5eead4";

      setSvgUrl(url);
    };

    updateSvgUrl();
    window.addEventListener("resize", updateSvgUrl);

    return () => window.removeEventListener("resize", updateSvgUrl);
  }, []);

  return (
    <>
      <div
        id="home"
        className="flex flex-col lg:justify-end lg:items-start justify-start gap-6 h-[50vh] lg:h-[96vh] p-6 px-14 rounded-4xl"
      >
        {/* Hero Section */}
        <div className="hero text-center lg:text-left flex items-center lg:items-start justify-start flex-col">
          <h1 className="text-yellow-500 text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-poppins">
            I am <br />
            Moosa Khan
          </h1>
        </div>

        <div className="text flex flex-col gap-5 lg:mb-14">
          <p className="text-md flex justify-center lg:justify-start">
            <img
              src={svgUrl}
              alt="Typing animation displaying skills"
            />
          </p>

          <p className="text-zinc-100 text-center text-sm font-poppins lg:text-left">
            Im an undergraduate student passionate about frontend and MERN
            stack development. I enjoy engaging with new people to discuss
            innovative ideas. Recently, I have delved into data structures,
            further fueling my enthusiasm for web development.
          </p>

          <div className="btn self-center lg:self-start text-sm">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
