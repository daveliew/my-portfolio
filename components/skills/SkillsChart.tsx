'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, RadarProps } from 'recharts';

interface Skill {
  name: string;
  score: number;
  subskills: { name: string; score: number }[];
}

interface SkillsChartProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, onSkillClick }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
        <PolarGrid stroke="var(--dark-gray)" />
        <PolarAngleAxis 
          dataKey="name" 
          tick={{ fill: 'var(--off-white)', fontSize: 12 }}
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 5]} 
          tick={{ fill: 'var(--off-white)' }}
        />
        <Radar 
          name="Skills" 
          dataKey="score" 
          stroke="var(--burgundy)" 
          fill="var(--primary-yellow)" 
          fillOpacity={0.6} 
          onClick={(event: any) => {
            const payload = (event as RadarProps)?.payload;
            if (payload) {
              onSkillClick(payload as Skill);
            }
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillsChart;
