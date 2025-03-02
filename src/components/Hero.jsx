import React from 'react';

const Hero = () => {
  return (
    <div className='h-screen md:max-w-6xl mx-auto flex-col md:flex-row flex items-center justify-center px-10'>
      {/* Left Section */}
      <div className='md:w-1/2 w-full flex flex-col items-center justify-center text-center'>
        <h1 className='text-7xl md:text-8xl font-extrabold text-gray-700 tracking-wide font-inter'>SHADE SHIFTER</h1>
        <p className='mt-4 text-lg text-gray-500 max-w-md'>A dynamic color palette tool that lets you explore, create, and apply beautiful color schemes effortlessly. Transform your designs with ease.</p>
      </div>

      <div className='w-1/2 hidden md:mt-6 md:block p-10'>
        <div className='columns-4 gap-4 space-y-4'>
            <div className='h-40 border card'></div>
            <div className='h-28 border card'></div>
            <div className='h-32 border card'></div>
            <div className='h-32 border card'></div>
            <div className='h-40 border card'></div>
            <div className='h-28 border card'></div>
            <div className='h-28 border card'></div>
            <div className='h-32 border card'></div>
            <div className='h-40 border card'></div>
            <div className='h-32 border card'></div>
            <div className='h-40 border card'></div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
