import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface TechJourneyStatsProps {
  title: string;
  stats: Stat[];
  isDarkMode?: boolean;
}

const TechJourneyStats: React.FC<TechJourneyStatsProps> = ({ title, stats, isDarkMode = false }) => {
  // const bgColor = isDarkMode ? 'b' : '';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const statValueColor = isDarkMode ? 'text-[#e2b134]' : 'text-[#571E1E]';

  return (
    <div className={`p-8 font-gordita max-w-2xl mx-auto ${textColor}`}>
      <h2 className="text-4xl font-bold mb-6 leading-tight">
        <span className="font-gordita">{title}</span>
      </h2>
      
      <div className="flex justify-between mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center mr-6">
            <p className={`font-bold text-[30px] ${statValueColor}`}>{stat.value}</p>
            <p className="text-sm mt-2 uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechJourneyStats;