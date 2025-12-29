'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SkillTreeNode as NodeType, difficultyColors } from '@/types/skill-tree';

interface SkillTreeNodeProps {
  node: NodeType;
  isActive: boolean;
  onNavigate: () => void;
}

const difficultyLabels: Record<NodeType['difficulty'], string> = {
  beginner: 'B',
  intermediate: 'I',
  advanced: 'A',
  frontier: 'F',
};

export function SkillTreeNode({ node, isActive, onNavigate }: SkillTreeNodeProps) {
  const colors = difficultyColors[node.difficulty];

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${node.position.x}%`,
        top: `${node.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: node.position.y / 200 }}
    >
      <Link
        href={node.href}
        onClick={onNavigate}
        className="group block"
      >
        <motion.div
          className={`
            relative px-2 py-1 rounded-md
            ${colors.bg}
            border ${isActive ? colors.border : 'border-transparent'}
            ${isActive ? 'ring-2 ring-offset-1 ring-offset-white dark:ring-offset-gray-900' : ''}
            transition-all duration-200
            cursor-pointer
          `}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Difficulty Badge */}
          <span
            className={`
              absolute -top-1.5 -right-1.5
              w-4 h-4 rounded-full
              flex items-center justify-center
              text-[8px] font-bold
              ${colors.bg} ${colors.text}
              border border-current
              shadow-sm
            `}
          >
            {difficultyLabels[node.difficulty]}
          </span>

          {/* Node Label */}
          <span
            className={`
              text-xs font-medium whitespace-nowrap
              ${colors.text}
              group-hover:opacity-90
            `}
          >
            {node.label}
          </span>
        </motion.div>

        {/* Tooltip on hover */}
        <motion.div
          className="
            absolute left-1/2 -translate-x-1/2 top-full mt-2
            px-2 py-1 rounded bg-gray-900 dark:bg-gray-100
            text-white dark:text-gray-900
            text-[10px] whitespace-nowrap
            opacity-0 group-hover:opacity-100
            pointer-events-none
            transition-opacity duration-200
            z-10
          "
        >
          {node.description}
        </motion.div>
      </Link>
    </motion.div>
  );
}
