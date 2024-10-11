import React from 'react';

const Navbar: React.FC = () => {
  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-gradient-to-b from-gray-700 to-black px-2 py-2 fixed h-12 w-full shadow-md flex items-center justify-between z-50">
      {/* Left Side - Logo/Title */}
      <div className="flex-none">
        <a className="btn btn-ghost text-white">
          Dimas Bintang
        </a>
      </div>

      {/* Center - Menu */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal bg-base-200 rounded-box text-sm">
          <li>
            <a onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('service')}>Service</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('review')}>Review</a>
          </li>
        </ul>
      </div>

      {/* Right Side - Contact Me Button */}
      <div className="flex-none flex items-center gap-2">
        <a
          onClick={() => scrollToSection('contact')}
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block hover:scale-105 transition-transform duration-300 font-bold" // Added font-bold class here
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
