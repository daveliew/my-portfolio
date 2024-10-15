'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  subskills: string[];
}

interface SkillTreeProps {
  skills: Skill[];
}

const SkillTree: React.FC<SkillTreeProps> = ({ skills }) => {
  return (
    <div className="w-full bg-background p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
          >
            <h3 className="text-lg font-bold mb-2 text-foreground">{skill.name}</h3>
            <ul className="list-disc list-inside">
              {skill.subskills.map((subskill) => (
                <li key={subskill} className="text-sm text-muted-foreground">{subskill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;
