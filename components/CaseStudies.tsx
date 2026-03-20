'use client';

import { motion } from 'framer-motion';
import { Brain, MessageSquare, Users, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';

const caseStudies = [
  {
    icon: Brain,
    title: 'AI-Powered Candidate Screening',
    company: 'Vetted Health (Contractor)',
    period: '2024',
    challenge:
      "Manual candidate screening couldn't scale. Needed AI system to process 500+ candidates daily while maintaining quality and personalized engagement.",
    solution:
      'Built multi-agent AI recruiter using OpenAI GPT-4 with custom training on thousands of recruiter conversations. Implemented adaptive tone learning, sentiment analysis, and automated profile completion.',
    results: [
      '50% reduction in screening time',
      '80% improvement in match quality',
      '500 qualified candidates processed daily',
      '99.9% message delivery rate with AI-generated content',
    ],
    tech: [
      'OpenAI GPT-4',
      'Multi-Agent Systems',
      'Prompt Engineering',
      'Node.js',
      'Sentiment Analysis',
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI-Enhanced Messaging Platform',
    company: 'Vetted Health (Contractor)',
    period: '2024',
    challenge:
      "Manual candidate engagement couldn't scale. Needed automated workflows with AI-powered sentiment analysis for 500+ daily qualified candidates.",
    solution:
      'Designed event-driven messaging system with AI sentiment analysis, automated engagement pipelines, and real-time chat. Integrated OpenAI for intelligent response generation.',
    results: [
      '500 qualified candidates processed daily',
      '150k active candidates managed',
      '99.9% message delivery rate',
      'AI sentiment analysis for engagement optimization',
    ],
    tech: ['TypeScript', 'AWS SQS', 'PostgreSQL', 'WebSockets', 'OpenAI API'],
  },
  {
    icon: Users,
    title: 'Engineering Team Growth',
    company: 'Vetted Health (Contractor)',
    period: '2024-Present',
    challenge:
      'Rapid growth required scaling team while maintaining quality and velocity.',
    solution:
      'Built hiring process, established ownership culture, implemented agile practices, and mentored engineers.',
    results: [
      'Grew team from 3 to 7 engineers',
      '25% improvement in delivery velocity',
      'Zero attrition rate',
      'Reduced incident response time by 60%',
    ],
    tech: ['Leadership', 'Hiring', 'Mentoring', 'Agile', 'Process'],
  },
  {
    icon: TrendingDown,
    title: 'Infrastructure Cost Optimization',
    company: 'EPAM Systems',
    period: '2022-2025',
    challenge:
      'High AWS costs and inefficient resource utilization across multiple services.',
    solution:
      'Implemented queue-based async systems, optimized database queries, and right-sized infrastructure.',
    results: [
      'Multi-million dollar business impact',
      '40% reduction in AWS costs',
      'Improved API latency by 60%',
      'Better resource utilization',
    ],
    tech: ['AWS', 'PostgreSQL', 'Redis', 'Kotlin', 'GraphQL'],
  },
];

export function CaseStudies() {
  return (
    <section className='mb-20'>
      <h2 className='text-3xl font-bold font-heading mb-12'>Case Studies</h2>

      <div className='space-y-12'>
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card hover>
              <div className='flex items-start gap-6'>
                <IconBadge icon={study.icon} className='flex-shrink-0' />

                <div className='flex-1'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                    <div>
                      <h3 className='text-2xl font-bold mb-1'>{study.title}</h3>
                      <p className='text-sm text-primary'>
                        {study.company} • {study.period}
                      </p>
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <h4 className='text-sm font-semibold text-muted mb-2'>
                        Challenge
                      </h4>
                      <p className='text-foreground'>{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className='text-sm font-semibold text-muted mb-2'>
                        Solution
                      </h4>
                      <p className='text-foreground'>{study.solution}</p>
                    </div>
                  </div>

                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-muted mb-3'>
                      Results
                    </h4>
                    <div className='grid sm:grid-cols-2 gap-3'>
                      {study.results.map((result) => (
                        <div
                          key={result}
                          className='flex items-center gap-2 text-sm'
                        >
                          <div className='w-1.5 h-1.5 bg-success rounded-full' />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 text-xs font-medium bg-border/50 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
