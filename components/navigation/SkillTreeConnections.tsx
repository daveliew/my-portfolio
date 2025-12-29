'use client';

import { motion } from 'framer-motion';
import { SkillTreeNode, SkillTreeConnection, branchColors } from '@/types/skill-tree';

interface SkillTreeConnectionsProps {
  nodes: SkillTreeNode[];
  connections: SkillTreeConnection[];
}

function getNodeById(nodes: SkillTreeNode[], id: string): SkillTreeNode | undefined {
  return nodes.find((node) => node.id === id);
}

function createBezierPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): string {
  // Calculate control points for smooth curve
  const midY = (fromY + toY) / 2;

  // Vertical curves - control points create smooth downward flow
  return `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
}

export function SkillTreeConnections({ nodes, connections }: SkillTreeConnectionsProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient definitions for each branch */}
        {Object.entries(branchColors).map(([branch, color]) => (
          <linearGradient
            key={branch}
            id={`gradient-${branch}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity={0.6} />
            <stop offset="100%" stopColor={color} stopOpacity={0.3} />
          </linearGradient>
        ))}
      </defs>

      {connections.map((connection, index) => {
        const fromNode = getNodeById(nodes, connection.from);
        const toNode = getNodeById(nodes, connection.to);

        if (!fromNode || !toNode) return null;

        const path = createBezierPath(
          fromNode.position.x,
          fromNode.position.y,
          toNode.position.x,
          toNode.position.y
        );

        // Use the "to" node's branch for coloring
        const gradientId = `gradient-${toNode.branch}`;

        return (
          <motion.path
            key={`${connection.from}-${connection.to}`}
            d={path}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={0.4}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: 0.8,
                delay: index * 0.05,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 0.3,
                delay: index * 0.05,
              },
            }}
          />
        );
      })}
    </svg>
  );
}
