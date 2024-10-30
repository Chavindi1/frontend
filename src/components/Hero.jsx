import React from 'react';
import airplaneImage from '../assets/airplane.jpg';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${airplaneImage})` }}
    >
      {/* Include Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="text-center bg-black bg- bg-transparent">
        <h1 className="text-6xl font-bold">LANKA FOR AVIATION</h1>
        <p className="text-lg mt-4">Available now on your airframe.</p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-bold rounded hover:bg-blue-600">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Hero;

