import React from 'react';

// Define border colors based on new theme
const borderColors = {
  time: 'border-[var(--accent-secondary)]', 
  knowledge: 'border-[var(--accent-primary)]', 
  wealth: 'border-[var(--accent-secondary)]'    
};

// Define text colors based on new theme for consistency
const textColors = {
  time: 'text-[var(--accent-secondary)]',
  knowledge: 'text-[var(--accent-primary)]',
  wealth: 'text-[var(--accent-secondary)]'
};

const LifeSystem = () => {
  return (
    <>
      {/* --- Introduction & Philosophy --- */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">The Life System OS</h2>
        <p className="text-lg text-[var(--text-primary)] mb-4 max-w-3xl mx-auto">
          An operating system designed to build compounding leverage across the key pillars of Time, Knowledge, and Wealth.
        </p>
        <p className="text-[var(--text-secondary)] italic text-sm mb-6 max-w-2xl mx-auto">
          Inspired by Jocko Willink&apos;s discipline, Naval Ravikant&apos;s leverage, and Charlie Munger&apos;s mental models.
        </p>
      </div>

      {/* --- Macro View: The Virtuous Cycle --- */}
      <div className="mb-16 text-center">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">The Virtuous Cycle (Macro View)</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
          <span className={`font-medium ${textColors.time}`}>Build Time</span>
          <span className="text-[var(--text-secondary)]">→</span>
          <span className={`font-medium ${textColors.knowledge}`}>Capture Knowledge</span>
          <span className="text-[var(--text-secondary)]">→</span>
          <span className={`font-medium ${textColors.wealth}`}>Create Wealth</span>
          <span className="text-[var(--text-secondary)]">→</span>
          <span className="font-medium text-[var(--accent-tertiary)]">Reinvest</span> 
        </div>
         <p className="text-[var(--text-secondary)] italic text-sm mt-4">
          A flywheel compounding across seasons in life.
        </p>
      </div>

      {/* --- Micro View: Core System Multipliers --- */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 text-center">Core Multipliers & Implementation (Micro View)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Time Multiplier Column */}
          <div className={`p-6 bg-[var(--background-secondary)] rounded-lg border-l-4 ${borderColors.time} flex flex-col h-full`}>
            <h4 className={`text-xl font-medium mb-4 ${textColors.time}`}>1. Time Multiplier</h4>
            <div className="space-y-3 mb-4 flex-grow">
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">AI Agents</span>
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Automation Flows</span>
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Cloud Infrastructure</span>
            </div>
            <div className="pt-4 border-t border-[var(--dark-grey-secondary)]/50 text-sm text-[var(--text-secondary)]">
              <p className="mb-3"><span className="font-semibold text-[var(--text-primary)]">Goal:</span> Each hour invested = 10+ hours returned</p>
              <h5 className="font-medium text-[var(--text-primary)] text-[0.9rem] mb-1">Implementation Steps:</h5>
              <ul className="list-disc list-inside ml-1 space-y-1 text-xs">
                <li>Identify high-leverage automation targets</li>
                <li>Develop initial AI agents (e.g., research)</li>
                <li>Establish cloud infrastructure</li>
              </ul>
            </div>
          </div>

          {/* Knowledge Amplifier Column */}
          <div className={`p-6 bg-[var(--background-secondary)] rounded-lg border-l-4 ${borderColors.knowledge} flex flex-col h-full`}>
            <h4 className={`text-xl font-medium mb-4 ${textColors.knowledge}`}>2. Knowledge Amplifier</h4>
            <div className="space-y-3 mb-4 flex-grow">
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Knowledge Management</span>
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Content Creation</span>
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">AI Enhancement</span>
            </div>
            <div className="mt-auto pt-4 border-t border-[var(--dark-grey-secondary)]/50 text-sm text-[var(--text-secondary)]">
              <p className="mb-3"><span className="font-semibold text-[var(--text-primary)]">Goal:</span> Insights reach 100x more people</p>
              <h5 className="font-medium text-[var(--text-primary)] text-[0.9rem] mb-1">Implementation Steps:</h5>
              <ul className="list-disc list-inside ml-1 space-y-1 text-xs">
                 <li>Implement Personal KM System (PKM)</li>
                 <li>Begin content creation cadence</li>
                 <li>Integrate AI for content enhancement</li>
              </ul>
            </div>
          </div>

          {/* Wealth Multiplier Column */}
          <div className={`p-6 bg-[var(--background-secondary)] rounded-lg border-l-4 ${borderColors.wealth} flex flex-col h-full`}>
            <h4 className={`text-xl font-medium mb-4 ${textColors.wealth}`}>3. Wealth Multiplier</h4>
            <div className="space-y-3 mb-4 flex-grow">
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Digital Products</span>
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Automated Marketing</span>
              <span className="block w-full text-center px-3 py-2 bg-[var(--dark-grey-secondary)] rounded text-[var(--text-primary)] text-sm">Passive Distribution</span>
            </div>
            <div className="mt-auto pt-4 border-t border-[var(--dark-grey-secondary)]/50 text-sm text-[var(--text-secondary)]">
              <p className="mb-3"><span className="font-semibold text-[var(--text-primary)]">Goal:</span> Financial freedom for meaning</p>
              <h5 className="font-medium text-[var(--text-primary)] text-[0.9rem] mb-1">Implementation Steps:</h5>
              <ul className="list-disc list-inside ml-1 space-y-1 text-xs">
                 <li>Develop Minimum Viable Product (MVP)</li>
                 <li>Set up basic automated marketing funnel</li>
                 <li>Establish initial distribution channel</li>
              </ul>
            </div>
          </div>
        </div>
         <p className="text-center text-[var(--text-secondary)] text-sm mt-6 italic">Build sequentially, reinvesting gains from one stage to accelerate the next.</p>
      </div>

      {/* --- Reinvestment Channels (Closing the Loop) --- */}
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-[var(--background-secondary)] rounded-lg border border-[var(--dark-grey-secondary)]/50">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 text-center">Reinvestment Channels (Closing the Loop)</h3>
        <p className="text-center text-[var(--text-secondary)] text-sm mb-8 max-w-2xl mx-auto">
            Strategically allocate generated wealth to fuel the next iteration of the cycle and enhance overall life quality. Percentages are guidelines and adaptable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-[var(--text-secondary)]">
          
          <div className="p-4 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]">
              <h4 className="font-medium text-[var(--text-primary)] mb-1">Capability (10-20%)</h4>
              <p className="text-xs">Upgrade AI tools, automation platforms, infrastructure.</p>
          </div>

          <div className="p-4 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]">
              <h4 className="font-medium text-[var(--text-primary)] mb-1">Knowledge (15-25%)</h4>
              <p className="text-xs">Advanced courses, mentors, research materials.</p>
          </div>

          <div className="p-4 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]">
              <h4 className="font-medium text-[var(--text-primary)] mb-1">Network (15-20%)</h4>
              <p className="text-xs">Community building, strategic relationships.</p>
          </div>

          <div className="p-4 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]">
              <h4 className="font-medium text-[var(--text-primary)] mb-1">Opportunity (20-30%)</h4>
              <p className="text-xs">Angel investments, new ventures, experiments.</p>
          </div>

          <div className="p-4 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]">
              <h4 className="font-medium text-[var(--text-primary)] mb-1">Life Quality (15-25%)</h4>
              <p className="text-xs">Personal well-being, family experiences, buffer.</p>
          </div>

        </div>
      </div>

    </>
  );
};

export default LifeSystem; 