import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md';
  hover?: boolean;
  group?: boolean;
}

export function Card({
  children,
  className,
  padding = 'md',
  hover = false,
  group = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-background',
        padding === 'md' ? 'p-8' : 'p-6',
        hover && 'hover:border-primary/50 hover:shadow-lg transition-all',
        group && 'group',
        className
      )}
    >
      {children}
    </div>
  );
}
