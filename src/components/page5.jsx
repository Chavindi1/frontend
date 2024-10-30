import React from 'react';
import supportImage from '../assets/support.jpg'; // Replace with the actual path to your image

const Page5 = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center bg-black text-white px-8 py-12">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <h1 className="text-5xl font-bold mb-4">DEDICATED AVIATION SUPPORT</h1> {/* Increased text size */}
        <p className="text-base mb-4"> {/* Reduced text size */}
          Our 24/7 Aviation Team includes telephone assistance, specialized account management, and flight reliability teams.
        </p>
        <p className="text-base"> {/* Reduced text size */}
          Our Engineering Team is committed to providing reliable connectivity using real-time telemetry and high-fidelity performance monitoring.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2">
        <img 
          src={supportImage} 
          alt="Aviation Support Dashboard" 
          className="w-full h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
};

export default Page5;
