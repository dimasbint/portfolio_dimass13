import React from 'react';
import heroimage from '/src/assets/8.jpg'; // Ensure this path is correct
import { TypeAnimation } from 'react-type-animation';

const Display: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <header id="home" className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8">
        <div className="my-auto mx-auto">
          <div className="w-[150px] h-auto lg:w-[270px]">
            <img src={heroimage} alt="hero image" className="w-full h-auto" /> {/* Ensure image scales properly */}
          </div>
        </div>

        {/* Header Section */}
        <div className="col-span-2 px-5 my-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
              Welcome to My Portfolio, I'm a
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Web Dev",
                1000,
                "UI/UX Design",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="py-6">
            I'm a passionate web developer, designer, and creator. Explore my projects and let's work together!
          </p>
        </div>
      </header>
    </div>
  );
};

export default Display;
