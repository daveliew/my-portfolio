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
                <span className="text-cool-mint font-medium">{quarterLabel}</span>
              </div>
              <div className="flex-grow bg-deep-navy rounded-lg p-6 ml-4 border border-light-glow shadow-ambient reflective-surface">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-vibrant-teal">{milestone.milestone}</h3>
                  <span className={`px-2 py-1 text-xs rounded-md directional-light ${
                    milestone.status.toLowerCase() === 'completed' ? 'bg-vibrant-teal/50 text-warm-sand' :
                    milestone.status.toLowerCase() === 'in progress' ? 'bg-twilight-purple text-warm-sand' :
                    milestone.status.toLowerCase() === 'planning' ? 'bg-tech-burgundy/50 text-warm-sand' :
                    'bg-dark-shadow text-warm-sand'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
                <p className="text-warm-sand mb-4">{milestone.description}</p>
                
                {milestone.requiredSkills && milestone.requiredSkills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-vibrant-teal mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {milestone.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-twilight-purple text-warm-sand rounded-md directional-light">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {milestone.foundationSkillsUtilized && milestone.foundationSkillsUtilized.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-vibrant-teal mb-2">Foundation Skills Utilized</h4>
                    <div className="flex flex-wrap gap-2">
                      {milestone.foundationSkillsUtilized.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-tech-burgundy text-warm-sand rounded-md directional-light">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <div className="flex justify-between text-sm text-cool-mint mb-1">
                    <span>Progress</span>
                    <span>{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-dark-shadow rounded-full h-2">
                    <div
                      className={`rounded-full h-2 transition-all duration-300 ${
                        milestone.status.toLowerCase() === 'completed' ? 'bg-vibrant-teal' :
                        milestone.status.toLowerCase() === 'in progress' ? 'bg-accent-gradient' :
                        'bg-tech-burgundy'
                      }`}
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {index < milestones.length - 1 && (
              <div className="absolute left-12 top-8 bottom-0 w-px bg-vibrant-teal opacity-30" />
            )}
          </div>
        );
      })}
    </div>
  );
} 