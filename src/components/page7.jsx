import React from 'react';
import backgroundImage from '../assets/background-pattern.jpg'; // Replace with the actual path to your background image

const Page7 = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">STAY CONNECTED WHILE IN FLIGHT</h1>
      <p className="text-lg mb-8 text-center">Complete the form to schedule a sales consultation.</p>
      <button className="px-6 py-3 bg-white text-black rounded font-semibold hover:bg-gray-300 transition duration-200">
        CONTACT US
      </button>
    </div>
  );
};

export default Page7;

