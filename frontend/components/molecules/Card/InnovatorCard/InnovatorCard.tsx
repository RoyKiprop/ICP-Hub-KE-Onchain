import React from 'react';
import Image from 'next/image'

const InnovationIncubatorCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg text-white p-6">
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-6 mt-6">
          <h2 className="text-4xl font-bold mb-4">Innovation Incubator</h2>
          <p className="text-sm mb-2 font-light">
            Our Incubator Program is at the heart of our mission to inspire creativity and
            drive progress within the blockchain and Internet Computer community.
          </p>
        </div>
        <div className="w-1/3">
            <Image src={'/images/InnovatorCard.svg'} width={200} height={100} alt='Grant Application' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default InnovationIncubatorCard;