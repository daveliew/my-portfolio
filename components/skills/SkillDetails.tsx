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
    <div>
      <h3 className="text-2xl font-semibold mb-4">{name}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={subskills} layout="vertical">
          <XAxis type="number" domain={[0, 5]} />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillDetails;
