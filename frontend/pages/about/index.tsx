import Image from 'next/image'
import React from 'react'

import LineDivider from '../../components/atoms/LineDivider'; 
import TeamCard from '../../components/molecules/Card/TeamCard';
import PageSentence from '../../components/molecules/PageSentence';
import SectionSentence from '../../components/molecules/SectionSentence';
import TestimonialList from '../../components/organisms/TestimonialList';
import PricingCard from '../../components/molecules/Card/PricingCard';
import IconListItem from '../../components/molecules/IconListItem';
import StatisticList from '../../components/organisms/StatisticList';
import PageTemplate from '../../components/templates/PageTemplate';
import Footer from '../../components/organisms/Footer';
import FirstComponent from './FirstComponent';
import VisionMissionComponent from './VisionMissionSection';
import ICPEducationCard from '../../components/molecules/Card/ICPEducationCard/ICPEducationCard';
import TechJourneyStats from '../../components/molecules/Card/JourneyStarts';
import GrantApplicationCard from '../../components/molecules/Card/GrantApplicationCard/GrantApplicationCard';
import InnovationIncubatorCard from '../../components/molecules/Card/InnovatorCard/InnovatorCard';

const statsData = [
  { value: '20+', label: 'Hackathon' },
  { value: '1k+', label: 'Developers' },
  { value: '10+', label: 'Startups' },
];

const About = () => {
  return (
    <PageTemplate title="About - ICP Hub Kenya">
        <FirstComponent /> 

        <div className="bg-[#212121] p-8"> {/* Dark background with padding */}
        <VisionMissionComponent />
          {/* Feature List */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <TechJourneyStats 
                title="We provide easy medium to get started in your tech journey" 
                stats={statsData} 
                isDarkMode={true}
              />
              <GrantApplicationCard 
                isDarkMode={true}
              /> 
            </div>
            
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <ICPEducationCard /> 
              <InnovationIncubatorCard 
                isDarkMode={true}
              /> 
            </div>

          </section>
        </div>

    </PageTemplate>
  )
}

export default About
