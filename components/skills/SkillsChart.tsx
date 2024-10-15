'use client';

import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="w-full h-[400px] relative">
      <ResponsiveContainer width="100%" height="100%">
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
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="absolute cursor-pointer hover:text-burgundy transition-colors duration-200"
            style={{
              top: `${50 - 40 * Math.cos((index / skills.length) * Math.PI * 2 - Math.PI / 2)}%`,
              left: `${50 + 40 * Math.sin((index / skills.length) * Math.PI * 2 - Math.PI / 2)}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
            onClick={() => onSkillClick(skill)}
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <span className={`text-sm font-semibold ${activeSkill === skill.name ? 'text-burgundy' : ''}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-dark-gray p-2 rounded shadow">
        <p className="text-off-white">{`${data.name}: ${data.score}`}</p>
      </div>
    );
  }
  return null;
};

export default SkillsChart;
