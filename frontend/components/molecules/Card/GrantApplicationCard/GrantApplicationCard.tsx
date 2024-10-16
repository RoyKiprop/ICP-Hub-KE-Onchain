import React from 'react';
import Image from 'next/image'

interface GrantApplicationCardProps {
  isDarkMode?: boolean;
}

const GrantApplicationCard: React.FC<GrantApplicationCardProps> = ({ isDarkMode = false }) => {
  const bgColor = isDarkMode ? 'bg-[#eeb83c]' : '';
  const borderRadius = isDarkMode ? '' : 'border-4 border-[#571E1E]';
  const imageMargin = isDarkMode ? '' : 'ml-6'; 

  return (
    <div className={`mx-auto rounded-2xl overflow-hidden ${borderRadius} ${bgColor}`}>
      <div className="p-6 flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Grant Application</h2>
          <p className="text-gray-600 text-sm">
            Our grant services are designed to provide the financial support and
            resources needed to turn your groundbreaking ideas into reality.
          </p>
        </div>
        <div className={imageMargin}>
          <div className="relative mt-6">
            {/* <img src="/images/GrantApplication.svg" alt="ICP Hub Kenya Group" className="w-full h-full object-cover rounded-[30px]" /> */}
            <Image src={'/images/GrantApplication.svg'} width={200} height={100} alt='Grant Application' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantApplicationCard;