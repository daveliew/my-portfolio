'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  icon?: string;
  subskills: string[];
}

interface SkillTreeProps {
  skills: Skill[];
}

const SkillTree: React.FC<SkillTreeProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="w-full bg-background p-8">
      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
          >
            <h3 className="text-xl font-bold mb-2 text-foreground">{skill.name}</h3>
            {skill.icon && <div className="w-12 h-12 bg-muted mb-2">{/* Add icon here */}</div>}
            <ul>
              {skill.subskills.map((subskill) => (
                <li key={subskill} className="text-sm text-muted-foreground">{subskill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      {/* Add connecting lines here */}
    </div>
  );
};

export default SkillTree;
