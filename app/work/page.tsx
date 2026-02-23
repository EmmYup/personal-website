import { Metadata } from "next";
import { WorkExperience } from "@/components/WorkExperience";
import { CaseStudies } from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Work Experience - Emmanuel Yupit",
  description: "Detailed work experience and case studies from Emmanuel Yupit's career as Engineering Manager and Full-Stack Engineer.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-syne)] mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-muted">
            9 years of building scalable systems and leading high-performing engineering teams
          </p>
        </div>

        <CaseStudies />
        <WorkExperience />
      </div>
    </div>
  );
}
