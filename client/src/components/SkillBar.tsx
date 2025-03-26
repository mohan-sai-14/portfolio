import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView as useFramerInView } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useFramerInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.5, delay }
      });
    }
  }, [controls, inView, percentage, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-400">{percentage}%</p>
      </div>
      <div className="relative h-2 w-full rounded-full bg-gray-700/30 overflow-hidden" ref={ref}>
        <motion.div
          initial={{ width: "0%" }}
          animate={controls}
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
