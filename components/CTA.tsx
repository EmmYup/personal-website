'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark to-[#003a8c] p-12 md:p-16 text-white'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl' />
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl' />
          </div>

          <div className='relative z-10 max-w-3xl'>
            <h2 className='text-3xl sm:text-4xl font-bold font-heading mb-4'>
              Let&apos;s Build Something Great Together
            </h2>
            <p className='text-lg text-white mb-8'>
              I&apos;m open to Engineering Manager, Tech Lead, Senior Software
              Engineer, and Founding Engineer roles. If you&apos;re building
              something ambitious, let&apos;s talk.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg'
              >
                Get in Touch
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
              <Link
                href='/resume'
                className='inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all'
              >
                View Resume
              </Link>
            </div>

            <div className='flex gap-4'>
              <a
                href='mailto:e.pyupit@gmail.com'
                className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors'
                aria-label='Email'
              >
                <Mail className='w-5 h-5' />
              </a>
              <a
                href='https://linkedin.com/in/emmanuelpyupit'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' />
              </a>
              <a
                href='https://github.com/EmmYup'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors'
                aria-label='GitHub'
              >
                <Github className='w-5 h-5' />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
