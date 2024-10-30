import React from 'react';

const Small = () => {
  return (
    <div className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      {/* Left Section - Aviation */}
      <div className="text-white font-bold text-lg">
        AVIATION
      </div>

      {/* Right Section - FAQs and Contact Us Button */}
      <div className="flex items-center space-x-4">
        <div className="text-white text-sm font-bold">
          FAQS
        </div>
        <button className="bg-black text-white font-semibold px-4 py-2 rounded">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Small;
