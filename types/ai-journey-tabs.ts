// Types for AI Journey tab navigation
// WHY -> HOW -> WHAT structure with inline content swap

export type TabId = 'why' | 'how' | 'what';

export interface TabItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export interface TabSection {
  type: 'insight-box' | 'feature-card' | 'grid' | 'experiments';
  title?: string;
  description?: string;
  items?: TabItem[];
  cta?: {
    label: string;
    href: string;
  };
  // For insight-box type
  quote?: string;
  // For experiments type
  experiments?: {
    title: string;
    description: string;
    status: string;
    statusColor: 'green' | 'orange' | 'blue';
  }[];
}

export interface TabData {
  id: TabId;
  label: string;
  icon: string;
  color: 'blue' | 'purple' | 'teal';
  headline: string;
  sections: TabSection[];
}

export interface AIJourneyTabsData {
  tabs: TabData[];
}
