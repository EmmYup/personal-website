import { Metadata } from "next";
import { ResumeSelector } from "@/components/ResumeSelector";

export const metadata: Metadata = {
  title: "Resume - Emmanuel Yupit",
  description: "Download tailored resumes for Engineering Manager, Full-Stack Engineer, and Frontend Engineer positions.",
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-syne)] mb-6">
            Resume
          </h1>
          <p className="text-xl text-muted">
            Download tailored versions optimized for different roles
          </p>
        </div>

        <ResumeSelector />
      </div>
    </div>
  );
}
