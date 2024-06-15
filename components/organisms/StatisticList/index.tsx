import StatisticListItem from '../../molecules/StatisticListItem'
import React from 'react'
import { FiFlag } from 'react-icons/fi'

const StatisticList = () => {
  return (
    <div className="w-full px-8 py-6 bg-light rounded flex flex-col gap-5 md:flex-row md:justify-around md:items-center">
      <StatisticListItem icon={<FiFlag />} label="HACKATHONS" value="20+" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="DEVELOPERS" value="1000+" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="STARTUPS" value="10+" />
    </div>
  )
}

export default StatisticList
