import React from 'react';
// import { DollarSign } from 'lucide-react';

const GrantApplicationCard = () => {
  return (
    <div className="mx-auto rounded-2xl overflow-hidden border-4 border-[#571E1E]">
      <div className="p-6 flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Grant Application</h2>
          <p className="text-gray-600">
            Our grant services are designed to provide the financial support and
            resources needed to turn your groundbreaking ideas into reality.
          </p>
        </div>
        <div className="ml-6">
          <div className="relative">
            <img src="/images/GrantApplication.svg" alt="ICP Hub Kenya Group" className="w-full h-full object-cover rounded-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantApplicationCard;