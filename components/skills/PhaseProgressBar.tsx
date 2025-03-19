import React from 'react';
import { PhaseOverview } from '@/types/ai-journey';

interface PhaseProgressBarProps {
  phase: PhaseOverview;
}

const PhaseProgressBar: React.FC<PhaseProgressBarProps> = ({ phase }) => {
  // Function to determine the color based on completion percentage
  const getColorClass = (percentage: number) => {
    if (percentage < 30) return 'from-red-500 to-red-600';
    if (percentage < 60) return 'from-yellow-500 to-yellow-600';
    return 'from-green-500 to-green-600';
  };

  return (
    <div className="bg-dark-gray rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-off-white">{phase.name}</h3>
        <span className="text-sm px-2 py-1 rounded-full bg-burgundy-dark text-off-white">
          {phase.status}
        </span>
      </div>
      <p className="text-gray-300 text-sm mb-4">{phase.description}</p>
      
      <div className="relative pt-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-off-white">
              Progress
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold inline-block text-off-white">
              {phase.completionPercentage}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-gray-700">
          <div
            style={{ width: `${phase.completionPercentage}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${getColorClass(phase.completionPercentage)}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PhaseProgressBar; 