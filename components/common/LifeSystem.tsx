import React from 'react';

// Define border colors based on the image (can be moved to a config or theme later)
const borderColors = {
  time: 'border-yellow-400', 
  knowledge: 'border-green-500', 
  wealth: 'border-blue-500'    
};

const LifeSystem = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-off-white mb-3">The Virtuous Cycle</h3>
        <p className="text-lg text-gray-300 mb-2">
          Build Time → Capture Knowledge → Create Wealth → Reinvest
        </p>
        <p className="text-gray-400 italic text-sm mb-4">
          A virtuous cycle that compounds across seasons in life 
        </p>
        {/* Philosophical links kept here for context, could be moved if needed */}
        <p className="text-gray-300 max-w-2xl mx-auto text-sm">
          This cycle mirrors philosophical influences like Jocko Willink&apos;s &quot;Discipline Equals Freedom&quot;, Naval Ravikant&apos;s leverage concepts, and Charlie Munger&apos;s mental models – each system representing a different form of leverage.
        </p>
      </div>

      {/* 3-Column Layout for Core Systems */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {/* Time Multiplier Column */}
        <div className={`p-6 bg-dark-gray rounded-lg border-l-4 ${borderColors.time} flex flex-col h-full`}>
          <h4 className={`text-xl font-medium mb-4 text-yellow-400`}>Time Multiplier</h4>
          <div className="space-y-3 mb-4">
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">AI Agents</span>
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Automation Flows</span>
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Cloud Infrastructure</span>
          </div>
          <div className="mt-auto pt-4 border-t border-gray-700/50 text-sm text-gray-300">
            <p className="mb-2"><span className="font-semibold text-gray-200">Impact:</span> Each hour invested = 10+ hours returned</p>
            
          </div>
        </div>

        {/* Knowledge Amplifier Column */}
        <div className={`p-6 bg-dark-gray rounded-lg border-l-4 ${borderColors.knowledge} flex flex-col h-full`}>
          <h4 className={`text-xl font-medium mb-4 text-green-500`}>Knowledge Amplifier</h4>
          <div className="space-y-3 mb-4">
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Knowledge Management</span>
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Content Creation</span>
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">AI Enhancement</span>
          </div>
          <div className="mt-auto pt-4 border-t border-gray-700/50 text-sm text-gray-300">
            <p className="mb-2"><span className="font-semibold text-gray-200">Impact:</span> Your insights reach 1000x more people</p>

          </div>
        </div>

        {/* Wealth Multiplier Column */}
        <div className={`p-6 bg-dark-gray rounded-lg border-l-4 ${borderColors.wealth} flex flex-col h-full`}>
          <h4 className={`text-xl font-medium mb-4 text-blue-500`}>Wealth Multiplier</h4>
          <div className="space-y-3 mb-4">
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Digital Products</span>
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Automated Marketing</span>
            <span className="block w-full text-center px-3 py-2 bg-gray-700 rounded text-off-white text-sm">Passive Distribution</span>
          </div>
          <div className="mt-auto pt-4 border-t border-gray-700/50 text-sm text-gray-300">
            <p className="mb-2"><span className="font-semibold text-gray-200">Impact:</span> Financial freedom for meaning over obligation</p>

          </div>
        </div>
      </div>

      {/* Strategic Implementation Section */}
      <div className="max-w-3xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold text-off-white mb-4 text-center">Strategic Implementation</h3>
        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="text-lg font-medium text-yellow-400 mb-2">1. Start with the Time Multiplier</h4>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Build AI agents that handle research and information gathering</li>
              <li>Create automation flows for recurring tasks in business and personal life</li>
              <li>Establish cloud infrastructure for 24/7 operation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-green-500 mb-2">2. Use reclaimed time to build your Knowledge Amplifier</h4>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Develop personal knowledge management system (Obsidian/Notion)</li>
              <li>Create content that packages insights for others</li>
              <li>Use AI to enhance and distribute thinking</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-blue-500 mb-2">3. Transform knowledge into a Wealth Multiplier</h4>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Package expertise into digital products</li>
              <li>Build automated marketing systems</li>
              <li>Establish passive distribution channels</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Concluding Paragraph */}
      <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm italic">
        This focused approach provides a clear roadmap for the next 20 years while aligning with a 50-year vision. It&apos;s simple enough to remember and powerful enough to transform each phase of life.
      </p>
    </>
  );
};

export default LifeSystem; 