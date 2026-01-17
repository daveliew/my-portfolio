'use client';

import React, { MouseEvent, useMemo, useCallback } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SkillsChartProps, CustomTooltipProps } from '@/types/skills';

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--dark-grey-secondary)] p-2 rounded border border-[var(--accent-primary)]">
        <p className="text-[var(--text-primary)]">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// Add proper typing for chart data
interface ChartDataPoint {
  name: string;
  value: number;
  originalSkill: SkillsChartProps['skills'][0]; // Use the skill type from props
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, onSkillClick, selectedSkill }) => {
  // Memoize chart data to avoid recomputing averages on every render
  const chartData = useMemo<ChartDataPoint[]>(() =>
    skills.map(skill => {
      const subskills = skill.subskills ?? {};
      const values = Object.values(subskills) as number[];
      const average = values.length ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;

      return {
        name: skill.name,
        value: Math.round(average),
        originalSkill: skill
      };
    }), [skills]);

  // Stable callback reference for click handler
  const handleClick = useCallback((event: MouseEvent<SVGElement>) => {
    const target = event.target as SVGElement & { payload?: ChartDataPoint };
    if (target?.payload?.originalSkill) {
      onSkillClick(target.payload.originalSkill);
    }
  }, [onSkillClick]);

  return (
    <div className="w-full h-[400px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="var(--accent-secondary)" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={false} // Hide default labels
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 5]} 
            axisLine={false}
            tick={false}
            tickCount={6}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="var(--accent-primary)"
            fill="var(--accent-secondary)"
            fillOpacity={0.6}
            onClick={handleClick}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {chartData.map((data, index) => (
          <div
            key={data.name}
            className={`absolute cursor-pointer transition-colors duration-200 ${
              selectedSkill?.name === data.name ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-primary)] hover:text-[var(--accent-secondary)]'
            }`}
            style={{
              top: `${50 - 40 * Math.cos((index / chartData.length) * Math.PI * 2 - Math.PI / 2)}%`,
              left: `${50 + 40 * Math.sin((index / chartData.length) * Math.PI * 2 - Math.PI / 2)}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
            onClick={() => onSkillClick(data.originalSkill)}
          >
            <span className="text-sm">
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsChart;
