'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface Skill {
  name: string;
  score: number;
}

interface SkillsChartProps {
  skills: Skill[];
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={skills}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--lightest-navy)" />
        <XAxis type="number" domain={[0, 5]} stroke="var(--lightest-slate)" />
        <YAxis dataKey="name" type="category" width={120} stroke="var(--lightest-slate)" />
        <Tooltip 
          contentStyle={{ backgroundColor: 'var(--light-navy)', border: 'none' }}
          labelStyle={{ color: 'var(--lightest-slate)' }}
        />
        <Bar dataKey="score" fill="var(--burgundy)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SkillsChart;
