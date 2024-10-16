import React from 'react';
import Image from 'next/image';

const VisionMissionComponent = () => {
  return (
    <div className="bg-[#212121] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Group Photo */}
        <div className="relative mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/Mission.svg"
            alt="Group photo of blockchain enthusiasts"
            width={1200}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <h2 className="text-5xl font-extrabold mb-4">Our Vision</h2>
            <p className="text-md leading-relaxed">
              We're dedicated to democratizing blockchain technology through
              accessible education and empowering developers to create real
              decentralized applications on the Internet Computer platform.
              Through collaboration within the blockchain industry, we drive
              innovation and progress.
            </p>
          </div>
          <div className="relative md:border-l md:border-gray-300 md:pl-8">
            <h2 className="text-5xl font-extrabold mb-4">Our Mission</h2>
            <p className="text-md leading-relaxed">
              We envision a world where blockchain technology empowers
              individuals and organizations, enabling them to unlock their full
              potential. The Internet Computer is our chosen vessel for this
              vision, and we are dedicated to fueling its growth and adoption
              throughout East Africa.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMissionComponent;