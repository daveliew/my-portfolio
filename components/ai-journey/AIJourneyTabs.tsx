'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/common';
import { tabContentVariants } from '@/utils/animations';
import tabsData from '@/data/ai-journey-tabs.json';
import type { TabId, TabData, TabSection } from '@/types/ai-journey-tabs';

// Color mapping for tab themes
const colorClasses = {
  blue: {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-600',
    bgLight: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
  },
  purple: {
    text: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-600',
    bgLight: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
  },
  teal: {
    text: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-600',
    bgLight: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-200 dark:border-teal-800',
    hover: 'hover:bg-teal-50 dark:hover:bg-teal-900/20',
  },
};

// Tab Button Component
function TabButton({
  tab,
  isActive,
  onClick
}: {
  tab: TabData;
  isActive: boolean;
  onClick: () => void;
}) {
  const colors = colorClasses[tab.color];

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`${tab.id}-panel`}
      onClick={onClick}
      className={`
        relative px-6 py-4 text-lg font-medium transition-all duration-200
        ${isActive ? colors.text : 'text-gray-600 dark:text-gray-400'}
        ${colors.hover}
        rounded-t-lg
      `}
    >
      <span className="flex items-center gap-2">
        <span>{tab.icon}</span>
        <span>{tab.label}</span>
      </span>
      {isActive && (
        <motion.div
          layoutId="activeTabIndicator"
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${colors.bg}`}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
}

// Section Renderers
function InsightBox({ section, color }: { section: TabSection; color: 'blue' | 'purple' | 'teal' }) {
  const colors = colorClasses[color];
  return (
    <div className={`p-4 rounded-lg border ${colors.bgLight} ${colors.border}`}>
      <p className={`${colors.text} font-medium text-center`}>
        {section.quote}
      </p>
    </div>
  );
}

function FeatureCard({ section, color }: { section: TabSection; color: 'blue' | 'purple' | 'teal' }) {
  const colors = colorClasses[color];
  return (
    <Card hover className="p-6">
      <h3 className={`text-xl font-semibold mb-3 ${colors.text}`}>{section.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{section.description}</p>
      {section.cta && (
        <Link
          href={section.cta.href}
          className={`${colors.text} hover:underline font-medium text-sm`}
        >
          {section.cta.label} &rarr;
        </Link>
      )}
    </Card>
  );
}

function GridSection({ section, color }: { section: TabSection; color: 'blue' | 'purple' | 'teal' }) {
  const colors = colorClasses[color];
  const items = section.items || [];

  return (
    <div className="space-y-4">
      {section.title && (
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold">{section.title}</h3>
          {section.description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{section.description}</p>
          )}
        </div>
      )}
      <div className={`grid gap-4 ${items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
        {items.map((item, idx) => (
          <Card key={idx} hover={!!item.href} className="p-4 text-center">
            {item.href ? (
              <Link href={item.href} className="block">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className={`font-semibold mb-1 ${colors.text}`}>{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </Link>
            ) : (
              <>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </>
            )}
          </Card>
        ))}
      </div>
      {section.cta && (
        <div className="text-center mt-4">
          <Link
            href={section.cta.href}
            className={`${colors.text} hover:underline font-medium`}
          >
            {section.cta.label} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}

function ExperimentsSection({ section }: { section: TabSection }) {
  const experiments = section.experiments || [];
  const statusColors = {
    green: 'text-green-600 dark:text-green-400',
    orange: 'text-orange-600 dark:text-orange-400',
    blue: 'text-blue-600 dark:text-blue-400',
  };

  return (
    <div className="space-y-4">
      {section.title && (
        <h3 className="text-xl font-semibold text-center">{section.title}</h3>
      )}
      <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
        <div className="grid md:grid-cols-2 gap-8">
          {experiments.map((exp, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-3">{exp.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">{exp.description}</p>
              <p className={`text-sm font-medium ${statusColors[exp.statusColor]}`}>
                Status: {exp.status}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// Tab Content Component
function TabContent({ tab }: { tab: TabData }) {
  return (
    <div className="space-y-8">
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 font-medium">
        {tab.headline}
      </p>
      {tab.sections.map((section, idx) => {
        switch (section.type) {
          case 'insight-box':
            return <InsightBox key={idx} section={section} color={tab.color} />;
          case 'feature-card':
            return <FeatureCard key={idx} section={section} color={tab.color} />;
          case 'grid':
            return <GridSection key={idx} section={section} color={tab.color} />;
          case 'experiments':
            return <ExperimentsSection key={idx} section={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

// Main Component
export default function AIJourneyTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('why');
  const tabs = tabsData.tabs as TabData[];
  const activeTabData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="py-8">
      {/* Tab Bar */}
      <div
        role="tablist"
        aria-label="AI Journey sections"
        className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8"
      >
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`${activeTab}-panel`}
            aria-labelledby={`${activeTab}-tab`}
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TabContent tab={activeTabData} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
