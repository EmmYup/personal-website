import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  groupHover?: boolean;
}

export function IconBadge({ icon: Icon, className, groupHover = false }: IconBadgeProps) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center',
        groupHover && 'group-hover:bg-primary/20 transition-colors',
        className
      )}
    >
      <Icon className='w-6 h-6 text-primary' />
    </div>
  );
}
