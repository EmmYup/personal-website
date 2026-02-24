import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Emmanuel Yupit',
  description:
    'Get in touch with Emmanuel Yupit for Engineering Manager, Tech Lead, or Senior Software Engineer opportunities.',
};

export default function ContactPage() {
  return (
    <div className='pt-24 pb-20'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold font-[family-name:var(--font-syne)] mb-6'>
            Get in Touch
          </h1>
          <p className='text-xl text-muted'>
            I'm open to Engineering Manager, Tech Lead, Senior Software
            Engineer, and Founding Engineer roles. Let's talk if you're building
            something ambitious.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
