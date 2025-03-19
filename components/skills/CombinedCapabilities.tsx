import React from 'react';
import { CombinedCapability } from '@/types/ai-journey';

interface CombinedCapabilitiesProps {
  combinedCapabilities: CombinedCapability[];
}

const CombinedCapabilities: React.FC<CombinedCapabilitiesProps> = ({ combinedCapabilities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {combinedCapabilities.map((capability, index) => (
        <div key={index} className="bg-dark-gray p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-burgundy mb-3">{capability.name}</h3>
          <p className="text-off-white mb-4">{capability.description}</p>
          <div className="space-y-4">
            <div>
              <h4 className="text-burgundy-light font-medium mb-2">Foundation Skills Applied</h4>
              <div className="flex flex-wrap gap-2">
                {capability.foundation.map((skill, idx) => (
                  <span key={idx} className="bg-burgundy bg-opacity-20 text-burgundy-light px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-burgundy-light font-medium mb-2">Key Applications</h4>
              <ul className="list-disc list-inside text-off-white space-y-1">
                {capability.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CombinedCapabilities; 