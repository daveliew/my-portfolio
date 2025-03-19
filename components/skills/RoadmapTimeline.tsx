import React from 'react';
import { Milestone } from '@/types/ai-journey';

interface RoadmapTimelineProps {
  milestones: Milestone[];
}

const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ milestones }) => {
  // Sort milestones by target date
  const sortedMilestones = [...milestones].sort((a, b) => {
    return new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime();
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500';
      case 'in progress':
        return 'bg-blue-500';
      case 'planning':
        return 'bg-yellow-500';
      case 'not started':
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700" />

      <div className="space-y-12">
        {sortedMilestones.map((milestone, index) => (
          <div key={index} className="relative pl-16">
            {/* Timeline dot */}
            <div className={`absolute left-4 top-1 w-5 h-5 rounded-full border-4 border-space-black ${getStatusColor(milestone.status)}`} />

            <div className="bg-dark-gray rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h3 className="text-xl font-semibold text-off-white">{milestone.milestone}</h3>
                <div className="flex items-center mt-2 md:mt-0 space-x-3">
                  <span className="text-sm font-medium text-gray-300">
                    {new Date(milestone.targetDate).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full text-white ${getStatusColor(milestone.status)}`}>
                    {milestone.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{milestone.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-burgundy mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {milestone.requiredSkills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs rounded-full bg-burgundy-dark text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {milestone.foundationSkillsUtilized && milestone.foundationSkillsUtilized.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-burgundy mb-2">Foundation Skills Utilized:</h4>
                  <div className="flex flex-wrap gap-2">
                    {milestone.foundationSkillsUtilized.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-burgundy">
                      Completion
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block text-off-white">
                      {milestone.completionPercentage}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: `${milestone.completionPercentage}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getStatusColor(milestone.status)}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline; 