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

      {/* --- Integrated View: Core Cycle & Foundation --- */}
      <div className="mb-16 max-w-4xl mx-auto p-6 bg-[var(--background-secondary)] rounded-lg border border-[var(--dark-grey-secondary)]/30">
        {/* Core Engine Section */}
        <div className="mb-6 pb-6 border-b border-[var(--dark-grey-secondary)]/50">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 text-center">The Virtuous Cycle (Macro View)</h3>
          <p className="text-[var(--text-secondary)] italic text-sm mt-4 text-center">
            The core engine: Generate resources through sequential leverage.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 text-center text-lg font-medium max-w-3xl mx-auto">
            
            {/* Step 1: Time */}
            <div className={`flex-1 p-3 m-1 rounded ${textColors.time}`}>Build Time</div>
            
            {/* Arrow */}
            <div className="text-2xl text-[var(--text-secondary)] transform md:rotate-0 rotate-90">→</div>
            
            {/* Step 2: Knowledge */}
            <div className={`flex-1 p-3 m-1 rounded ${textColors.knowledge}`}>Capture Knowledge</div>
            
            {/* Arrow */}
            <div className="text-2xl text-[var(--text-secondary)] transform md:rotate-0 rotate-90">→</div>
            
            {/* Step 3: Wealth */}
            <div className={`flex-1 p-3 m-1 rounded ${textColors.wealth}`}>Create Wealth</div>
            
          </div>

        </div>

        {/* Foundation Section (Inputs & Outputs) */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 text-center">System Foundation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System Inputs - Left Side */}
            <div className="p-4 border-r-0 md:border-r border-[var(--dark-grey-secondary)]/30">
              <h4 className="font-medium text-[var(--text-primary)] mb-3 text-center md:text-left">System Inputs</h4>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2 pl-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-medium">Time:</span> Focused blocks for deep work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-medium">Energy:</span> Physical & mental capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-medium">Capital:</span> Initial funding (optional)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-medium">Skills:</span> Technical & domain expertise</span>
                </li>
              </ul>
              <p className="text-xs text-[var(--text-secondary)] italic mt-3 text-center md:text-left">
                Required resources to start & sustain the system
              </p>
            </div>

            {/* Reinvestment - Right Side */}
            <div className="p-4 border-l-0 md:border-l border-[var(--dark-grey-secondary)]/30">
              <h4 className="font-medium text-[var(--text-primary)] mb-3 text-center md:text-left">Reinvestment Allocation</h4>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Output from the &apos;Create Wealth&apos; module is strategically allocated here to fuel the next cycle, enhance capabilities, and improve life quality.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]/50">
                  <h5 className="font-medium text-[var(--text-primary)] text-sm">Capability (10-20%)</h5>
                </div>
                <div className="p-2 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]/50">
                  <h5 className="font-medium text-[var(--text-primary)] text-sm">Knowledge (15-25%)</h5>
                </div>
                <div className="p-2 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]/50">
                  <h5 className="font-medium text-[var(--text-primary)] text-sm">Network (15-20%)</h5>
                </div>
                <div className="p-2 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]/50">
                  <h5 className="font-medium text-[var(--text-primary)] text-sm">Opportunity (20-30%)</h5>
                </div>
                <div className="p-2 border border-[var(--dark-grey-secondary)]/30 rounded-md bg-[var(--background-primary)]/50 col-span-2">
                  <h5 className="font-medium text-[var(--text-primary)] text-sm">Life Quality (15-25%)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Micro View: Core System Modules --- */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 text-center">Core System Modules (Micro View)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Time Module Card */}
          <div className={`p-6 bg-[var(--background-secondary)] rounded-lg border-l-4 ${borderColors.time} flex flex-col h-full`}>
            <h4 className={`text-xl font-medium mb-4 ${textColors.time}`}>Module 1: Time Multiplier</h4>
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

          {/* Knowledge Module Card */}
          <div className={`p-6 bg-[var(--background-secondary)] rounded-lg border-l-4 ${borderColors.knowledge} flex flex-col h-full`}>
            <h4 className={`text-xl font-medium mb-4 ${textColors.knowledge}`}>Module 2: Knowledge Amplifier</h4>
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

          {/* Wealth Module Card */}
          <div className={`p-6 bg-[var(--background-secondary)] rounded-lg border-l-4 ${borderColors.wealth} flex flex-col h-full`}>
            <h4 className={`text-xl font-medium mb-4 ${textColors.wealth}`}>Module 3: Wealth Multiplier</h4>
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


    </>
  );
};

export default LifeSystem; 