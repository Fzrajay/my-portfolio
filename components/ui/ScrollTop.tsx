'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-500/30
          bg-slate-900/70
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(34,211,238,.2)]
          transition
          hover:border-cyan-400
          "
        >
          <ArrowUp className="text-cyan-400" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
