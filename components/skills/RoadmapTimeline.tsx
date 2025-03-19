import React from 'react';
import { Milestone } from '@/types/ai-journey';

interface RoadmapTimelineProps {
  milestones: Milestone[];
}

export function RoadmapTimeline({ milestones }: RoadmapTimelineProps) {
  // Function to calculate time-based completion percentage
  const calculateCompletion = (milestone: Milestone): number => {
    // If the milestone is completed, return 100%
    if (milestone.status.toLowerCase() === 'completed') {
      return 100;
    }
    
    // If the milestone is not started, return 0%
    if (milestone.status.toLowerCase() === 'not started') {
      return 0;
    }
    
    const startDate = new Date(milestone.startDate);
    const currentDate = new Date();
    
    // Calculate total project duration (90 days as requested)
    const totalDuration = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds
    
    // Calculate elapsed time
    const elapsedTime = Math.max(0, currentDate.getTime() - startDate.getTime());
    
    // Calculate percentage (capped at 100%)
    return Math.min(100, Math.round((elapsedTime / totalDuration) * 100));
  };

  return (
    <div className="space-y-8">
      {milestones.map((milestone, index) => {
        const quarterDate = new Date(2025, (index + 1) * 3, 1); // Start from Q2 2025
        const quarterLabel = `Q${Math.floor(((index + 1) % 4) + 1)} ${quarterDate.getFullYear()}`;
        
        // Calculate the completion percentage
        const completionPercentage = milestone.completionPercentage !== undefined 
          ? milestone.completionPercentage 
          : calculateCompletion(milestone);
        
        return (
          <div key={index} className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24">
                <span className="text-off-white font-medium">{quarterLabel}</span>
              </div>
              <div className="flex-grow bg-gray-800 rounded-lg p-6 ml-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-off-white">{milestone.milestone}</h3>
                  <span className={`px-2 py-1 text-xs rounded-md ${
                    milestone.status.toLowerCase() === 'completed' ? 'bg-green-800 text-green-200' :
                    milestone.status.toLowerCase() === 'in progress' ? 'bg-blue-800 text-blue-200' :
                    milestone.status.toLowerCase() === 'planning' ? 'bg-gray-700 text-gray-300' :
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{milestone.description}</p>
                
                {milestone.requiredSkills && milestone.requiredSkills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-burgundy mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {milestone.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {milestone.foundationSkillsUtilized && milestone.foundationSkillsUtilized.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-burgundy mb-2">Foundation Skills Utilized</h4>
                    <div className="flex flex-wrap gap-2">
                      {milestone.foundationSkillsUtilized.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Progress</span>
                    <span>{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-900 rounded-full h-2">
                    <div
                      className={`rounded-full h-2 transition-all duration-300 ${
                        milestone.status.toLowerCase() === 'completed' ? 'bg-green-600' :
                        milestone.status.toLowerCase() === 'in progress' ? 'bg-blue-600' :
                        'bg-gray-600'
                      }`}
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {index < milestones.length - 1 && (
              <div className="absolute left-12 top-8 bottom-0 w-px bg-burgundy-light opacity-30" />
            )}
          </div>
        );
      })}
    </div>
  );
} 