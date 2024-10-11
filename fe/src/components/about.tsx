import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black"> {/* Set background color here */}
      {/* About Section */}
      <section id="about" className="max-w-[1200px] mx-auto py-16 px-5">
        <h2 className="text-3xl font-bold">
          <span className="text-white">About </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
            Dimas Bintang
          </span>
        </h2>
        <p className="py-4 text-white"> {/* Set text color to white for readability */}
          I am a dedicated frontend engineer with expertise in developing robust application frontends using React Js, Vite, Tailwind, Daisy UI, as well as integrating RESTful API and GraphQL into projects. With a strong focus on user experience, I excel in creating efficient UI/UX system designs using Figma. 
          I possess a comprehensive understanding of modern web technologies and strive to deliver seamless user interfaces that enhance user interactions. With a keen eye for detail and a passion for crafting intuitive designs, I am committed to delivering high-quality solutions that meet both functional and aesthetic 
          requirements. My ability to collaborate effectively in cross-functional teams, combined with my problem-solving skills, enables me to successfully translate project requirements into innovative frontend solutions. I am constantly seeking opportunities to expand my knowledge and stay up-to-date with emerging trends in frontend development.
        </p>
      </section>
    </div>
  );
};

export default About;
