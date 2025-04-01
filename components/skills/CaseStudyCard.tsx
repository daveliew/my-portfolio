import React from 'react';
import { CaseStudy } from '@/types/ai-journey';

interface CaseStudyCardProps {
  casestudy: CaseStudy;
}

export function CaseStudyCard({ casestudy }: CaseStudyCardProps) {
  return (
    <div className="bg-deep-navy rounded-lg overflow-hidden border border-light-glow shadow-ambient hover:shadow-hover-glow transition-all duration-300 reflective-surface">
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-vibrant-teal">{casestudy.title}</h3>
          <div className="text-sm text-cool-mint mt-1">
            {new Date(casestudy.date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        <p className="text-warm-sand mb-4">{casestudy.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-vibrant-teal mb-2">Outcomes:</h4>
          <ul className="list-disc list-inside text-sm text-warm-sand space-y-1">
            {casestudy.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-vibrant-teal mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {casestudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-twilight-purple text-warm-sand rounded-md directional-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {casestudy.foundationSkillsApplied && casestudy.foundationSkillsApplied.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-vibrant-teal mb-2">Foundation Skills Applied:</h4>
            <div className="flex flex-wrap gap-2">
              {casestudy.foundationSkillsApplied.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-tech-burgundy text-warm-sand rounded-md directional-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 