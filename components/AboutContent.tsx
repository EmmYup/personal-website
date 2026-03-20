'use client';

import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';

export function AboutContent() {
  return (
    <div className='space-y-12'>
      <motion.div
        className='prose prose-lg dark:prose-invert max-w-none'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-xl text-foreground leading-relaxed'>
          I&apos;m an Engineering Manager with a strong technical background and
          hands-on experience building, scaling, and stabilizing engineering
          teams in early-stage startups.
        </p>

        <p className='text-lg text-muted leading-relaxed'>
          Currently, I lead a distributed engineering team at Vetted Health,
          where I own delivery processes, technical planning, and
          cross-functional execution. My role sits at the intersection of
          engineering, product, and business — translating ambiguous goals into
          clear technical initiatives while balancing delivery speed with
          long-term system reliability.
        </p>

        <p className='text-lg text-muted leading-relaxed'>
          Before formally stepping into management, I served as a Tech Lead and
          Senior Software Engineer, contributing directly to backend systems,
          cloud infrastructure, and frontend platforms. I&apos;ve led initiatives
          ranging from automated candidate screening (leveraging OpenAI API) to
          cost-reduction efforts that replaced high-cost vendors with internal
          platforms. I use AI tools (Claude, Windsurf, OpenAI) to accelerate
          development where appropriate.
        </p>
      </motion.div>

      <motion.div
        className='grid md:grid-cols-2 gap-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card padding='sm'>
          <IconBadge icon={Code} className='mb-4' />
          <h3 className='text-xl font-bold mb-3'>Technical Foundation</h3>
          <p className='text-muted'>
            9 years of hands-on experience with React, TypeScript, Node.js, AWS,
            and distributed systems. I still review PRs, design architectures,
            and ship code. Comfortable integrating AI tools (OpenAI, Claude)
            where they add value.
          </p>
        </Card>

        <Card padding='sm'>
          <IconBadge icon={Users} className='mb-4' />
          <h3 className='text-xl font-bold mb-3'>Leadership Approach</h3>
          <p className='text-muted'>
            Building ownership-driven cultures where engineers feel empowered.
            Focus on hiring, mentoring, and creating environments where teams
            can do their best work.
          </p>
        </Card>

        <Card padding='sm'>
          <IconBadge icon={Lightbulb} className='mb-4' />
          <h3 className='text-xl font-bold mb-3'>Problem Solving</h3>
          <p className='text-muted'>
            Thrive in ambiguous environments. Whether it&apos;s scaling systems to
            150k users or reducing costs by 95%, I focus on pragmatic solutions
            that deliver business value.
          </p>
        </Card>

        <Card padding='sm'>
          <IconBadge icon={Target} className='mb-4' />
          <h3 className='text-xl font-bold mb-3'>Current Focus</h3>
          <p className='text-muted'>
            Improving delivery predictability, system stability, and operational
            efficiency. Scaling teams without losing technical quality or
            engineering culture. Exploring AI tools to enhance productivity.
          </p>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className='bg-gradient-to-br from-primary/5 to-accent/5'>
          <h3 className='text-2xl font-bold mb-4'>What I&apos;m Looking For</h3>
          <p className='text-lg text-muted mb-6'>
            I&apos;m open to Engineering Manager or Technical Leadership roles where I
            can help teams build reliable products, grow sustainably, and deliver
            meaningful business impact.
          </p>
          <ul className='space-y-3'>
            {[
              'Engineering Manager positions at growth-stage startups',
              'Tech Lead or Staff Engineer roles with leadership opportunities',
              'Founding Engineer positions at early-stage companies',
              'Remote or hybrid roles (open to relocation for the right opportunity)',
            ].map((item) => (
              <li key={item} className='flex items-start gap-3'>
                <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2' />
                <span className='text-foreground'>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className='text-2xl font-bold mb-6'>Education & Certifications</h3>
        <div className='space-y-4'>
          <Card padding='sm'>
            <h4 className='font-bold text-lg mb-1'>
              B.S. in Data and Business Intelligence Engineering
            </h4>
            <p className='text-muted'>Universidad del Caribe • 2021</p>
          </Card>
          <Card padding='sm'>
            <h4 className='font-bold text-lg mb-1'>Certifications</h4>
            <ul className='space-y-2 mt-3'>
              <li className='text-muted'>
                • Scrum Fundamentals Certified (SFC) — SCRUMstudy
              </li>
              <li className='text-muted'>• React.js — Wizeline Academy</li>
            </ul>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
