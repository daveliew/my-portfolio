'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Skill } from './types';

interface SkillsChartProps {
  skills: {
    name: string;
    subskills: {
      [key: string]: number;
    };
  }[];
  onSkillClick: (skill: Skill) => void;
  selectedSkill: Skill | null;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-gray p-2 rounded border border-burgundy">
        <p className="text-off-white">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, onSkillClick, selectedSkill }) => {
  const chartData = skills.map(skill => ({
    name: skill.name,
    value: Math.round(
      Object.values(skill.subskills).reduce((acc, val) => acc + val, 0) / 
      Object.keys(skill.subskills).length
    ),
    originalSkill: skill
  }));

  return (
    <div className="w-full h-[400px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="var(--primary-yellow-dark)" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={false} // Hide default labels
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 5]} 
            axisLine={false}
            tick={false}
            tickCount={6}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="var(--burgundy)"
            fill="var(--primary-yellow)"
            fillOpacity={0.6}
            onClick={(data) => onSkillClick(data.originalSkill)}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {chartData.map((data, index) => (
          <div
            key={data.name}
            className={`absolute cursor-pointer transition-colors duration-200 ${
              selectedSkill?.name === data.name ? 'text-[var(--light-burgundy)] font-bold' : 'text-off-white hover:text-burgundy'
            }`}
            style={{
              top: `${50 - 40 * Math.cos((index / chartData.length) * Math.PI * 2 - Math.PI / 2)}%`,
              left: `${50 + 40 * Math.sin((index / chartData.length) * Math.PI * 2 - Math.PI / 2)}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
            onClick={() => onSkillClick(data.originalSkill)}
          >
            <span className="text-sm">
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsChart;
