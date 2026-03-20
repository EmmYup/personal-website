'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

const metrics = [
  {
    value: 150000,
    suffix: '+',
    label: 'Active Users Served',
    duration: 2000,
  },
  {
    value: 20,
    suffix: 'M',
    label: 'ARR Platform Revenue',
    prefix: '$',
    duration: 1500,
  },
  {
    value: 500,
    suffix: '',
    label: 'Candidates/Day Processed',
    duration: 1500,
  },
  {
    value: 95,
    suffix: '%',
    label: 'Cost Reduction Achieved',
    duration: 1800,
  },
  {
    value: 7,
    suffix: '',
    label: 'Engineers Led & Mentored',
    duration: 1000,
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'System Uptime Maintained',
    duration: 2000,
  },
];

function AnimatedNumber({
  value,
  duration,
}: {
  value: number;
  duration: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        setHasAnimated(true);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, duration, hasAnimated]);

  return <>{Math.floor(count).toLocaleString()}</>;
}

export function ImpactMetrics() {
  return (
    <section className='py-20 bg-gradient-to-br from-primary/5 to-accent/5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Impact by the Numbers'
          description='Measurable results from building and leading at scale'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <div className='text-4xl font-bold font-heading text-primary mb-2'>
                  {metric.prefix}
                  <AnimatedNumber
                    value={metric.value}
                    duration={metric.duration}
                  />
                  {metric.suffix}
                </div>
                <div className='text-sm text-muted font-medium'>
                  {metric.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
