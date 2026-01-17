'use client';

import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { SkillTreeNode } from './SkillTreeNode';
import { SkillTreeConnections } from './SkillTreeConnections';
import skillTreeData from '@/data/skill-tree-navigation.json';
import type { SkillTreeData, DifficultyLevel } from '@/types/skill-tree';

interface SkillTreeMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const difficultyLegend: { level: DifficultyLevel; label: string; color: string }[] = [
  { level: 'beginner', label: 'Beginner', color: 'bg-green-500' },
  { level: 'intermediate', label: 'Intermediate', color: 'bg-blue-500' },
  { level: 'advanced', label: 'Advanced', color: 'bg-purple-500' },
  { level: 'frontier', label: 'Frontier', color: 'bg-pink-500' },
];

export function SkillTreeMenu({ isOpen, onClose }: SkillTreeMenuProps) {
  const pathname = usePathname();
  const data = skillTreeData as SkillTreeData;

  // Precompute active node ID once instead of checking each node during render
  const activeNodeId = useMemo(() => {
    const activeNode = data.nodes.find(
      (node) => pathname === node.href || pathname.startsWith(node.href + '/')
    );
    return activeNode?.id ?? null;
  }, [pathname, data.nodes]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-full right-0 mt-0 z-50"
          style={{ transform: 'translateX(50%)' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="
              w-[750px]
              bg-white dark:bg-gray-900
              shadow-2xl
              border-t-2 border-blue-600 dark:border-blue-400
              rounded-b-lg
              overflow-hidden
            "
          >
            {/* Header with Legend */}
            <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    AI Fluency Skill Tree
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Click to navigate
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {difficultyLegend.map(({ level, label, color }) => (
                    <div key={level} className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${color}`} />
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Tree Container */}
            <div className="relative h-[480px] p-4">
              {/* SVG Connections Layer */}
              <SkillTreeConnections
                nodes={data.nodes}
                connections={data.connections}
              />

              {/* Nodes Layer */}
              {data.nodes.map((node) => (
                <SkillTreeNode
                  key={node.id}
                  node={node}
                  isActive={node.id === activeNodeId}
                  onNavigate={onClose}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
