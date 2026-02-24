'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10'>
        <div className='max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-syne)] mb-6 leading-tight'>
              Engineering Manager{' '}
              <span className='text-primary'>Building Scalable Systems</span>
            </h1>
          </motion.div>

          <motion.p
            className='text-xl sm:text-2xl text-muted mb-8 max-w-3xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className='text-foreground font-semibold'>9 years</span>{' '}
            building distributed systems, leading teams, and leveraging AI to
            solve real problems. From platforms processing{' '}
            <span className='text-foreground font-semibold'>
              500 candidates/day
            </span>{' '}
            to systems serving{' '}
            <span className='text-foreground font-semibold'>150k users</span>{' '}
            with 99.9% uptime.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-3 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'>
              React • Node.js • TypeScript
            </span>
            <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'>
              AWS • PostgreSQL
            </span>
            <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'>
              AI Integration (OpenAI, Claude)
            </span>
            <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'>
              Team Leadership
            </span>
          </motion.div>

          <motion.div
            className='flex flex-col sm:flex-row gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href='/work'
              className='inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl'
            >
              View My Work
              <ArrowRight className='ml-2 w-5 h-5' />
            </Link>
            <Link
              href='/resume'
              className='inline-flex items-center justify-center px-8 py-4 border-2 border-border rounded-lg font-semibold hover:border-primary hover:text-primary transition-all'
            >
              <Download className='mr-2 w-5 h-5' />
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            className='mt-12 flex flex-wrap gap-6 text-sm text-muted'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-success rounded-full animate-pulse' />
              <span>Currently at Vetted Health</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-primary rounded-full' />
              <span>Open to opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl' />
    </section>
  );
}
