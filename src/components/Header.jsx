import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 w-3/4">
      <nav className="bg-white/90 border-gray-200 border text-white p-3 rounded-full flex justify-between items-center px-6 shadow-md">
        
        <a href='/' className='flex justify-center flex-row items-center'>
            {/* <img src="/shadeshifter_logo.jpeg" alt="Shade Shifter Logo"  className='h-12 mx-3 w-12 rounded-full'/> */}
            <h1 className="text-xl font-extrabold text-gray-600 tracking-wide">Shade Shifter</h1>
        </a>

        <div className="md:flex md:gap-6 hidden">
          <a href="#" className="text-gray-600 transition">Home</a>
          <a href="#" className="text-gray-600 transition">Palettes</a>
          <a href="#" className="text-gray-600 transition">Generator</a>
          <a href="#" className="text-gray-600 transition">Saved</a>
        </div>

        {/* Sign In Button */}
        <button className="bg-white border-gray-200 border hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full transition">
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Header;
