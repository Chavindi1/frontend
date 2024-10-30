import React from 'react';
import backgroundImage from '../assets/background.jpg';

const Page4 = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      {/* Title Section */}
      <h1 className="text-5xl font-bold mb-4">GLOBAL COVERAGE</h1>

      {/* Description Section */}
      <p className="text-lg max-w-2xl mb-8">
        Lanka has provided high-speed, low-latency internet on tens of thousands of flights and counting,
        keeping passengers connected from the moment they step onboard their aircraft and throughout their
        travels all around the world. See our <span className="font-bold">FAQs</span> to learn more about where 
        Lanka is authorized for in-motion aviation use.
      </p>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-8">
        {/* Flights Travelled */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">FLIGHTS TRAVELLED</h2>
          <p className="text-3xl font-bold">55K+</p>
        </div>

        {/* In-Flight Hours */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">IN-FLIGHT HOURS</h2>
          <p className="text-3xl font-bold">110K+</p>
        </div>

        {/* Miles Travelled */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">MILES TRAVELLED</h2>
          <p className="text-3xl font-bold">55M+</p>
        </div>
      </div>
    </div>
  );
};

export default Page4;


