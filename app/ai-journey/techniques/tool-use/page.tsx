'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ToolUsePage() {
  return (
    <AIJourneySubpageLayout
      title="Tool Use & Function Calling"
      description="Implement Claude's tool use capabilities to extend functionality with external APIs and functions"
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
        <SectionHeader title="Understanding Tool Use" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Claude&apos;s tool use feature allows it to call external functions and APIs to extend its capabilities 
            beyond text generation. This enables Claude to perform actions like calculations, data retrieval, 
            file operations, and integration with external services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Capabilities</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• External API integration</li>
                <li>• Real-time data retrieval</li>
                <li>• Mathematical computations</li>
                <li>• File system operations</li>
                <li>• Database queries</li>
                <li>• Third-party service calls</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Use Cases</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Data analysis workflows</li>
                <li>• Customer support automation</li>
                <li>• Content management systems</li>
                <li>• Research and fact-checking</li>
                <li>• Business process automation</li>
                <li>• Educational applications</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* The Complete Tool Use Loop */}
      <motion.section
        {...sectionAnimation(0.5)}
        className="mb-12"
      >
        <SectionHeader title="The Complete Tool Use Loop" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Tool use follows a request-response cycle where Claude decides when tools are needed, your application
            executes them, and Claude synthesizes the results into a final response.
          </p>

          <div className="space-y-6">
            {/* Visual Flow */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">The 5-Step Cycle</h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-3 mt-0.5">1.</span>
                  <div>
                    <strong>User Request:</strong> Your application sends a message to Claude with available tools defined
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-3 mt-0.5">2.</span>
                  <div>
                    <strong>Claude Responds:</strong> Claude analyzes the request and decides which tools (if any) to use,
                    returning <code className="text-xs px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">tool_use</code> blocks
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-3 mt-0.5">3.</span>
                  <div>
                    <strong>Your Code Executes:</strong> You extract tool names and parameters, execute the tools in your environment
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-3 mt-0.5">4.</span>
                  <div>
                    <strong>Return Results:</strong> You send tool results back to Claude in a{' '}
                    <code className="text-xs px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">tool_result</code> message
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-3 mt-0.5">5.</span>
                  <div>
                    <strong>Final Response:</strong> Claude synthesizes tool results with its knowledge to provide a complete answer
                  </div>
                </div>
              </div>
            </div>

            {/* Pseudo-code Example */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Conceptual Flow (Pseudo-code)</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`// Step 1: Define your tools
tools = [
  { name: "calculator", description: "...", input_schema: {...} },
  { name: "get_weather", description: "...", input_schema: {...} }
]

// Step 2: Send initial request to Claude
response = claude.messages.create({
  model: "claude-sonnet-4-5-20250929",
  messages: [{ role: "user", content: "What's 25 * 47?" }],
  tools: tools
})

// Step 3: Check if Claude wants to use tools
if response.stop_reason === "tool_use":
  // Extract tool use information
  for tool_use in response.content:
    if tool_use.type === "tool_use":
      tool_name = tool_use.name
      tool_input = tool_use.input

      // Step 4: Execute the tool
      result = execute_tool(tool_name, tool_input)

      // Step 5: Send results back to Claude
      final_response = claude.messages.create({
        model: "claude-sonnet-4-5-20250929",
        messages: [
          ...previous_messages,
          response,  // Claude's tool request
          { role: "user", content: [
            { type: "tool_result", tool_use_id: tool_use.id, content: result }
          ]}
        ],
        tools: tools
      })

// Now final_response contains Claude's answer using the tool results`}
                </pre>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                See official Anthropic documentation for language-specific implementation details.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Tool Definition */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Defining Tools" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tools are defined using JSON schemas that specify the function name, description, and parameters. 
            Here&apos;s how to structure tool definitions:
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Basic Tool Structure</h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`{
  &quot;name&quot;: &quot;get_weather&quot;,
  &quot;description&quot;: &quot;Get weather information for a specific location&quot;,
  &quot;input_schema&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;location&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;The city and state/country&quot;
      },
      &quot;units&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;enum&quot;: [&quot;celsius&quot;, &quot;fahrenheit&quot;],
        &quot;description&quot;: &quot;Temperature units&quot;
      }
    },
    &quot;required&quot;: [&quot;location&quot;]
  }
}`}
              </pre>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Calculator Tool Example</h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`{
  &quot;name&quot;: &quot;calculator&quot;,
  &quot;description&quot;: &quot;Perform mathematical calculations&quot;,
  &quot;input_schema&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;expression&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Mathematical expression to evaluate&quot;
      }
    },
    &quot;required&quot;: [&quot;expression&quot;]
  }
}`}
              </pre>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Implementation Examples */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Implementation Examples" />
        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Python Implementation</h4>

            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
              <h5 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ SECURITY WARNING</h5>
              <p className="text-sm text-red-700 dark:text-red-400 mb-2">
                This calculator example uses <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900 rounded">eval()</code> for
                demonstration purposes only. <strong>NEVER use eval() with user input in production</strong> - it allows
                arbitrary code execution and complete system compromise.
              </p>
              <p className="text-xs text-red-600 dark:text-red-400">
                <strong>Production alternative:</strong> Use <code>ast.literal_eval()</code> or safe expression
                evaluation libraries like <code>numexpr</code> or <code>simpleeval</code>.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`import anthropic
import json

def calculator(expression):
    &quot;&quot;&quot;Safely evaluate mathematical expressions&quot;&quot;&quot;
    try:
        result = eval(expression)
        return {&quot;result&quot;: result}
    except:
        return {&quot;error&quot;: &quot;Invalid expression&quot;}

def get_weather(location, units=&quot;fahrenheit&quot;):
    &quot;&quot;&quot;Mock weather function&quot;&quot;&quot;
    return {
        &quot;location&quot;: location,
        &quot;temperature&quot;: 72,
        &quot;units&quot;: units,
        &quot;condition&quot;: &quot;sunny&quot;
    }

# Tool definitions
tools = [
    {
        &quot;name&quot;: &quot;calculator&quot;,
        &quot;description&quot;: &quot;Perform mathematical calculations&quot;,
        &quot;input_schema&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
                &quot;expression&quot;: {&quot;type&quot;: &quot;string&quot;}
            },
            &quot;required&quot;: [&quot;expression&quot;]
        }
    },
    {
        &quot;name&quot;: &quot;get_weather&quot;,
        &quot;description&quot;: &quot;Get weather information&quot;,
        &quot;input_schema&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
                &quot;location&quot;: {&quot;type&quot;: &quot;string&quot;},
                &quot;units&quot;: {&quot;type&quot;: &quot;string&quot;, &quot;enum&quot;: [&quot;celsius&quot;, &quot;fahrenheit&quot;]}
            },
            &quot;required&quot;: [&quot;location&quot;]
        }
    }
]

# Claude API call with tools
client = anthropic.Anthropic()
message = client.messages.create(
    model=&quot;claude-sonnet-4-5-20250929&quot;,  # Latest Sonnet 4.5
    max_tokens=1024,
    tools=tools,
    messages=[{
        &quot;role&quot;: &quot;user&quot;,
        &quot;content&quot;: &quot;What&apos;s 25 * 47? Also, what&apos;s the weather like in Paris?&quot;
    }]
)`}
              </pre>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">JavaScript/Node.js Implementation</h4>

            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
              <h5 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ SECURITY WARNING</h5>
              <p className="text-sm text-red-700 dark:text-red-400 mb-2">
                The calculator example uses the <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900 rounded">Function()</code> constructor,
                which is similar to <code>eval()</code> and poses serious security risks with untrusted input.
              </p>
              <p className="text-xs text-red-600 dark:text-red-400">
                <strong>Production alternative:</strong> Use safe expression evaluation libraries like{' '}
                <code>mathjs</code>, <code>expr-eval</code>, or <code>jexl</code>.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`import Anthropic from &apos;@anthropic-ai/sdk&apos;;

const anthropic = new Anthropic();

// Tool functions
const tools = {
  calculator: (params) => {
    try {
      const result = Function(&apos;&quot;use strict&quot;; return (&apos; + params.expression + &apos;)&apos;)();
      return { result };
    } catch (error) {
      return { error: &apos;Invalid expression&apos; };
    }
  },
  
  get_weather: (params) => {
    // Mock implementation
    return {
      location: params.location,
      temperature: 22,
      units: params.units || &apos;celsius&apos;,
      condition: &apos;partly cloudy&apos;
    };
  }
};

async function handleToolUse() {
  const message = await anthropic.messages.create({
    model: &apos;claude-sonnet-4-5-20250929&apos;,
    max_tokens: 1024,
    tools: [
      {
        name: &apos;calculator&apos;,
        description: &apos;Perform mathematical calculations&apos;,
        input_schema: {
          type: &apos;object&apos;,
          properties: {
            expression: { type: &apos;string&apos; }
          },
          required: [&apos;expression&apos;]
        }
      }
    ],
    messages: [{
      role: &apos;user&apos;,
      content: &apos;Calculate 15% tip on a $84.50 bill&apos;
    }]
  });
  
  return message;
}`}
              </pre>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Advanced Patterns */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Advanced Patterns" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-4">Multi-Step Workflows</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chain multiple tool calls together for complex operations.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Example Flow:</div>
              <ul className="text-xs space-y-1">
                <li>1. Search for relevant documents</li>
                <li>2. Extract key information</li>
                <li>3. Perform calculations</li>
                <li>4. Generate summary report</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">Error Handling</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Implement robust error handling for tool failures.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Best Practices:</div>
              <ul className="text-xs space-y-1">
                <li>• Return descriptive error messages</li>
                <li>• Validate input parameters</li>
                <li>• Implement retry logic</li>
                <li>• Provide fallback options</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">Authentication</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Handle API keys and authentication securely.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Security Tips:</div>
              <ul className="text-xs space-y-1">
                <li>• Use environment variables</li>
                <li>• Implement rate limiting</li>
                <li>• Validate user permissions</li>
                <li>• Log API usage</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Performance Optimization</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Optimize tool performance for better user experience.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Optimization Strategies:</div>
              <ul className="text-xs space-y-1">
                <li>• Cache frequent results</li>
                <li>• Batch similar operations</li>
                <li>• Use async operations</li>
                <li>• Monitor response times</li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* tool_choice Parameter */}
      <motion.section
        {...sectionAnimation(3.5)}
        className="mb-12"
      >
        <SectionHeader title="Controlling Tool Selection with tool_choice" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">tool_choice</code> parameter gives you
            precise control over when and which tools Claude uses.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/10">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  <code className="text-sm">&quot;auto&quot;</code> (Default)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Claude decides whether to use tools based on the request. May use tools, may not.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded">
                  <strong>When to use:</strong> General conversations where tools are optional
                </div>
              </div>

              <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50/50 dark:bg-green-900/10">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                  <code className="text-sm">&quot;any&quot;</code>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Claude MUST use at least one tool. Guarantees tool execution.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded">
                  <strong>When to use:</strong> Workflows requiring guaranteed data fetching or actions
                </div>
              </div>

              <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50/50 dark:bg-purple-900/10">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                  <code className="text-sm">&#123;type: &quot;tool&quot;, name: &quot;...&quot;&#125;</code>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Force Claude to use a specific tool by name.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded">
                  <strong>When to use:</strong> Deterministic workflows requiring specific tool execution
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Usage Examples</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`// Auto (default) - Claude decides
claude.messages.create({
  model: "claude-sonnet-4-5-20250929",
  messages: [...],
  tools: tools,
  tool_choice: {"type": "auto"}  // Optional, this is default
})

// Any - Force at least one tool use
claude.messages.create({
  model: "claude-sonnet-4-5-20250929",
  messages: [...],
  tools: tools,
  tool_choice: {"type": "any"}  // Guarantees tool execution
})

// Specific tool - Force exact tool
claude.messages.create({
  model: "claude-sonnet-4-5-20250929",
  messages: [...],
  tools: tools,
  tool_choice: {"type": "tool", "name": "get_weather"}  // Must use get_weather
})`}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚡ Best Practices</h5>
              <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-400">
                <li>• Use <code>&quot;auto&quot;</code> for conversational interfaces where flexibility is desired</li>
                <li>• Use <code>&quot;any&quot;</code> for workflows that require tool execution (e.g., data pipelines)</li>
                <li>• Use specific tool forcing sparingly - reduces Claude&apos;s flexibility and reasoning</li>
                <li>• If forcing specific tools, ensure the request actually needs that tool</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Parallel Tool Calling - NEW in Sonnet 4.5 */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Parallel Tool Calling" />
        <Card className="p-6">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800 mb-6">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🚀 New in Claude Sonnet 4.5</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Sonnet 4.5 introduces enhanced parallel tool calling, allowing Claude to invoke multiple tools
              simultaneously for dramatically faster execution and more efficient workflows. This is particularly
              powerful when tasks are independent and don&apos;t rely on each other&apos;s results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ When to Use Parallel</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Independent queries</strong>: Fetching weather for multiple cities</li>
                <li>• <strong>Batch operations</strong>: Processing multiple files simultaneously</li>
                <li>• <strong>Data aggregation</strong>: Querying different databases at once</li>
                <li>• <strong>Multi-source research</strong>: Searching multiple APIs in parallel</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ When to Use Sequential</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Dependent operations</strong>: Each step needs previous results</li>
                <li>• <strong>Rate-limited APIs</strong>: Services with strict concurrency limits</li>
                <li>• <strong>Transactional workflows</strong>: Database operations requiring order</li>
                <li>• <strong>State management</strong>: Operations that modify shared state</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Parallel Execution Example</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                When Claude receives a request requiring multiple independent tool calls, it can execute them
                all in parallel. Here&apos;s what happens behind the scenes:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`// User request:
&quot;What&apos;s the weather in New York, London, and Tokyo?
Also calculate 25 * 47 and what&apos;s 15% of 200?&quot;

// Claude makes PARALLEL tool calls:
[
  { name: &apos;get_weather&apos;, input: { location: &apos;New York&apos; } },
  { name: &apos;get_weather&apos;, input: { location: &apos;London&apos; } },
  { name: &apos;get_weather&apos;, input: { location: &apos;Tokyo&apos; } },
  { name: &apos;calculator&apos;, input: { expression: &apos;25 * 47&apos; } },
  { name: &apos;calculator&apos;, input: { expression: &apos;200 * 0.15&apos; } }
]

// Result: All 5 operations complete in the time of 1!`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Performance Comparison</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                  <div className="text-red-600 dark:text-red-400 font-semibold mb-2">Sequential (Old Way)</div>
                  <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    <div>Tool 1: 2s</div>
                    <div>Tool 2: 2s</div>
                    <div>Tool 3: 2s</div>
                    <div>Tool 4: 2s</div>
                    <div>Tool 5: 2s</div>
                    <div className="pt-2 border-t border-gray-300 dark:border-gray-600 font-semibold text-gray-800 dark:text-gray-200">
                      Total: 10 seconds
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-green-300 dark:border-green-600 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <div className="text-green-600 dark:text-green-400 font-semibold mb-2">Parallel (Sonnet 4.5)</div>
                  <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    <div>All 5 tools: 2s</div>
                    <div className="opacity-50">(executed simultaneously)</div>
                    <div className="pt-8 border-t border-green-300 dark:border-green-600 font-semibold text-gray-800 dark:text-gray-200">
                      Total: 2 seconds
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-center">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  🚀 80% faster execution with parallel tool calling!
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Implementation Tips</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>• Automatic behavior</strong>: Claude decides when to use parallel execution -
                    no special configuration needed
                  </li>
                  <li>
                    <strong>• Design for parallelism</strong>: Make tools stateless and independent when possible
                  </li>
                  <li>
                    <strong>• Handle all responses</strong>: Your code must process multiple tool_use blocks
                    in a single API response
                  </li>
                  <li>
                    <strong>• Test edge cases</strong>: Ensure your tools can handle concurrent execution safely
                  </li>
                  <li>
                    <strong>• Monitor performance</strong>: Track actual speedups in your specific use cases
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded">
              <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">🔧 Critical Implementation Details</h5>
              <div className="space-y-3 text-sm text-orange-700 dark:text-orange-400">
                <div>
                  <strong className="block mb-1">Response contains ARRAY of tool_use blocks:</strong>
                  <p className="text-xs">
                    When Claude uses parallel tools, <code>response.content</code> will contain multiple{' '}
                    <code>tool_use</code> blocks in a single response. Your code must loop through and execute all of them.
                  </p>
                </div>
                <div>
                  <strong className="block mb-1">Execution order not guaranteed:</strong>
                  <p className="text-xs">
                    Tools may complete in any order. Don&apos;t assume sequential execution - design tools to be
                    order-independent.
                  </p>
                </div>
                <div>
                  <strong className="block mb-1">Tools must be thread-safe:</strong>
                  <p className="text-xs">
                    If tools modify shared state, ensure proper locking/synchronization. Prefer stateless tools
                    for parallel execution.
                  </p>
                </div>
                <div>
                  <strong className="block mb-1">Return ALL tool results together:</strong>
                  <p className="text-xs">
                    Execute all tools, collect results, then send all <code>tool_result</code> messages back
                    to Claude in a single follow-up request.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Handling Multiple tool_use Blocks (Example)</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`// Claude's response with multiple tool_use blocks
response = {
  "content": [
    { "type": "tool_use", "id": "toolu_1", "name": "get_weather", "input": {"location": "NYC"} },
    { "type": "tool_use", "id": "toolu_2", "name": "get_weather", "input": {"location": "London"} },
    { "type": "tool_use", "id": "toolu_3", "name": "calculator", "input": {"expression": "25*47"} }
  ],
  "stop_reason": "tool_use"
}

// Your code must handle ALL tool_use blocks
tool_results = []
for content_block in response.content:
  if content_block.type === "tool_use":
    // Execute the tool
    result = execute_tool(content_block.name, content_block.input)

    // Collect result with original ID
    tool_results.append({
      "type": "tool_result",
      "tool_use_id": content_block.id,  // Must match original ID!
      "content": result
    })

// Send ALL results back together
final_response = claude.messages.create({
  model: "claude-sonnet-4-5-20250929",
  messages: [
    ...previous_messages,
    response,  // Claude's tool request
    { "role": "user", "content": tool_results }  // All results
  ]
})`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Real-World Use Cases</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    E-commerce Price Comparison
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Query 5 different retailer APIs simultaneously for product prices instead of waiting
                    for each sequentially. 5x faster price updates.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4 py-2">
                  <h5 className="font-semibold text-teal-600 dark:text-teal-400 mb-1">
                    Content Localization
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Translate content into 10 languages in parallel using translation APIs. From 30 seconds
                    to 3 seconds for complete localization.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">
                    Multi-Database Analytics
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Query PostgreSQL, MongoDB, and Redis simultaneously for different metrics.
                    Aggregate dashboard data 3x faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Token & Cost Considerations */}
      <motion.section
        {...sectionAnimation(4.5)}
        className="mb-12"
      >
        <SectionHeader title="Token & Cost Considerations" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Understanding how tool use affects token consumption and costs is crucial for building efficient applications.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">📥 Input Token Costs</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Tool definitions</strong> consume input tokens on every request
                  </li>
                  <li>
                    Large tool schemas (complex parameters) = more tokens
                  </li>
                  <li>
                    Multiple tools = linear token growth
                  </li>
                  <li>
                    <span className="text-blue-600 dark:text-blue-400">
                      Optimization: Keep descriptions concise but clear
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">📤 Output Token Costs</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>tool_use blocks</strong> in Claude&apos;s response count as output tokens
                  </li>
                  <li>
                    Tool parameters passed back count toward output
                  </li>
                  <li>
                    Final synthesized response = additional output tokens
                  </li>
                  <li>
                    <span className="text-green-600 dark:text-green-400">
                      Parallel calls don&apos;t reduce tokens, just time
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                💰 Cost Optimization with Prompt Caching
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Prompt Caching</strong> allows you to cache tool definitions across requests, dramatically reducing costs
                for applications with stable tool sets.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Without Caching</div>
                  <div className="space-y-1 text-xs">
                    <div>10 tools × 200 tokens each = <strong>2,000 tokens/request</strong></div>
                    <div>1,000 requests = <strong>2,000,000 input tokens</strong></div>
                    <div className="text-red-600 dark:text-red-400 font-semibold">Cost: ~$6.00</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">With Caching ✓</div>
                  <div className="space-y-1 text-xs">
                    <div>First request: 2,000 tokens (cached)</div>
                    <div>Next 999 requests: <strong>~200 cached tokens</strong></div>
                    <div className="text-green-600 dark:text-green-400 font-semibold">Cost: ~$0.62 (90% savings!)</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                See Prompt Caching documentation for implementation details. Cache TTL is 5 minutes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">💡 Best Practices for Cost Efficiency</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Use Prompt Caching for stable tool sets</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Keep tool descriptions concise but informative</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Only include tools relevant to the conversation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Use tool_choice: &quot;any&quot; only when necessary</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>Don&apos;t send 50+ tools &quot;just in case&quot;</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>Don&apos;t use verbose parameter descriptions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>Don&apos;t duplicate similar tools</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>Don&apos;t ignore caching opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Token Estimation Example</h5>
              <div className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                <div><strong>Typical tool definition:</strong> ~150-300 tokens per tool</div>
                <div><strong>tool_use response:</strong> ~50-150 tokens (name + parameters)</div>
                <div><strong>Final synthesis:</strong> Varies by complexity (100-500+ tokens)</div>
                <div className="pt-2 border-t border-gray-300 dark:border-gray-600 mt-2">
                  <strong>Example single tool request:</strong> ~500-800 total tokens (input + output)
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Common Tool Examples */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Common Tool Examples" />
        <Card className="p-6">
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Database Query Tool</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Execute SQL queries against a database safely.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-xs">
                <pre>{`{
  &quot;name&quot;: &quot;query_database&quot;,
  &quot;description&quot;: &quot;Execute SQL queries&quot;,
  &quot;input_schema&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;query&quot;: {&quot;type&quot;: &quot;string&quot;},
      &quot;table&quot;: {&quot;type&quot;: &quot;string&quot;},
      &quot;limit&quot;: {&quot;type&quot;: &quot;integer&quot;, &quot;maximum&quot;: 100}
    },
    &quot;required&quot;: [&quot;query&quot;, &quot;table&quot;]
  }
}`}</pre>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">File Operations Tool</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Read, write, and manipulate files in the system.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-xs">
                <pre>{`{
  &quot;name&quot;: &quot;file_operations&quot;,
  &quot;description&quot;: &quot;File system operations&quot;,
  &quot;input_schema&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;operation&quot;: {&quot;type&quot;: &quot;string&quot;, &quot;enum&quot;: [&quot;read&quot;, &quot;write&quot;, &quot;list&quot;]},
      &quot;path&quot;: {&quot;type&quot;: &quot;string&quot;},
      &quot;content&quot;: {&quot;type&quot;: &quot;string&quot;}
    },
    &quot;required&quot;: [&quot;operation&quot;, &quot;path&quot;]
  }
}`}</pre>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">API Integration Tool</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Make HTTP requests to external APIs.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-xs">
                <pre>{`{
  &quot;name&quot;: &quot;api_request&quot;,
  &quot;description&quot;: &quot;Make HTTP API requests&quot;,
  &quot;input_schema&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;url&quot;: {&quot;type&quot;: &quot;string&quot;},
      &quot;method&quot;: {&quot;type&quot;: &quot;string&quot;, &quot;enum&quot;: [&quot;GET&quot;, &quot;POST&quot;]},
      &quot;params&quot;: {&quot;type&quot;: &quot;object&quot;},
      &quot;headers&quot;: {&quot;type&quot;: &quot;object&quot;}
    },
    &quot;required&quot;: [&quot;url&quot;, &quot;method&quot;]
  }
}`}</pre>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Best Practices" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">Tool Design ✓</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Write clear, descriptive tool names</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Provide detailed parameter descriptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Include examples in descriptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use proper JSON schema validation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Keep tool scope focused and specific</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Return structured, consistent responses</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">Common Pitfalls ✗</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Overly complex tool definitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Missing input validation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Poor error handling</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Exposing sensitive operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Inconsistent response formats</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Not handling API rate limits</span>
              </li>
            </ul>
          </Card>
        </div>
      </motion.section>

      {/* Practice Projects */}
      <motion.section
        {...sectionAnimation(6)}
        className="mb-12"
      >
        <SectionHeader title="Practice Projects" />
        <Card className="p-6">
          <div className="space-y-4">
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Project 1: Personal Assistant</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Build a personal assistant that can check weather, perform calculations, and manage a simple task list.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Tools: Weather API, Calculator, Task Storage
              </div>
            </div>
            
            <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
              <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2">Project 2: Content Analyzer</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Create a system that can fetch web content, analyze text sentiment, and generate summaries.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Tools: Web Scraper, Text Analysis, File Operations
              </div>
            </div>
            
            <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Project 3: Data Dashboard</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Build a system that queries databases, performs calculations, and generates visualizations.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Tools: Database Queries, Chart Generation, Email Notifications
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 