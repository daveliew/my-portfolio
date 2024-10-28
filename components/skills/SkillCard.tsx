import React from 'react';
import { SkillLevel } from '@/types/skills';

interface SkillCardProps {
  name: string;
  data: SkillLevel;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, data }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-medium capitalize">{name.replace('_', ' ')}</h5>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
          Level {data.score}
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Evidence:</span> {data.evidence}
        </p>
        <p>
          <span className="font-medium">Growth Path:</span> {data.growth_path}
        </p>
      </div>
    </div>
  );
};
