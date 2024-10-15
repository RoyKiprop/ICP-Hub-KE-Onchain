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

const About = () => {
  return (
    <PageTemplate title="About - ICP Hub Kenya">
        <FirstComponent /> 
    </PageTemplate>
  )
}

export default About
