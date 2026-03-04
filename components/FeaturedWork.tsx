'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Flag, Activity } from 'lucide-react';

const projects = [
  {
    icon: MessageSquare,
    title: 'Real-time Messaging & Automation',
    company: 'Vetted Health (Contractor)',
    description:
      'Designed event-driven messaging platform handling 500 qualified candidates/day with automated engagement pipelines. Integrated OpenAI API for intelligent candidate screening and sentiment analysis to enhance automation.',
    impact: ['500 candidates/day', '150k active users', '99.9% uptime'],
    tags: ['TypeScript', 'AWS SQS', 'PostgreSQL', 'OpenAI Integration'],
  },
  {
    icon: Flag,
    title: 'Feature Flag Platform',
    company: 'Vetted Health (Contractor)',
    description:
      'Built internal feature flag system replacing LaunchDarkly, reducing costs by 95% ($50k/year) while improving reliability and deployment speed. Used AI tools (Claude, Windsurf) to accelerate development.',
    impact: ['95% cost reduction', 'Zero downtime', '15min deployments'],
    tags: ['React', 'Node.js', 'AWS', 'Micro-frontends'],
  },
  {
    icon: Activity,
    title: 'MentiVet - Veterinary Software',
    company: 'Personal Project - Production',
    description:
      'Live clinical note-taking and decision support system serving veterinarians at mentivet.com. Leveraging AI tools (OpenAI API, Claude) for intelligent note generation and medical knowledge search. Full-stack development with React and FastAPI.',
    impact: ['AI-assisted notes', 'Clinical workflows', 'In production'],
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    link: 'https://mentivet.com',
  },
];

export function FeaturedWork() {
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
            Featured Work
          </h2>
          <p className='text-lg text-muted max-w-2xl mx-auto'>
            Recent projects demonstrating technical leadership and business
            impact
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className='p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-xl transition-all group'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors'>
                <project.icon className='w-6 h-6 text-primary' />
              </div>

              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-sm text-primary mb-4'>{project.company}</p>
              <p className='text-muted mb-6'>{project.description}</p>

              <div className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  {project.impact.map((item) => (
                    <span
                      key={item}
                      className='px-3 py-1 text-xs font-medium bg-success/10 text-success rounded-full'
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs font-medium bg-border text-muted rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href='/work'
            className='inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors'
          >
            View All Work & Experience
            <ArrowRight className='ml-2 w-5 h-5' />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
