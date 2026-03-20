'use client';

import { motion } from 'framer-motion';
import { Zap, Code, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';

const valueProps = [
  {
    icon: Zap,
    title: 'Scale Without Breaking',
    description:
      'Built systems handling 500 candidates/day, 150k active users, and $20M ARR with 99.9%+ uptime. Leveraged AI tools (OpenAI, Claude) to enhance automation and user experience where it made sense.',
    metrics: ['500/day', '150k users', '99.9% uptime'],
  },
  {
    icon: Code,
    title: 'Full-Stack Engineering',
    description:
      'Expert in React, TypeScript, Node.js, and AWS. Built platforms from frontend to backend with AI integrations where appropriate. Pragmatic about technology choices and focused on delivering value.',
    metrics: ['React + Node.js', 'AI-enhanced features', 'Cost-conscious'],
  },
  {
    icon: Users,
    title: 'Team Multiplier',
    description:
      'Led 7 engineers, improved delivery velocity 25%, and built ownership-driven culture. Introduced AI tools to improve team productivity while maintaining engineering excellence.',
    metrics: ['7 engineers', '25% faster', 'Zero attrition'],
  },
];

export function ValueProps() {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='What I Bring to the Table'
          description='Proven track record building reliable systems at scale and leading high-performing teams'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover group className='h-full'>
                <IconBadge icon={prop.icon} groupHover className='mb-6' />

                <h3 className='text-xl font-bold mb-3'>{prop.title}</h3>
                <p className='text-muted mb-6'>{prop.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {prop.metrics.map((metric) => (
                    <span
                      key={metric}
                      className='px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full'
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
