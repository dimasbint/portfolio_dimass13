import React, { useState } from 'react';

const Projects: React.FC = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(1);

  const totalSlides = 3; // Number of slides

  // Function to handle next and previous navigation
  const goToSlide = (slideNumber: number) => {
    if (slideNumber > totalSlides) {
      setCurrentSlide(1);
    } else if (slideNumber < 1) {
      setCurrentSlide(totalSlides);
    } else {
      setCurrentSlide(slideNumber);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen bg-black pt-20">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block mb-8">
          Projects
        </h2>

        {/* Carousel Section */}
        <div className="carousel w-[800px] h-[500px] rounded-lg overflow-hidden shadow-lg relative">
          <div
            className={`carousel-item relative w-full h-full ${currentSlide === 1 ? 'block' : 'hidden'}`}
          >
            <img
              src="/src/assets/d.png" // Updated with uploaded image
              className="w-full h-full"
              alt="Slide 1"
            />
          </div>
          <div
            className={`carousel-item relative w-full h-full ${currentSlide === 2 ? 'block' : 'hidden'}`}
          >
            <img
              src="/src/assets/d1.png" // Updated with uploaded image
              className="w-full h-full"
              alt="Slide 2"
            />
          </div>
          <div
            className={`carousel-item relative w-full h-full ${currentSlide === 3 ? 'block' : 'hidden'}`}
          >
            <img
              src="/src/assets/d2.png" // Updated with uploaded image
              className="w-full h-full"
              alt="Slide 3"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle"
              onClick={() => goToSlide(currentSlide - 1)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() => goToSlide(currentSlide + 1)}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
