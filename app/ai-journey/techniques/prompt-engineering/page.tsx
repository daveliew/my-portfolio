'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function PromptEngineeringPage() {
  return (
    <AIJourneySubpageLayout
      title="Prompt Engineering for Claude"
      description="Master the art of crafting effective prompts for Claude, including advanced techniques and best practices"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
        { href: '/ai-journey/techniques', label: 'Techniques' },
      ]}
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Foundation Principles" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Effective prompt engineering with Claude requires understanding its conversational nature, 
            Constitutional AI training, and how it processes context. Claude excels at nuanced understanding 
            and can handle complex instructions with proper structuring.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Claude&apos;s Strengths</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Conversational reasoning</li>
                <li>• Complex instruction following</li>
                <li>• Ethical decision making</li>
                <li>• Long context understanding</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Prompt Best Practices</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Be clear and specific</li>
                <li>• Use structured formats</li>
                <li>• Provide context and examples</li>
                <li>• Set clear expectations</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Basic Prompt Structure */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Basic Prompt Structure" />
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Essential Components</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-blue-600 dark:text-blue-400">Role Definition</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Clearly define Claude&apos;s role and expertise level</p>
                  <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    &quot;You are a senior software architect with expertise in distributed systems...&quot;
                  </code>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-green-600 dark:text-green-400">Task Description</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Specify the exact task with clear boundaries</p>
                  <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    &quot;Analyze the following architecture and suggest improvements for scalability...&quot;
                  </code>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium text-purple-600 dark:text-purple-400">Context & Constraints</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Provide relevant background and limitations</p>
                  <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    &quot;The system currently handles 10M daily users, budget constraints require cloud-native solutions...&quot;
                  </code>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-medium text-orange-600 dark:text-orange-400">Output Format</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Define the expected response structure</p>
                  <code className="block mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    &quot;Provide your response in the following format: 1. Analysis 2. Recommendations 3. Implementation plan&quot;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Advanced Techniques */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Advanced Techniques" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-4">Chain of Thought</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Guide Claude through step-by-step reasoning for complex problems.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">✓ Effective Example:</div>
              <code className="text-xs">
                &quot;Let&apos;s work through this step by step:<br/>
                1. First, analyze the problem<br/>
                2. Then, consider possible solutions<br/>
                3. Finally, evaluate trade-offs&quot;
              </code>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Few-shot Learning</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Provide examples to demonstrate the desired response pattern.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">✓ Example Pattern:</div>
              <code className="text-xs">
                &quot;Input: [example 1]<br/>
                Output: [desired format 1]<br/>
                <br/>
                Input: [example 2]<br/>
                Output: [desired format 2]&quot;
              </code>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">Prompt Chaining</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Break complex tasks into smaller, manageable prompts that build on each other.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">✓ Sequence Example:</div>
              <code className="text-xs">
                &quot;Prompt 1: Analyze requirements<br/>
                Prompt 2: Design architecture<br/>
                Prompt 3: Plan implementation&quot;
              </code>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-4">Role Playing</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Assign Claude specific personas or expertise areas for specialized responses.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">✓ Persona Examples:</div>
              <code className="text-xs">
                &quot;Act as a security expert...<br/>
                Respond as a user experience designer...<br/>
                Think like a startup founder...&quot;
              </code>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Common Patterns */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Common Prompt Patterns" />
        <Card className="p-6">
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Analysis Pattern</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                <div className="text-blue-600 dark:text-blue-400">Human:</div>
                <div className="ml-4 mb-2">Please analyze [SUBJECT] and provide insights on:</div>
                <div className="ml-4">• Strengths and weaknesses</div>
                <div className="ml-4">• Opportunities for improvement</div>
                <div className="ml-4">• Potential risks or challenges</div>
                <div className="ml-4 mb-2">• Recommendations for next steps</div>
                <div className="ml-4">Format your response with clear headings and bullet points.</div>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Creative Generation Pattern</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                <div className="text-blue-600 dark:text-blue-400">Human:</div>
                <div className="ml-4 mb-2">Generate [NUMBER] creative [ITEMS] for [PURPOSE].</div>
                <div className="ml-4 mb-2">Requirements:</div>
                <div className="ml-4">• [Constraint 1]</div>
                <div className="ml-4">• [Constraint 2]</div>
                <div className="ml-4 mb-2">• [Constraint 3]</div>
                <div className="ml-4">For each idea, provide a brief explanation of why it would be effective.</div>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Problem-Solving Pattern</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                <div className="text-blue-600 dark:text-blue-400">Human:</div>
                <div className="ml-4 mb-2">I&apos;m facing this challenge: [PROBLEM DESCRIPTION]</div>
                <div className="ml-4 mb-2">Context: [RELEVANT BACKGROUND]</div>
                <div className="ml-4 mb-2">Constraints: [LIMITATIONS]</div>
                <div className="ml-4 mb-2">Please help me by:</div>
                <div className="ml-4">1. Breaking down the problem</div>
                <div className="ml-4">2. Suggesting multiple solution approaches</div>
                <div className="ml-4">3. Evaluating pros/cons of each approach</div>
                <div className="ml-4">4. Recommending the best solution with reasoning</div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Optimization Tips */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Optimization Tips" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">Do&apos;s ✓</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use specific, concrete language</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Provide context and background</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Set clear expectations for output</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use examples when helpful</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Break complex tasks into steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Test and iterate your prompts</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">Don&apos;ts ✗</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Use vague or ambiguous instructions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Overload with too many requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Assume Claude knows specific context</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Use contradictory instructions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Neglect to specify output format</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Ask for harmful or unethical content</span>
              </li>
            </ul>
          </Card>
        </div>
      </motion.section>

      {/* Practice Exercises */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Practice Exercises" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Try these exercises to improve your prompt engineering skills:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Exercise 1: Role-Based Analysis</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Create prompts for Claude to analyze a business problem from three different perspectives: 
                CEO, CTO, and Customer Success Manager.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Focus: Role definition, perspective taking, structured output
              </div>
            </div>
            
            <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
              <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2">Exercise 2: Chain of Thought Problem Solving</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Design a prompt that guides Claude through solving a complex technical architecture challenge 
                step-by-step.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Focus: Reasoning chains, step-by-step guidance, technical analysis
              </div>
            </div>
            
            <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Exercise 3: Few-Shot Content Generation</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Create a prompt with 2-3 examples that teaches Claude to write in a specific style 
                or format for your use case.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Focus: Pattern recognition, consistency, style adaptation
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 