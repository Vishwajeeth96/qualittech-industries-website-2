import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition, type TargetAndTransition, type VariantLabels } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center' | 'random';
  initial?: TargetAndTransition | VariantLabels | Record<string, any>;
  animate?: TargetAndTransition | VariantLabels | Record<string, any>;
  exit?: TargetAndTransition | VariantLabels | Record<string, any>;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: Transition;
  rotationInterval?: number;
  splitBy?: 'characters' | 'words' | 'lines';
  auto?: boolean;
  loop?: boolean;
  onNext?: (index: number) => void;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  mainClassName = "px-2 sm:px-2 md:px-3 bg-[#017AC3] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex",
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "overflow-hidden pb-0.5 sm:pb-1 md:pb-1",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
  splitBy = "characters",
  auto = true,
  loop = true,
  onNext,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!auto || texts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= texts.length - 1) {
          if (loop) {
            onNext?.(0);
            return 0;
          }
          return prev;
        }
        const next = prev + 1;
        onNext?.(next);
        return next;
      });
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [auto, loop, texts.length, rotationInterval, onNext]);

  const currentText = texts[currentIndex] || '';

  const getElements = () => {
    if (splitBy === 'characters') {
      return currentText.split('');
    } else if (splitBy === 'words') {
      return currentText.split(' ');
    }
    return [currentText];
  };

  const elements = getElements();

  const getStaggerDelay = (index: number, total: number) => {
    if (staggerFrom === 'last') {
      return (total - 1 - index) * staggerDuration;
    } else if (staggerFrom === 'center') {
      const center = (total - 1) / 2;
      return Math.abs(center - index) * staggerDuration;
    } else if (staggerFrom === 'random') {
      return Math.random() * total * staggerDuration;
    }
    // Default 'first'
    return index * staggerDuration;
  };

  return (
    <span className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex flex-wrap items-center justify-center"
          layout
        >
          {elements.map((char, index) => {
            const delay = getStaggerDelay(index, elements.length);
            return (
              <span key={`${currentIndex}-${index}`} className={`inline-block ${splitLevelClassName}`}>
                <motion.span
                  className="inline-block whitespace-pre"
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    ...transition,
                    delay,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
