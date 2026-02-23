"use client";

import { motion } from "framer-motion";
import { Flag, MessageSquare, Users, TrendingDown } from "lucide-react";

const caseStudies = [
  {
    icon: Flag,
    title: "Feature Flag Platform",
    company: "Vetted Health",
    period: "2024",
    challenge: "LaunchDarkly costs were $50k/year and growing. Needed internal solution with better control and reliability.",
    solution: "Built React micro-frontend feature flag platform with AWS backend, replacing LaunchDarkly entirely.",
    results: [
      "95% cost reduction ($50k → $2.5k/year)",
      "Zero downtime during migration",
      "Deployment time reduced from 2 hours to 15 minutes",
      "100% feature parity with LaunchDarkly",
    ],
    tech: ["React", "Module Federation", "Node.js", "AWS Lambda", "DynamoDB"],
  },
  {
    icon: MessageSquare,
    title: "Real-time Messaging & Automation",
    company: "Vetted Health",
    period: "2024",
    challenge: "Manual candidate engagement couldn't scale. Needed automated workflows for 500+ daily qualified candidates.",
    solution: "Designed event-driven messaging system with SMS/email automation, sentiment analysis, and real-time chat.",
    results: [
      "500 qualified candidates processed daily",
      "150k active candidates managed",
      "99.9% message delivery rate",
      "40% reduction in manual engagement time",
    ],
    tech: ["TypeScript", "AWS SQS", "PostgreSQL", "WebSockets", "Twilio"],
  },
  {
    icon: Users,
    title: "Engineering Team Growth",
    company: "Vetted Health",
    period: "2024-Present",
    challenge: "Rapid growth required scaling team while maintaining quality and velocity.",
    solution: "Built hiring process, established ownership culture, implemented agile practices, and mentored engineers.",
    results: [
      "Grew team from 3 to 7 engineers",
      "25% improvement in delivery velocity",
      "Zero attrition rate",
      "Reduced incident response time by 60%",
    ],
    tech: ["Leadership", "Hiring", "Mentoring", "Agile", "Process"],
  },
  {
    icon: TrendingDown,
    title: "Infrastructure Cost Optimization",
    company: "EPAM Systems",
    period: "2022-2024",
    challenge: "High AWS costs and inefficient resource utilization across multiple services.",
    solution: "Implemented queue-based async systems, optimized database queries, and right-sized infrastructure.",
    results: [
      "Multi-million dollar business impact",
      "40% reduction in AWS costs",
      "Improved API latency by 60%",
      "Better resource utilization",
    ],
    tech: ["AWS", "PostgreSQL", "Redis", "Kotlin", "GraphQL"],
  },
];

export function CaseStudies() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold font-[family-name:var(--font-syne)] mb-12">
        Case Studies
      </h2>

      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            className="p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <study.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                    <p className="text-sm text-primary">
                      {study.company} • {study.period}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted mb-2">Challenge</h4>
                    <p className="text-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted mb-2">Solution</h4>
                    <p className="text-foreground">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted mb-3">Results</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {study.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-border/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
