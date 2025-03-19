import React from 'react';
import { CombinedCapability } from '@/types/ai-journey';

interface CombinedCapabilitiesProps {
  combinedCapabilities: CombinedCapability[];
}

const CombinedCapabilities: React.FC<CombinedCapabilitiesProps> = ({ combinedCapabilities }) => {
  const renderProficiencyStars = (level: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < level ? 'text-yellow-500' : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {combinedCapabilities.map((capability, index) => (
        <div key={index} className="bg-dark-gray rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-burgundy">{capability.name}</h3>
              {renderProficiencyStars(capability.level)}
            </div>
            
            <p className="text-gray-300 mb-4">{capability.description}</p>
            
            <div className="mb-5">
              <h4 className="text-sm font-medium text-burgundy mb-2">Foundation Skills</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {capability.foundation.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs bg-burgundy-dark text-white rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-burgundy mb-2">Applications</h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {capability.applications.map((application, i) => (
                  <li key={i}>{application}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-burgundy-dark to-burgundy h-1"></div>
        </div>
      ))}
    </div>
  );
};

export default CombinedCapabilities; 