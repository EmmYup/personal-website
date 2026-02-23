"use client";

import { motion } from "framer-motion";

const techStack = {
  "Languages": ["TypeScript", "JavaScript", "Python", "SQL"],
  "Frontend": ["React", "Next.js", "Vite", "Tailwind CSS"],
  "Backend": ["Node.js", "FastAPI", "GraphQL", "REST APIs"],
  "Data": ["PostgreSQL", "Redis", "MongoDB", "AWS S3"],
  "Infrastructure": ["AWS", "Docker", "GitHub Actions", "Terraform"],
  "Tools": ["Git", "JIRA", "Sentry", "LaunchDarkly"],
};

export function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Technologies I use to build scalable, reliable systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              className="p-6 rounded-2xl border border-border bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium bg-border/50 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
