import { cn } from '@/lib/utils';

type PropertyCardSkeletonProps = {
  className?: string;
};

export function PropertyCardSkeleton({ className }: PropertyCardSkeletonProps) {
  return (
    <article
      className={cn(
        'flex w-full flex-col overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white',
        className
      )}
      aria-hidden
    >
      <div className="relative aspect-[16/10] w-full animate-pulse bg-[#EDEDED]">
        <div className="absolute left-3 top-3 h-5 w-20 rounded-full bg-[#E0E0E0]" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="h-4 w-4/5 animate-pulse rounded bg-[#E8E8E8]" />
        <div className="mt-2 h-3.5 w-1/2 animate-pulse rounded bg-[#EFEFEF]" />

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <div className="h-3 w-16 animate-pulse rounded bg-[#F0F0F0]" />
            <div className="h-4 w-20 animate-pulse rounded bg-[#E8E8E8]" />
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-20 animate-pulse rounded bg-[#F0F0F0]" />
            <div className="h-4 w-14 animate-pulse rounded bg-[#E8E8E8]" />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-1.5 w-full animate-pulse rounded-full bg-[#EFEFEF]" />
          <div className="h-3 w-16 animate-pulse rounded bg-[#F0F0F0]" />
        </div>

        <div className="mt-4 h-10 w-full animate-pulse rounded-lg bg-[#F0F0F0]" />
      </div>
    </article>
  );
}
