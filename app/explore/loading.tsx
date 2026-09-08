import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreLoading() {
    return (
        <main className="pt-20 pb-20 bg-background">
            <div className="wrapper space-y-12">
                {/* Back navigation skeleton */}
                <div className="mb-8">
                    <Skeleton className="h-6 w-24 rounded-xl bg-foreground/10" />
                </div>

                {/* Explore Header Skeleton */}
                <section className="mb-10">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl w-full space-y-4">
                            {/* Title skeleton */}
                            <Skeleton className="h-10 md:h-12 w-3/4 max-w-md rounded-lg bg-foreground/30" />

                            {/* Description skeleton */}
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full max-w-xl rounded-md bg-foreground/10" />
                                <Skeleton className="h-4 w-2/3 max-w-md rounded-md bg-foreground/10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Control Panel Skeleton (Search & Filter - Matched to ProductExplorer) */}
                <div className="space-y-6">
                    {/* Search Bar Skeleton */}
                    <div className="flex h-10 w-full items-stretch border-2 border-foreground/10 bg-background shadow-[3px_3px_0px_0px_rgba(0,0,0,0.04)]">
                        {/* Search Glyph Container */}
                        <div className="flex w-10 shrink-0 select-none items-center justify-center border-r-2 border-foreground/10 bg-foreground/[0.04]">
                            <span className="text-sm font-bold text-foreground/20 leading-none">
                                ⌕
                            </span>
                        </div>
                        {/* Input Placeholder */}
                        <div className="flex-1 flex items-center px-3">
                            <Skeleton className="h-3 w-48 bg-foreground/10" />
                        </div>
                    </div>

                    {/* Result count + sorting skeleton */}
                    <div className="flex flex-col justify-between gap-4 px-1 sm:flex-row sm:items-center">
                        {/* Result count text */}
                        <div className="flex shrink-0 items-center">
                            <Skeleton className="h-3 w-32 bg-foreground/10" />
                        </div>

                        {/* Sorting Buttons Skeleton */}
                        <div className="flex h-10 shrink-0 items-stretch border-2 border-foreground/10 bg-background shadow-[3px_3px_0px_0px_rgba(0,0,0,0.04)] sm:self-auto">
                            <div className="h-full border-r-2 border-foreground/10 px-4 flex items-center justify-center">
                                <Skeleton className="h-3 w-12 bg-foreground/10" />
                            </div>
                            <div className="h-full px-4 flex items-center justify-center">
                                <Skeleton className="h-3 w-12 bg-foreground/10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Product Grid Skeleton (With Neo-Brutalist Border and Shadow) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="h-64 w-full rounded-[2rem] border-2 border-foreground/10 bg-background p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,0.04)] animate-pulse">
                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-4 flex-1">
                                    <Skeleton className="h-7 w-3/4 bg-foreground/20 rounded-lg" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-3 w-full bg-foreground/10 rounded-md" />
                                        <Skeleton className="h-3 w-2/3 bg-foreground/10 rounded-md" />
                                    </div>
                                </div>
                                <Skeleton className="h-16 w-14 rounded-xl bg-foreground/5" />
                            </div>
                            <div className="flex gap-2">
                                <Skeleton className="h-6 w-16 rounded-full bg-foreground/5" />
                                <Skeleton className="h-6 w-16 rounded-full bg-foreground/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
