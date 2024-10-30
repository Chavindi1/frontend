import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white bg-opacity-70 text-gray-800 font-semibold">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wider">L A N K A</div>

      {/* Center Links */}
      <div className="space-x-8 flex">
        <a href="#fixed-site" className="hover:underline hover:text-gray-600">FIXED SITE</a>
        <a href="#land-mobility" className="hover:underline hover:text-gray-600">LAND MOBILITY</a>
        <a href="#maritime" className="hover:underline hover:text-gray-600">MARITIME</a>
        <a href="#aviation" className="hover:underline hover:text-gray-600">AVIATION</a> {/* Underlined to indicate active link */}
        <a href="#direct-to-cell" className="hover:underline hover:text-gray-600">DIRECT TO CELL</a>
      </div>

      {/* Right Side Links */}
      <div className="space-x-6 flex items-center">
        <a href="#personal" className="hover:text-gray-600">PERSONAL</a>
        <a href="#business" className="hover:text-gray-600">BUSINESS</a>
        <div className="border-l-2 border-gray-500 h-6 mx-2"></div> {/* Divider */}
        <button className="text-2xl font-bold">≡</button> {/* Icon (can be replaced with actual icon library) */}
      </div>
    </nav>
  );
};

export default Navbar;
