import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-syne)] mb-4">
              Emmanuel Yupit
            </h3>
            <p className="text-sm text-muted">
              Engineering Manager & Full-Stack Engineer building reliable systems at scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-sm text-muted hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-sm text-muted hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/emmanuelpyupit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-border/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/emmanuelpyupit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-border/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:e.pyupit@gmail.com"
                className="p-2 rounded-lg hover:bg-border/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          <p>&copy; {currentYear} Emmanuel Yupit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
