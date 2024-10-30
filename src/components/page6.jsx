import React from 'react';
import laserImage from '../assets/laser-mesh-network.jpg'; // Replace with the actual path to your image

const Page6 = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center bg-black text-white px-8 py-12">
      {/* Left Section - Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <img 
          src={laserImage} 
          alt="Laser Mesh Network" 
          className="w-full h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">LASER MESH NETWORK</h1>
        <p className="text-base mb-4">
          Lanka's optical space lasers transmit data throughout the Lanka constellation, providing continuous 
          service in areas far from SpaceX ground stations - providing coverage for your flights over the open ocean 
          and in polar regions.
        </p>
        <p className="text-base">
          Lanka's constellation contains 9,000+ lasers transmitting 10Pb+ of daily data traffic. These lasers can 
          sustain a 100Gbps connection per link, can connect up to 3,300+ miles apart, and maintain a mesh network 
          with 99.99% uptime.
        </p>
      </div>
    </div>
  );
};

export default Page6;
