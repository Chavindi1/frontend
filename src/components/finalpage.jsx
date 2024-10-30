import React from 'react';

const FinalPage = () => {
  return (
    <div className="min-h-screen flex flex-col text-white bg-black">
      {/* Navigation Bar */}
      <nav className="bg-black border-b border-gray-700 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Lanka</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              {/* Icon for Mobile Dropdown */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-grow px-4 sm:px-8 py-12">
        {/* Three Columns Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          {/* Reliable Column */}
          <div className="border-l border-white pl-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">RELIABLE</h2>
            <p className="text-xs sm:text-sm mb-4">
              "Lanka is fast. We get 200 Mbps to the airplanes. It is actually faster than many of the homes in North America, so you feel like you're at home or in the office. It is an incredibly reliable and fast product that SpaceX designed."
            </p>
            <p className="text-xs sm:text-sm">- Alex Wilcox, JSX Co-Founder and CEO</p>
          </div>

          {/* Significant Technology Column */}
          <div className="border-l border-white pl-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">SIGNIFICANT TECHNOLOGY</h2>
            <p className="text-xs sm:text-sm mb-4">
              "Through Lanka, SpaceX has created the most significant technology advancement for private jet travel that we've seen in the last 2 decades. Reliable connectivity is vital to our Owners and for the first time, the technology exists to deliver on this expectation."
            </p>
            <p className="text-xs sm:text-sm">- XYVZ, FlexJet Senior Vice President of Maintenance</p>
          </div>

          {/* Global Reach Column */}
          <div className="border-l border-white pl-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">GLOBAL REACH</h2>
            <p className="text-xs sm:text-sm mb-4">
              "SpaceX really cracked the code - literally, in terms of technology - to be able to deliver a wide bandwidth of very high quality connectivity to an airplane within global reach."
            </p>
            <p className="text-xs sm:text-sm">- Peter Ingram, ABCD Airlines CEO</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6">
          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            <a href="#" className="mb-2 sm:mb-0 sm:mr-4 hover:underline">Careers</a>
            <a href="#" className="mb-2 sm:mb-0 sm:mr-4 hover:underline">Satellite Operators</a>
            <a href="#" className="mb-2 sm:mb-0 sm:mr-4 hover:underline">Authorized Reseller</a>
            <a href="#" className="mb-2 sm:mb-0 sm:mr-4 hover:underline">Privacy & Legal</a>
            <a href="#" className="mb-2 sm:mb-0 sm:mr-4 hover:underline">Privacy Preferences</a>
            <a href="#" className="hover:underline">Gear Store</a>
          </div>

          {/* Newsletter Sign-up */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
            <span className="text-xs sm:text-sm mb-2 sm:mb-0 sm:mr-4">Interested in staying up to date with Lanka?</span>
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-1 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto bg-transparent border border-gray-600 rounded text-white placeholder-gray-400"
              />
              <button className="text-xs sm:text-sm font-semibold hover:underline">SIGN UP &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
