'use client';

import { motion } from 'motion/react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        x: x - 150,
        y: y - 150,
      }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
      }}
      className="
        pointer-events-none
        fixed
        z-0
        h-[300px]
        w-[300px]
        rounded-full
        bg-cyan-400/10
        blur-[100px]
      "
    />
  );
}
