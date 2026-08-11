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

        <div className="mt-3 flex overflow-hidden rounded-md bg-[#F7F7F7]">
          <div className="flex flex-1 flex-col items-center gap-1.5 px-2 py-2">
            <div className="h-4 w-10 animate-pulse rounded bg-[#E8E8E8]" />
            <div className="h-2.5 w-12 animate-pulse rounded bg-[#F0F0F0]" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-1.5 border-l border-[#E8E8E8] px-2 py-2">
            <div className="h-4 w-8 animate-pulse rounded bg-[#E8E8E8]" />
            <div className="h-2.5 w-14 animate-pulse rounded bg-[#F0F0F0]" />
          </div>
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="space-y-1.5">
            <div className="h-2.5 w-20 animate-pulse rounded bg-[#F0F0F0]" />
            <div className="h-4 w-16 animate-pulse rounded bg-[#E8E8E8]" />
          </div>
          <div className="h-9 w-24 animate-pulse rounded-lg bg-[#F0F0F0]" />
        </div>
      </div>
    </article>
  );
}
