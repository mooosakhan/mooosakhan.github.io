
import  { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Communities from './components/Communities';
import Education from './components/Education';
import Abilities from './components/Abilities';
import CodingSkills from './components/CodeingSkills';
import Portfolios from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading complete after 4 seconds
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="w-screen h-screen bg-zinc-800 flex items-center justify-center"
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <div className="Navbar absolute top-8 w-full font-poppins">
            <Navbar />
          </div>

          <div className="flex flex-col lg:flex-row w-full bg-zinc-900 font-poppins">
            {/* Left Section - 3D Avatar */}
            <div className="w-full h-[50vh] lg:h-screen lg:w-1/2">
        <img
          src="blob:https://web.whatsapp.com/155a0f10-e750-4bed-a5ec-7f3b08e2ac3a"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

            {/* Right Section - Sliding Content */}
            <div className="w-full lg:w-[60vw] lg:h-screen overflow-y-auto">
              <Hero/>
              <hr className="border-zinc-600" />
              <About />
              <hr className="border-zinc-600" />
              <Skills />
              <hr className="border-zinc-600" />
              <Internships />
              <hr className="border-zinc-600" />
              <Communities />
              <hr className="border-zinc-600" />
              <Education />
              <hr className="border-zinc-600" />
              <Abilities />
              <hr className="border-zinc-600" />
              <CodingSkills />
              <hr className="border-zinc-600" />
              <Portfolios />
              <hr className="border-zinc-600" />
              <Contact />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
