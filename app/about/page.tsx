import { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About - Emmanuel Yupit",
  description: "Learn more about Emmanuel Yupit's journey as an Engineering Manager and Full-Stack Engineer.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-syne)] mb-12">
          About Me
        </h1>
        <AboutContent />
      </div>
    </div>
  );
}
