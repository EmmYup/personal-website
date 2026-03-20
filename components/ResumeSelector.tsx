'use client';

import { motion } from 'framer-motion';
import { Download, Users, Code, Layout, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';

const resumes = [
  {
    icon: Users,
    title: 'Engineering Manager',
    description:
      'Leadership-focused resume highlighting team management, hiring, and technical strategy',
    highlights: [
      'Led team of 7 engineers',
      '25% velocity improvement',
      '95% cost reduction initiatives',
      'Zero attrition rate',
    ],
    filename: 'Emmanuel_Yupit_Engineering_Manager.pdf',
    targetRoles: 'Engineering Manager, Tech Lead, Founding Engineer',
  },
  {
    icon: Code,
    title: 'Full-Stack Engineer',
    description:
      'Technical depth across frontend, backend, and infrastructure with scale metrics',
    highlights: [
      'React, Node.js, TypeScript',
      '150k+ active users',
      '$20M ARR systems',
      'Event-driven architecture',
    ],
    filename: 'Emmanuel_Yupit_FullStack_Engineer.pdf',
    targetRoles:
      'Senior Full-Stack, Tech Lead, Founding Engineer, Software Engineer (FAANG)',
  },
  {
    icon: Briefcase,
    title: 'Senior Engineer',
    description:
      'Balanced technical resume emphasizing backend systems, scale, and problem-solving',
    highlights: [
      'Distributed systems',
      '100k+ daily requests',
      '40% latency reduction',
      'Multi-million $ impact',
    ],
    filename: 'Emmanuel_Yupit_Senior_Engineer.pdf',
    targetRoles: 'Senior Engineer, Software Engineer (FAANG), Tech Lead',
  },
  {
    icon: Layout,
    title: 'Frontend Engineer',
    description:
      'UI/UX focused resume emphasizing React expertise and frontend architecture',
    highlights: [
      'React, Next.js, Vite',
      'Micro-frontends',
      'Performance optimization',
      'Component libraries',
    ],
    filename: 'Emmanuel_Yupit_Frontend_Engineer.pdf',
    targetRoles:
      'Senior Frontend, Frontend Engineer, Software Engineer (FAANG)',
  },
];

export function ResumeSelector() {
  return (
    <div className='space-y-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {resumes.map((resume, index) => (
          <motion.div
            key={resume.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card hover group className='h-full flex flex-col'>
              <IconBadge icon={resume.icon} groupHover className='mb-6' />

              <h3 className='text-xl font-bold mb-3'>{resume.title}</h3>
              <p className='text-muted mb-4'>{resume.description}</p>

              <div className='mb-4 p-3 bg-accent/5 rounded-lg'>
                <p className='text-xs font-semibold text-primary mb-1'>
                  Best for:
                </p>
                <p className='text-xs text-muted'>{resume.targetRoles}</p>
              </div>

              <ul className='space-y-2 mb-6 flex-1'>
                {resume.highlights.map((highlight) => (
                  <li key={highlight} className='flex items-center gap-2 text-sm'>
                    <div className='w-1.5 h-1.5 bg-primary rounded-full' />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`/${resume.filename}`}
                download
                className='w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105'
              >
                <Download className='mr-2 w-5 h-5' />
                Download PDF
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className='bg-gradient-to-br from-accent/5 to-primary/5'>
          <h3 className='text-2xl font-bold mb-4'>Need a Custom Resume?</h3>
          <p className='text-muted mb-6'>
            Have a specific job description? I can tailor my resume to highlight
            the most relevant experience and skills for your role.
          </p>
          <a
            href='/contact'
            className='inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors'
          >
            Get in Touch →
          </a>
        </Card>
      </motion.div>
    </div>
  );
}
