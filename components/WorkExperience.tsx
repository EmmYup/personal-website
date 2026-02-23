"use client";

import { motion } from "framer-motion";

const experience = [
  {
    title: "Engineering Manager",
    company: "Vetted Health",
    location: "United States (Remote)",
    period: "Jun 2024 - Present",
    description: "Lead team of 7 engineers responsible for consumer-facing and revenue-impacting services.",
    achievements: [
      "Architected distributed backend systems processing 500 candidates/day using Node.js, TypeScript, and AWS SQS, maintaining 99.9% uptime while scaling to 150k active users",
      "Built internal feature flag platform (React micro-frontends + AWS) replacing LaunchDarkly, reducing costs by 95% ($50k/year savings)",
      "Designed real-time messaging workflows handling automated engagement pipelines with sentiment analysis",
      "Improved team delivery velocity by 25% through agile practices and ownership culture",
      "Reduced incident response time (MTTR) by 60% through better monitoring and on-call processes",
      "Led hiring and onboarding of 4 engineers, growing team from 3 to 7 with zero attrition",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "EPAM Systems",
    location: "Mexico (Remote)",
    period: "May 2022 - Aug 2024",
    description: "Delivered backend systems for large-scale consumer applications with millions of users.",
    achievements: [
      "Designed and optimized core booking flow APIs handling 100k+ daily requests, reducing checkout latency by 40% (800ms → 480ms)",
      "Built frontend platforms and middleware enabling faster configuration and delivery of promotions using Kotlin + GraphQL",
      "Implemented queue-based async systems to handle high request volume reliably, contributing to multi-million dollar business impact",
      "Designed secure network and API access solutions for globally distributed teams",
      "Participated in on-call rotations and production incident resolution",
    ],
  },
  {
    title: "Software Engineer",
    company: "Apex Systems",
    location: "Mexico (Remote)",
    period: "Oct 2020 - May 2022",
    achievements: [
      "Built and optimized React-based UIs with focus on component design, state management, and performance",
      "Created reusable frontend boilerplates improving development velocity through Storybook and testing best practices",
      "Delivered scalable frontend solutions reducing time-to-production",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Owners-Link",
    location: "Mexico",
    period: "Jan 2020 - Jun 2020",
    achievements: [
      "Built full-stack features using React and Node.js",
      "Contributed to platform architecture and technical decisions",
    ],
  },
  {
    title: "Software Engineer",
    company: "Spaceshiplabs",
    location: "Mexico",
    period: "Nov 2016 - Jan 2020",
    achievements: [
      "Built scalable React applications and backend services",
      "Led frontend/backend refactors and platform migrations",
      "Mentored junior engineers and contributed to architectural decisions",
    ],
  },
];

export function WorkExperience() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-[family-name:var(--font-syne)] mb-12">
        Full Experience Timeline
      </h2>

      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
            
            <div className="pb-8">
              <h3 className="text-xl font-bold mb-1">{job.title}</h3>
              <p className="text-primary font-medium mb-1">{job.company}</p>
              <p className="text-sm text-muted mb-4">
                {job.period} • {job.location}
              </p>
              
              {job.description && (
                <p className="text-muted mb-4">{job.description}</p>
              )}

              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
