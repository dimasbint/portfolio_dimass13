import React from 'react';

const Service: React.FC = () => {
  const services = [
    {
      title: "Frontend Dev",
      emoji: "👨‍💻",
      bgGradient: "from-purple-500 to-orange-400",
    },
    {
      title: "UI / UX Design",
      emoji: "👨‍💻",
      bgGradient: "from-red-400 to-pink-500",
    },
    {
      title: "Web Developer",
      emoji: "👨‍💻",
      bgGradient: "from-orange-400 to-purple-500",
    },
  ];

  return (
    <section id="service" className="py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-400">Service</h2>
      </div>

      <div className="flex justify-center space-x-6">
        {services.map((exp, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center w-64 p-6 rounded-lg shadow-md bg-gradient-to-r ${exp.bgGradient} transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`} // Added animation classes
          >
            <span className="text-6xl mb-4">{exp.emoji}</span>
            <h3 className="text-2xl font-bold text-center">{exp.title}</h3> {/* Ensure the title is centered */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
