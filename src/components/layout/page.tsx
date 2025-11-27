'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface PageAnimationProps {
  children: React.ReactNode;
}

export default function PageAnimation({ children }: PageAnimationProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence initial={true}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
