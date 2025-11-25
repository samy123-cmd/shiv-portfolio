/**
 * Motion Configuration
 * Reusable Framer Motion animation variants and presets
 */

import { Variants } from 'framer-motion';

// Standard easings (as const for type safety)
export const easings = {
    elegant: [0.16, 1, 0.3, 1] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
    entrance: [0, 0, 0.2, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
};

// Duration presets
export const durations = {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
};

// Reusable animation variants
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: durations.normal,
            ease: easings.smooth,
        },
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
};

// Stagger container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.normal,
            ease: easings.elegant,
        },
    },
};

// Hover effects
export const hoverLift = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            duration: durations.normal,
            ease: easings.elegant,
        },
    },
};

export const hoverScale = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: durations.fast,
            ease: easings.smooth,
        },
    },
};

// Page transitions
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: durations.normal,
            ease: easings.exit,
        },
    },
};

// Parallax config
export const parallaxConfig = {
    initial: { y: 0 },
    animate: (offset: number) => ({
        y: offset,
        transition: {
            duration: 0,
        },
    }),
};
