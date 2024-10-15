import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Subskill {
  name: string;
  score: number;
}

interface SkillDetailsProps {
  name: string;
  subskills: Subskill[];
}

const SkillDetails: React.FC<SkillDetailsProps> = ({ name, subskills }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-off-white">{name}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={subskills} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" domain={[0, 5]} stroke="var(--off-white)" />
          <YAxis dataKey="name" type="category" width={150} stroke="var(--off-white)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--dark-gray)', 
              border: '1px solid var(--burgundy)',
              borderRadius: '4px',
              color: 'var(--off-white)'
            }} 
          />
          <Bar dataKey="score" fill="var(--primary-yellow)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillDetails;
