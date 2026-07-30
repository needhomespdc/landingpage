import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentChar?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  accentChar = '.',
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' && 'text-center mx-auto',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
        className
      )}
    >
      {eyebrow && (
        <p className={cn(
          'text-xs font-semibold tracking-widest uppercase',
          light ? 'text-[#E55820]' : 'text-[#E55820]'
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold',
        light ? 'text-white' : 'text-[#1A1A1A]'
      )}>
        {title}
        <span className="text-[#E55820]">{accentChar}</span>
      </h2>
      {subtitle && (
        <p className={cn(
          'text-base leading-relaxed max-w-2xl',
          align === 'center' && 'mx-auto',
          light ? 'text-gray-300' : 'text-gray-500'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
