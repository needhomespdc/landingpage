import Image from 'next/image';
import { cn } from '@/lib/utils';

type HotSellingBadgeProps = {
  className?: string;
  size?: number;
};

/** Animated fire badge matching the mobile marketplace hot marker. */
export function HotSellingBadge({ className, size = 22 }: HotSellingBadgeProps) {
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center', className)}
      aria-label="Hot selling"
      title="Hot"
    >
      <Image
        src="/images/marketplace/hottt.gif"
        alt="Hot"
        width={size}
        height={size}
        unoptimized
        className="object-contain"
      />
    </span>
  );
}
