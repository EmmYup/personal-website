import { Hero } from '@/components/Hero';
import { ValueProps } from '@/components/ValueProps';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { FeaturedWork } from '@/components/FeaturedWork';
import { TechStack } from '@/components/TechStack';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <div className='pt-16'>
      <Hero />
      <ValueProps />
      <ImpactMetrics />
      <FeaturedWork />
      <TechStack />
      <CTA />
    </div>
  );
}
