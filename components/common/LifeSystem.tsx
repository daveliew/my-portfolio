import React, { useState } from 'react';

// Define border colors based on new theme
const borderColors = {
  time: 'border-[var(--accent-tertiary)]', 
  knowledge: 'border-[var(--accent-primary)]', 
  wealth: 'border-[var(--accent-secondary)]'    
};

// Define text colors based on new theme for consistency
const textColors = {
  time: 'text-[var(--accent-tertiary)]',
  knowledge: 'text-[var(--accent-primary)]',
  wealth: 'text-[var(--accent-secondary)]'
};

// Define background colors for visual consistency
const bgColors = {
  time: 'bg-[var(--accent-tertiary)]/10',
  knowledge: 'bg-[var(--accent-primary)]/10',
  wealth: 'bg-[var(--accent-secondary)]/10',
};

const LifeSystem = () => {
  // State for active view/tab
  const [activeView, setActiveView] = useState('overview');
  
  return (
    <>
      {/* --- Introduction & Philosophy --- */}
      <div className="text-center mb-8">
        
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">My Life System OS</h2>
        <p className="text-lg text-[var(--text-primary)] mb-4 max-w-3xl mx-auto">
          My operating system is designed to build compounding leverage across the key pillars of Time, Knowledge, and Wealth.
        </p>
        <p className="text-[var(--text-secondary)] italic text-sm mb-6 max-w-2xl mx-auto">
          Inspired by Jocko Willink&apos;s discipline, Naval Ravikant&apos;s leverage, and Charlie Munger&apos;s mental models.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-[var(--background-secondary)] rounded-lg">
          <button 
            onClick={() => setActiveView('overview')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeView === 'overview' 
                ? 'bg-[var(--background-primary)] text-[var(--text-primary)] shadow-sm' 
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            System Overview
          </button>
          
          <button 
            onClick={() => setActiveView('modules')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeView === 'modules' 
                ? 'bg-[var(--background-primary)] text-[var(--text-primary)] shadow-sm' 
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Implementation Modules
          </button>
          
          <button 
            onClick={() => setActiveView('resources')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeView === 'resources' 
                ? 'bg-[var(--background-primary)] text-[var(--text-primary)] shadow-sm' 
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Resources
          </button>
        </div>
      </div>

      {/* Content based on active view */}
      {activeView === 'overview' && (
        <>
          {/* --- Integrated View: Core Cycle & Foundation --- */}
          <div className="mb-12 max-w-4xl mx-auto p-6 bg-[var(--background-secondary)] rounded-lg border border-[var(--dark-grey-secondary)]/30 shadow-sm">
            {/* Core Engine Section - With visual improvements */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 flex-grow rounded-full"></div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] px-4">The Virtuous Cycle</h3>
                <div className="h-1 flex-grow rounded-full"></div>
              </div>
              
              <p className="text-[var(--text-secondary)] italic text-sm mt-6 text-center">
                The core engine: Generate resources through sequential leverage.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 py-4">
                {/* Step 1: Time */}
                <div className={`w-full md:w-1/3 p-5 rounded-lg ${bgColors.time} border ${borderColors.time} flex flex-col items-center transform transition-all duration-300 hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColors.time} border-2 ${borderColors.time} mb-3`}>
                    <span className={`text-2xl font-bold ${textColors.time}`}>1</span>
                  </div>
                  <h4 className={`text-lg font-medium ${textColors.time} text-center`}>Build Time</h4>
                  <p className="text-xs text-[var(--text-secondary)] text-center mt-2">Create systems that multiply your available time</p>
                </div>
                
                {/* Arrow */}
                <div className="text-3xl text-[var(--text-secondary)] transform md:rotate-0 rotate-90">→</div>
                
                {/* Step 2: Knowledge */}
                <div className={`w-full md:w-1/3 p-5 rounded-lg ${bgColors.knowledge} border ${borderColors.knowledge} flex flex-col items-center transform transition-all duration-300 hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColors.knowledge} border-2 ${borderColors.knowledge} mb-3`}>
                    <span className={`text-2xl font-bold ${textColors.knowledge}`}>2</span>
                  </div>
                  <h4 className={`text-lg font-medium ${textColors.knowledge} text-center`}>Capture Knowledge</h4>
                  <p className="text-xs text-[var(--text-secondary)] text-center mt-2">Convert time into valuable insights and skills</p>
                </div>
                
                {/* Arrow */}
                <div className="text-3xl text-[var(--text-secondary)] transform md:rotate-0 rotate-90">→</div>
                
                {/* Step 3: Wealth */}
                <div className={`w-full md:w-1/3 p-5 rounded-lg ${bgColors.wealth} border ${borderColors.wealth} flex flex-col items-center transform transition-all duration-300 hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColors.wealth} border-2 ${borderColors.wealth} mb-3`}>
                    <span className={`text-2xl font-bold ${textColors.wealth}`}>3</span>
                  </div>
                  <h4 className={`text-lg font-medium ${textColors.wealth} text-center`}>Create Wealth</h4>
                  <p className="text-xs text-[var(--text-secondary)] text-center mt-2">Transform knowledge into tangible assets and income</p>
                </div>
              </div>
              


            </div>

            {/* Foundation Section (Inputs & Outputs) - With better visual hierarchy */}
            <div className="mt-8 pt-8 border-t border-[var(--dark-grey-secondary)]/30">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* System Inputs - Left Side */}
                <div className="bg-[var(--background-primary)]/30 p-5 rounded-lg">
                  <h4 className="font-medium text-[var(--text-primary)] mb-4 border-b border-[var(--dark-grey-secondary)]/20 pb-2">System Inputs</h4>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 text-[var(--accent-primary)]">•</span>
                      <span><span className="font-medium text-[var(--text-primary)]">Time:</span> Focused blocks for deep work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[var(--accent-primary)]">•</span>
                      <span><span className="font-medium text-[var(--text-primary)]">Energy:</span> Physical & mental capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[var(--accent-primary)]">•</span>
                      <span><span className="font-medium text-[var(--text-primary)]">Capital:</span> Initial funding (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[var(--accent-tertiary)]">•</span>
                      <span><span className="font-medium text-[var(--text-primary)]">Skills:</span> Technical & domain expertise</span>
                    </li>
                  </ul>
                </div>

                {/* Reinvestment - Right Side */}
                <div className="bg-[var(--background-primary)]/30 p-5 rounded-lg">
                  <h4 className="font-medium text-[var(--text-primary)] mb-4 border-b border-[var(--dark-grey-secondary)]/20 pb-2">Reinvestment Allocation</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-md bg-[var(--background-secondary)] relative overflow-hidden col-span-2">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--accent-primary)]"></div>
                      <h5 className="font-medium text-[var(--text-primary)] text-sm">Capability & Knowledge (40%)</h5>
                    </div>
                    <div className="p-3 rounded-md bg-[var(--background-secondary)] relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--accent-tertiary)]"></div>
                      <h5 className="font-medium text-[var(--text-primary)] text-sm">Network & Opportunities (40%)</h5>
                    </div>
                    <div className="p-3 rounded-md bg-[var(--background-secondary)] col-span-2 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--accent-secondary)]"></div>
                      <h5 className="font-medium text-[var(--text-primary)] text-sm">Life Quality (20%)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeView === 'modules' && (
        <>
          {/* --- Micro View: Core System Modules with enhanced visual presentation --- */}
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="h-1 flex-grow bg-gradient-to-r from-[var(--accent-tertiary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]/50 rounded-full"></div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] px-4">Core Implementation Modules</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-[var(--accent-primary)]/50 via-[var(--accent-secondary)] to-[var(--accent-tertiary)] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Time Module Card - Enhanced with better hierarchy */}
              <div className={`rounded-lg border ${borderColors.time} bg-[var(--background-secondary)] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md`}>
                <div className={`p-4 ${bgColors.time} border-b ${borderColors.time}`}>
                  <h4 className={`text-xl font-medium ${textColors.time}`}>Module 1: Time Multiplier</h4>
                </div>
                <div className="p-5">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.time} border ${borderColors.time}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">AI Agents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.time} border ${borderColors.time}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Automation Flows</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.time} border ${borderColors.time}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Cloud Infrastructure</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[var(--dark-grey-secondary)]/20">
                    <div className="mb-3">
                      <span className="font-semibold text-[var(--text-primary)] text-sm">Goal:</span>
                      <p className="text-[var(--text-secondary)] text-sm">Each hour invested = 10+ hours returned</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-[var(--text-primary)] text-sm mb-2">Implementation Steps:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-xs text-[var(--text-secondary)]">
                        <li>Identify high-leverage automation targets</li>
                        <li>Develop initial AI agents (e.g., research)</li>
                        <li>Establish cloud infrastructure</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Knowledge Module Card - Enhanced with better hierarchy */}
              <div className={`rounded-lg border ${borderColors.knowledge} bg-[var(--background-secondary)] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md`}>
                <div className={`p-4 ${bgColors.knowledge} border-b ${borderColors.knowledge}`}>
                  <h4 className={`text-xl font-medium ${textColors.knowledge}`}>Module 2: Knowledge Amplifier</h4>
                </div>
                <div className="p-5">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.knowledge} border ${borderColors.knowledge}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Knowledge Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.knowledge} border ${borderColors.knowledge}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Content Creation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.knowledge} border ${borderColors.knowledge}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">AI Enhancement</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[var(--dark-grey-secondary)]/20">
                    <div className="mb-3">
                      <span className="font-semibold text-[var(--text-primary)] text-sm">Goal:</span>
                      <p className="text-[var(--text-secondary)] text-sm">Insights reach 100x more people</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-[var(--text-primary)] text-sm mb-2">Implementation Steps:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-xs text-[var(--text-secondary)]">
                        <li>Implement Personal KM System (PKM)</li>
                        <li>Begin content creation cadence</li>
                        <li>Integrate AI for content enhancement</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wealth Module Card - Enhanced with better hierarchy */}
              <div className={`rounded-lg border ${borderColors.wealth} bg-[var(--background-secondary)] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md`}>
                <div className={`p-4 ${bgColors.wealth} border-b ${borderColors.wealth}`}>
                  <h4 className={`text-xl font-medium ${textColors.wealth}`}>Module 3: Wealth Multiplier</h4>
                </div>
                <div className="p-5">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.wealth} border ${borderColors.wealth}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Digital Products</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.wealth} border ${borderColors.wealth}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Automated Marketing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${bgColors.wealth} border ${borderColors.wealth}`}></div>
                      <span className="text-[var(--text-primary)] text-sm">Passive Distribution</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[var(--dark-grey-secondary)]/20">
                    <div className="mb-3">
                      <span className="font-semibold text-[var(--text-primary)] text-sm">Goal:</span>
                      <p className="text-[var(--text-secondary)] text-sm">Financial freedom for meaning</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-[var(--text-primary)] text-sm mb-2">Implementation Steps:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-xs text-[var(--text-secondary)]">
                        <li>Develop Minimum Viable Product (MVP)</li>
                        <li>Set up basic automated marketing funnel</li>
                        <li>Establish initial distribution channel</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[var(--background-secondary)]/50 border border-[var(--dark-grey-secondary)]/20 rounded-lg">
              <p className="text-center text-[var(--text-secondary)] text-sm italic flex items-center justify-center">
                <span className="mr-2 text-[var(--accent-secondary)]">↻</span>
                Build sequentially, reinvesting gains from one stage to accelerate the next
              </p>
            </div>
          </div>
        </>
      )}
      
      {activeView === 'resources' && (
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="h-1 flex-grow bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-tertiary)] to-[var(--accent-secondary)]/50 rounded-full"></div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] px-4">Resources & References</h3>
            <div className="h-1 flex-grow bg-gradient-to-r from-[var(--accent-secondary)]/50 via-[var(--accent-tertiary)] to-[var(--accent-primary)] rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-[var(--background-secondary)] rounded-lg">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 border-b border-[var(--dark-grey-secondary)]/20 pb-2">
                Books & Inspiration
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--accent-primary)]">•</span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-medium text-[var(--text-primary)]">Jocko Willink:</span> Discipline Equals Freedom
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--accent-primary)]">•</span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-medium text-[var(--text-primary)]">Naval Ravikant:</span> The Almanack of Naval Ravikant
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--accent-primary)]">•</span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-medium text-[var(--text-primary)]">Charlie Munger:</span> Poor Charlie&apos;s Almanack
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="p-5 bg-[var(--background-secondary)] rounded-lg">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 border-b border-[var(--dark-grey-secondary)]/20 pb-2">
                Tools & Technologies
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--accent-tertiary)]">•</span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-medium text-[var(--text-primary)]">AI Agents:</span> LangChain, CrewAI, AutoGen
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--accent-primary)]">•</span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-medium text-[var(--text-primary)]">Knowledge Management:</span> Obsidian, Notion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--accent-secondary)]">•</span>
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-medium text-[var(--text-primary)]">Automation:</span> n8n, Zapier, Make
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LifeSystem; 