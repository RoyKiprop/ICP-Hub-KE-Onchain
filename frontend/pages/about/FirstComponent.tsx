import React from 'react';
import Image from 'next/image';

const FirstComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-br to-indigo-100 rounded-xl">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          About ICP Kenya Hub
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Enroll in our free dacade course and embark on an exciting adventure into the world of decentralized applications on ICP. Complete the course and earn a Certificate and ICP Tokens!
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div className="col-span-2 flex justify-center items-center">
          <Image 
            src={'/images/About.svg'} 
            width={300} 
            height={200} 
            alt='Grant Application' 
            loading='lazy'
            className="rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;