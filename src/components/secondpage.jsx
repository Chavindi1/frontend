import React from 'react';

const SecondPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
      
      {/* Top Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-wide uppercase">
          High-Speed Internet In Flight
        </h1>
      </div>

      {/* Horizontal Information Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mb-8 w-full max-w-6xl space-y-4 lg:space-y-0 lg:space-x-16 text-center">
        {/* Download Section */}
        <div>
          <div className="text-lg font-semibold tracking-wide uppercase">
            Download per terminal
          </div>
          <div className="text-3xl font-bold">40-220 MBPS</div>
        </div>

        {/* Upload Section */}
        <div>
          <div className="text-lg font-semibold tracking-wide uppercase">
            Upload per terminal
          </div>
          <div className="text-3xl font-bold">8-25 MBPS</div>
        </div>

        {/* Latency Section */}
        <div>
          <div className="text-lg font-semibold tracking-wide uppercase">
            Latency
          </div>
          <div className="text-3xl font-bold">Less than 99 ms</div>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Business 20GB</h2>
          <div className="text-4xl font-bold mb-2">$2,000</div>
          <div className="text-lg mb-1">/MO</div>
          <p className="text-sm mb-4">Global 20GB Business Aviation Data</p>
          <p className="text-sm text-gray-400">$100/GB Additional Data</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Business Unlimited</h2>
          <div className="text-4xl font-bold mb-2">$10,000</div>
          <div className="text-lg mb-1">/MO</div>
          <p className="text-sm mb-4">Global Unlimited Business Aviation Data</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Government Unlimited</h2>
          <p className="text-sm mb-4">Contact us for details and pricing</p>
          <p className="text-sm text-gray-400">
            Enhanced capabilities support a range of Government aircraft and Special Missions
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Commercial Unlimited</h2>
          <p className="text-sm mb-4">Contact us for details and pricing</p>
          <p className="text-sm text-gray-400">
            Enhanced speeds support streaming for every passenger
          </p>
          <p className="text-sm text-gray-400">Includes BBJ/ACJ airframes</p>
        </div>
      </div>

      {/* Contact Button */}
      <button className="mt-8 px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-300">
        CONTACT US
      </button>
    </div>
  );
};

export default SecondPage;
