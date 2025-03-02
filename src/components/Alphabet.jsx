import React from 'react';

const Alphabet = () => {
  return (
    <div className="h-screen md:max-w-6xl mx-auto flex flex-col items-center justify-center px-10 text-center">
      <h1 className="text-6xl md:text-5xl font-extrabold text-gray-700 tracking-widest leading-tight font-inter break-words">
        {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter, index) => (
          <span 
            key={index} 
            className="inline-block transition duration-300 hover:text-gray-800 hover:scale-110"
          >
            {letter}
          </span>
        ))}
      </h1>
      <div className='flex flex-row gap-4 max-w-4xl my-8'>
        <div className='bg-white rounded-2xl shadow-md h-48 w-1/3'></div>
        <div className='bg-white rounded-2xl shadow-md h-48 w-1/3'></div>
        <div className='bg-white rounded-2xl shadow-md h-48 w-1/3'></div>
      </div>
    </div>
  );
};

export default Alphabet;
