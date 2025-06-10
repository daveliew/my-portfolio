import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  id: string;
  title: string;
  description: string;
  domains: string[];
  connections: string[];
}

const achievements: Achievement[] = [
  {
    id: 'restaurant',
    title: 'Michelin Restaurant Recognition',
    description: 'Applied systems thinking to elevate culinary experience and operational excellence',
    domains: ['Traditional Business', 'Strategic Thinking'],
    connections: ['customer-experience', 'operational-systems']
  },
  {
    id: 'web3-analytics',
    title: '35% Growth in Web3 Platform',
    description: 'Leveraged traditional business metrics to optimize decentralized analytics',
    domains: ['Web3', 'Strategic Thinking'],
    connections: ['customer-experience', 'data-architecture']
  },
  {
    id: 'revenue-growth',
    title: 'S$1M+ Revenue Growth (2x)',
    description: 'Cross-domain insights from hospitality to tech venture scaling',
    domains: ['Traditional Business', 'Web3', 'Strategic Thinking'],
    connections: ['operational-systems', 'data-architecture', 'market-positioning']
  },
  {
    id: 'startups',
    title: '4 Startups Co-founded',
    description: 'Pattern recognition across industries driving systematic venture creation',
    domains: ['Traditional Business', 'Web3'],
    connections: ['market-positioning', 'operational-systems']
  }
];

const connections = [
  { id: 'customer-experience', label: 'Customer Experience', color: 'bg-green-500' },
  { id: 'operational-systems', label: 'Operational Systems', color: 'bg-green-400' },
  { id: 'data-architecture', label: 'Data Architecture', color: 'bg-green-500' },
  { id: 'market-positioning', label: 'Market Positioning', color: 'bg-green-400' }
];

const domains = [
  { name: 'Traditional Business', color: 'border-green-400/30 bg-green-400/10' },
  { name: 'Web3', color: 'border-green-400/20 bg-green-400/10' },
  { name: 'Strategic Thinking', color: 'border-green-400/30 bg-green-400/10' }
];

export default function CrossPollinationStudio() {
  return (
    <div className="relative py-16 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cross-Pollination Studio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where traditional business, web3 innovation, and strategic thinking intersect to create 
            <span className="text-green-400 font-medium"> breakthrough solutions</span>
          </p>
        </div>

        {/* Domain Labels */}
        <div className="flex justify-center gap-6 mb-12">
          {domains.map((domain) => (
            <motion.div
              key={domain.name}
              className={`px-4 py-2 rounded-lg border-2 ${domain.color} backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-white">
                {domain.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Achievement Grid with Connections */}
        <div className="relative">
          {/* Background Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lime-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#4ade80" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Cross-pollination lines */}
            <motion.line
              x1="20%" y1="25%" x2="80%" y2="25%"
              stroke="url(#lime-gradient)" strokeWidth="2" strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.line
              x1="20%" y1="75%" x2="80%" y2="75%"
              stroke="url(#lime-gradient)" strokeWidth="2" strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.line
              x1="50%" y1="10%" x2="50%" y2="90%"
              stroke="url(#lime-gradient)" strokeWidth="2" strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2 }}
            />
          </svg>

          {/* Achievement Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8" style={{ zIndex: 2 }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="relative bg-gray-800 border border-gray-600 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Domain Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {achievement.domains.map((domain) => (
                    <span
                      key={domain}
                      className="px-2 py-1 text-xs font-medium bg-green-400/10 text-green-400 rounded border border-green-400/30"
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Connection Points */}
                <div className="flex flex-wrap gap-2">
                  {achievement.connections.map((connectionId) => {
                    const connection = connections.find(c => c.id === connectionId);
                    return connection ? (
                      <motion.div
                        key={connectionId}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${connection.color}/20 border border-current`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-2 h-2 rounded-full ${connection.color}`} />
                        <span className="text-xs font-medium text-green-400">
                          {connection.label}
                        </span>
                      </motion.div>
                    ) : null;
                  })}
                </div>

                {/* Geometric accent */}
                <div className="absolute top-4 right-4 w-3 h-3 border-2 border-green-400 rotate-45" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cross-Pollination Insights */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-400/10 border border-green-400/30 rounded-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400">
              Cross-Domain Pattern Recognition Active
            </span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 