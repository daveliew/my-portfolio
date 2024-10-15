'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface Skill {
  name: string;
  score: number;
}

interface SkillsChartProps {
  skills: Skill[];
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar name="Skills" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillsChart;
