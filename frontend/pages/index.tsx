import React from 'react'
import { FiFigma, FiCode, FiBox, FiDollarSign, FiAirplay } from 'react-icons/fi'

import ButtonLink from '../components/atoms/Button/ButtonLink'
import LineDivider from '../components/atoms/LineDivider'
import FeatureCard from '../components/molecules/Card/FeatureCard'
import PageSentence from '../components/molecules/PageSentence'
import PricingCard from '../components/molecules/Card/PricingCard'
import ProjectCard from '../components/molecules/Card/ProjectCard'
import SectionSentence from '../components/molecules/SectionSentence'
import LogoList from '../components/organisms/LogoList'
import TestimonialList from '../components/organisms/TestimonialList'
import PageTemplate from '../components/templates/PageTemplate'
import Image from 'next/image'
import TeamCard from '../components/molecules/Card/TeamCard'
import CallOut from '../components/organisms/CallOut'
import Footer from '../components/organisms/Footer'
import Link from 'next/link'
import TechJourneyStats from '../components/molecules/Card/JourneyStarts'
import GrantApplicationCard from '../components/molecules/Card/GrantApplicationCard/GrantApplicationCard'
import ICPEducationCard from '../components/molecules/Card/ICPEducationCard/ICPEducationCard'
import InnovationIncubatorCard from '../components/molecules/Card/InnovatorCard/InnovatorCard'
import VisionVideoCard from '../components/molecules/Card/VisionCard/VisionCard'
import BlockchainEducationBanner from '../components/molecules/Card/BlockchainEducationBanner/BlockchainEducationBanner'

const statsData = [
  { value: '20+', label: 'Hackathon' },
  { value: '1k+', label: 'Developers' },
  { value: '10+', label: 'Startups' },
];

const Home = () => {
  return (
    <>

        <PageTemplate title="Home - ICP HUB KE">

        {/* Banner Section */}
        <BlockchainEducationBanner /> 


        {/* Feature List */}
        <section className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl">
  
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TechJourneyStats 
              title="We provide easy medium to get started in your tech journey" 
              stats={statsData} 
            />
            <GrantApplicationCard /> 
          </div>
          
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ICPEducationCard /> 
            <InnovationIncubatorCard /> 
          </div>

        </section>

        {/* Vision Card */}
        <VisionVideoCard />

        </PageTemplate>
    </>
  )
}

export default Home
