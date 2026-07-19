import { Skeleton } from "@/components/ui/skeleton";

export default function SubmitLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 md:pt-22 pb-20 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Left Side Skeleton */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-foreground/10 border-2 border-foreground/5" />
            <Skeleton className="h-4 w-24 bg-foreground/10" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-14 w-full bg-foreground/20 rounded-2xl" />
            <Skeleton className="h-14 w-2/3 bg-foreground/20 rounded-2xl" />
            <Skeleton className="h-4 w-3/4 bg-foreground/10 mt-6" />
          </div>
          <div className="flex gap-4 mt-12">
            <Skeleton className="h-24 w-32 bg-foreground/5 rounded-2xl border-2 border-foreground/5" />
            <Skeleton className="h-24 w-32 bg-foreground/5 rounded-2xl border-2 border-foreground/5" />
          </div>
        </div>

        {/* Right Side Form Skeleton */}
        <div className="bg-background border-[3px] border-foreground/10 rounded-[32px] p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-3 w-12 bg-foreground/10" />
              <Skeleton className="h-12 w-full bg-foreground/5 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-12 bg-foreground/10" />
              <Skeleton className="h-12 w-full bg-foreground/5 rounded-xl" />
            </div>
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-3 w-20 bg-foreground/10" />
              <Skeleton className="h-12 w-full bg-foreground/5 rounded-xl" />
            </div>
          ))}
          <div className="space-y-2">
            <Skeleton className="h-3 w-20 bg-foreground/10" />
            <Skeleton className="h-32 w-full bg-foreground/5 rounded-xl" />
          </div>
          <div className="pt-6 flex justify-between items-center">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 bg-foreground/10" />
              <Skeleton className="h-3 w-32 bg-foreground/5" />
            </div>
            <Skeleton className="h-14 w-48 bg-foreground/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
