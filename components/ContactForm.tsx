'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function ContactForm() {
  return (
    <div className='grid md:grid-cols-2 gap-12'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>

        <div className='space-y-6'>
          <a
            href='mailto:e.pyupit@gmail.com'
            className='flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group'
          >
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
              <Mail className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-semibold'>Email</p>
              <p className='text-muted'>e.pyupit@gmail.com</p>
            </div>
          </a>

          <a
            href='https://linkedin.com/in/emmanuelpyupit'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group'
          >
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
              <Linkedin className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-semibold'>LinkedIn</p>
              <p className='text-muted'>linkedin.com/in/emmanuelpyupit</p>
            </div>
          </a>

          <a
            href='https://github.com/EmmYup'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group'
          >
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
              <Github className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-semibold'>GitHub</p>
              <p className='text-muted'>github.com/EmmYup</p>
            </div>
          </a>

          <div className='flex items-center gap-4 p-4 rounded-lg border border-border'>
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
              <MapPin className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-semibold'>Location</p>
              <p className='text-muted'>Mexico • Open to Remote / Relocation</p>
            </div>
          </div>
        </div>

        <div className='mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border'>
          <h3 className='font-bold mb-3'>Availability</h3>
          <p className='text-muted mb-4'>
            Currently employed at Vetted Health but open to new opportunities. I
            typically respond within 24 hours.
          </p>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-success rounded-full animate-pulse' />
            <span className='text-sm text-success font-medium'>
              Available for interviews
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className='text-2xl font-bold mb-6'>Quick Message</h2>

        <div className='p-8 rounded-2xl border border-border bg-background'>
          <p className='text-muted mb-6'>
            For the fastest response, please email me directly at{' '}
            <a
              href='mailto:e.pyupit@gmail.com'
              className='text-primary hover:underline'
            >
              e.pyupit@gmail.com
            </a>{' '}
            or connect with me on{' '}
            <a
              href='https://linkedin.com/in/emmanuelpyupit'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              LinkedIn
            </a>
            .
          </p>

          <div className='space-y-4'>
            <div>
              <h4 className='font-semibold mb-2'>What to Include:</h4>
              <ul className='space-y-2 text-sm text-muted'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>Company name and role you're hiring for</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>Brief description of the opportunity</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>Team size and tech stack</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>Location and remote policy</span>
                </li>
              </ul>
            </div>

            <div className='pt-4 border-t border-border'>
              <h4 className='font-semibold mb-2'>Roles I'm Interested In:</h4>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Engineering Manager',
                  'Tech Lead',
                  'Staff Engineer',
                  'Founding Engineer',
                ].map((role) => (
                  <span
                    key={role}
                    className='px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full'
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
