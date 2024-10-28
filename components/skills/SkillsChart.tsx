'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts';
import { Skill } from '../../types/skills';

interface SkillsChartProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
  selectedSkill: Skill | null;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, onSkillClick, selectedSkill }) => {
  return (
    <div className="w-full h-[400px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
          <PolarGrid 
            stroke="var(--primary-yellow-dark)" 
          />
          <PolarAngleAxis 
            dataKey="name" 
            tick={false} // Hide the default labels
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
            dataKey="score" 
            stroke="var(--burgundy)" 
            fill="var(--primary-yellow)" 
            fillOpacity={0.6} 
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`absolute cursor-pointer transition-colors duration-200 ${
              selectedSkill?.name === skill.name ? 'text-[var(--light-burgundy)] font-bold' : 'text-off-white hover:text-burgundy'
            }`}
            style={{
              top: `${50 - 40 * Math.cos((index / skills.length) * Math.PI * 2 - Math.PI / 2)}%`,
              left: `${50 + 40 * Math.sin((index / skills.length) * Math.PI * 2 - Math.PI / 2)}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
            onClick={() => onSkillClick(skill)}
          >
            <span className="text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as Skill;
    return (
      <div className="bg-dark-gray p-2 rounded shadow">
        <p className="text-off-white">{`${data.name}: ${data.score}`}</p>
      </div>
    );
  }
  return null;
};

export default SkillsChart;
