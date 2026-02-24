'use client';

import { motion } from 'framer-motion';
import { Zap, Code, Users } from 'lucide-react';

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
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mb-4'>
            What I Bring to the Table
          </h2>
          <p className='text-lg text-muted max-w-2xl mx-auto'>
            Proven track record building reliable systems at scale and leading
            high-performing teams
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className='p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all group'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors'>
                <prop.icon className='w-6 h-6 text-primary' />
              </div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
