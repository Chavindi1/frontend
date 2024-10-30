import React from 'react';
import Image1 from '../assets/business-aviation.jpg';
import Image2 from '../assets/aircraft-manufacturers.jpg';
import Image3 from '../assets/airlines.jpg';
import Image4 from '../assets/charter-operators.jpg';

const Third = () => {
  return (
    <div className="bg-black text-white py-8 flex justify-around">
      {/* Business Aviation Section */}
      <div className="w-1/4 text-center p-4 bg-black rounded-lg">
        <img src={Image1} alt="Business Aviation" className="w-full h-auto mb-4 rounded-lg" />
        <h3 className="text-lg font-bold mb-2">BUSINESS AVIATION</h3>
        <p className="text-sm">Lanka is expanding its list of certifications and supported aircraft. Purchase through one of our authorized dealers.</p>
      </div>

      {/* Aircraft Manufacturers Section */}
      <div className="w-1/4 text-center p-4 bg-black rounded-lg">
        <img src={Image2} alt="Aircraft Manufacturers" className="w-full h-auto mb-4 rounded-lg" />
        <h3 className="text-lg font-bold mb-2">AIRCRAFT MANUFACTURERS</h3>
        <p className="text-sm">From supersonic aircraft to helicopters and VTOL, Lanka has a hardware and service solution that fits your application.</p>
      </div>

      {/* Airlines Section */}
      <div className="w-1/4 text-center p-4 bg-black rounded-lg">
        <img src={Image3} alt="Airlines" className="w-full h-auto mb-4 rounded-lg" />
        <h3 className="text-lg font-bold mb-2">AIRLINES</h3>
        <p className="text-sm">With over 30,000 flights on our high-reliability Aero Terminal and flight-proven global coverage, Lanka is well positioned to transform your passenger experience.</p>
      </div>

      {/* Charter Operators Section */}
      <div className="w-1/4 text-center p-4 bg-black rounded-lg">
        <img src={Image4} alt="Charter Operators" className="w-full h-auto mb-4 rounded-lg" />
        <h3 className="text-lg font-bold mb-2">CHARTER OPERATORS</h3>
        <p className="text-sm">Contact us to learn how we can transform the Charter experience with global coverage and 24/7 support.</p>
      </div>
    </div>
  );
};

export default Third;

