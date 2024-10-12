import React from 'react';
import Image from 'next/image'

const ICPEducationCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-[#582727] rounded-2xl overflow-hidden shadow-lg text-white p-6">
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-6">
          <h2 className="text-4xl font-bold mb-4">ICP <br/>Education</h2>
          <p className="text-sm mb-2 font-light">
            Our educational programs are designed to empower individuals and organizations
            with the expertise needed to navigate the blockchain and ICP ecosystem.
          </p>
        </div>
        <div className="w-1/3 relative">
          <div className="aspect-square relative">
            <div className="absolute inset-0 rounded-full"></div>
            <Image src={'/images/EducateCard.svg'} width={200} height={100} alt='Grant Application' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICPEducationCard;