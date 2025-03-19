import React from 'react';
import { CombinedCapability } from '@/types/ai-journey';

interface CombinedCapabilitiesProps {
  combinedCapabilities: CombinedCapability[];
}

export function CombinedCapabilities({ combinedCapabilities }: CombinedCapabilitiesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {combinedCapabilities.map((capability, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-off-white mb-3">{capability.name}</h3>
          <p className="text-gray-300 mb-4">{capability.description}</p>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-burgundy mb-2">Foundation Skills Applied</h4>
              <div className="flex flex-wrap gap-2">
                {capability.foundation.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-burgundy mb-2">Key Applications</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
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
} 