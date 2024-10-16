import React from 'react';
import GradientButton from '../../../atoms/GradientButton/GradientButton';
import Image from 'next/image';

const BlockchainEducationBanner: React.FC = () => {
  return (
    <div className="mx-auto my-20 relative overflow-hidden h-[70vh] p-[40px_30px] bg-gradient-to-r from-[#571E1E] to-[#340A0A] rounded-[40px] shadow-xl border-[4px] border-[#400d0b] hero-section flex flex-row items-center max-w-6xl">
      {/* Text Section */}
      <div className="flex-1 text-white text-base pr-4">
        <h1 className="text-5xl font-bold mb-7">
          Revolutionizing <br /> Blockchain Education
        </h1>
        <p className="font-thin mb-4 text-xl">
          At the forefront of technology is ICP Hub Kenya <br /> dedicated to advancing the Internet Computer <br/> ecosystem.
        </p>
        <GradientButton onClick={() => console.log('Explore')}>
          Explore ICP Hub Kenya
        </GradientButton>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center w-1/2 m[-30%]">
        <Image src={'/images/HeroImage.svg'} width={400} height={80} alt='Grant Application' loading='lazy' />
      </div>
    </div>
  );
};

export default BlockchainEducationBanner;