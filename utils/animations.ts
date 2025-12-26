import { Variants } from 'framer-motion';

/**
 * Standard fade-in animation with upward motion
 * @param delay - Delay in seconds before animation starts
 * @returns Animation configuration object for framer-motion
 */
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

/**
 * Generate staggered animation configs for multiple sections
 * @param count - Number of sections to animate
 * @param baseDelay - Starting delay (default: 0.1)
 * @param increment - Delay increment between sections (default: 0.1)
 * @returns Array of animation configurations
 */
export const staggeredSections = (count: number, baseDelay = 0.1, increment = 0.1) => 
  Array.from({ length: count }, (_, i) => fadeInUp(baseDelay + (i * increment)));

/**
 * Container animation variants for parent elements
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

/**
 * Item animation variants for child elements in containers
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Page header animation configuration
 */
export const pageHeaderAnimation = fadeInUp(0);

/**
 * Section animation with standard delay
 */
export const sectionAnimation = (index: number) => fadeInUp(0.2 + (index * 0.1));

/**
 * Footer/back link animation (typically last element)
 */
export const footerAnimation = fadeInUp(0.5);

/**
 * Tab content transition variants for AI Journey tabs
 * Used with AnimatePresence for smooth content swapping
 */
export const tabContentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

/**
 * Tab button variants for hover and active states
 */
export const tabButtonVariants: Variants = {
  inactive: { scale: 1 },
  active: { scale: 1.02 },
  tap: { scale: 0.98 }
};