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
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Understanding Tool Use" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Claude's tool use feature allows it to call external functions and APIs to extend its capabilities 
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

      {/* Tool Definition */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Defining Tools" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tools are defined using JSON schemas that specify the function name, description, and parameters. 
            Here's how to structure tool definitions:
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Basic Tool Structure</h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`{
  "name": "get_weather",
  "description": "Get weather information for a specific location",
  "input_schema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "The city and state/country"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Temperature units"
      }
    },
    "required": ["location"]
  }
}`}
              </pre>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Calculator Tool Example</h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`{
  "name": "calculator",
  "description": "Perform mathematical calculations",
  "input_schema": {
    "type": "object",
    "properties": {
      "expression": {
        "type": "string",
        "description": "Mathematical expression to evaluate"
      }
    },
    "required": ["expression"]
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
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`import anthropic
import json

def calculator(expression):
    """Safely evaluate mathematical expressions"""
    try:
        result = eval(expression)
        return {"result": result}
    except:
        return {"error": "Invalid expression"}

def get_weather(location, units="fahrenheit"):
    """Mock weather function"""
    return {
        "location": location,
        "temperature": 72,
        "units": units,
        "condition": "sunny"
    }

# Tool definitions
tools = [
    {
        "name": "calculator",
        "description": "Perform mathematical calculations",
        "input_schema": {
            "type": "object",
            "properties": {
                "expression": {"type": "string"}
            },
            "required": ["expression"]
        }
    },
    {
        "name": "get_weather",
        "description": "Get weather information",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {"type": "string"},
                "units": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["location"]
        }
    }
]

# Claude API call with tools
client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    tools=tools,
    messages=[{
        "role": "user",
        "content": "What's 25 * 47? Also, what's the weather like in Paris?"
    }]
)`}
              </pre>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">JavaScript/Node.js Implementation</h4>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

// Tool functions
const tools = {
  calculator: (params) => {
    try {
      const result = Function('"use strict"; return (' + params.expression + ')')();
      return { result };
    } catch (error) {
      return { error: 'Invalid expression' };
    }
  },
  
  get_weather: (params) => {
    // Mock implementation
    return {
      location: params.location,
      temperature: 22,
      units: params.units || 'celsius',
      condition: 'partly cloudy'
    };
  }
};

async function handleToolUse() {
  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    tools: [
      {
        name: 'calculator',
        description: 'Perform mathematical calculations',
        input_schema: {
          type: 'object',
          properties: {
            expression: { type: 'string' }
          },
          required: ['expression']
        }
      }
    ],
    messages: [{
      role: 'user',
      content: 'Calculate 15% tip on a $84.50 bill'
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

      {/* Common Tool Examples */}
      <motion.section
        {...sectionAnimation(4)}
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
  "name": "query_database",
  "description": "Execute SQL queries",
  "input_schema": {
    "type": "object",
    "properties": {
      "query": {"type": "string"},
      "table": {"type": "string"},
      "limit": {"type": "integer", "maximum": 100}
    },
    "required": ["query", "table"]
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
  "name": "file_operations",
  "description": "File system operations",
  "input_schema": {
    "type": "object",
    "properties": {
      "operation": {"type": "string", "enum": ["read", "write", "list"]},
      "path": {"type": "string"},
      "content": {"type": "string"}
    },
    "required": ["operation", "path"]
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
  "name": "api_request",
  "description": "Make HTTP API requests",
  "input_schema": {
    "type": "object",
    "properties": {
      "url": {"type": "string"},
      "method": {"type": "string", "enum": ["GET", "POST"]},
      "params": {"type": "object"},
      "headers": {"type": "object"}
    },
    "required": ["url", "method"]
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