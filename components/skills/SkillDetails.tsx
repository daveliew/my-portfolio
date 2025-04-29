import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Skill } from '@/types/skills';

interface SkillDetailsProps {
  skill: Skill;
}

const SkillDetails: React.FC<SkillDetailsProps> = ({ skill }) => {
  // Transform the subskills object into an array format matching your original structure
  const subskills = Object.entries(skill.subskills).map(([name, score]) => ({
    name,
    score // Using score instead of proficiency to match original
  }));

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4 text-[var(--text-primary)] hidden md:block">
        {skill.name}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart 
          data={subskills} 
          layout="vertical" 
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis 
            type="number" 
            domain={[1, 5]} 
            ticks={[1, 2, 3, 4, 5]} 
            stroke="var(--text-primary)" 
          />
          <YAxis dataKey="name" type="category" width={150} stroke="var(--text-primary)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--dark-grey-secondary)', 
              border: '1px solid var(--accent-primary)',
              borderRadius: '4px',
              color: 'var(--text-primary)'
            }} 
          />
          <Bar dataKey="score" fill="var(--accent-secondary)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillDetails;
