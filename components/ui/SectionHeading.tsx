'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn('text-center mb-16', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className='text-3xl sm:text-4xl font-bold font-heading mb-4'>{title}</h2>
      {description && (
        <p className='text-lg text-muted max-w-2xl mx-auto'>{description}</p>
      )}
    </motion.div>
  );
}
