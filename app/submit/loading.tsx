import { Skeleton } from "@/components/ui/skeleton";

export default function SubmitLoading() {
    return (
        <main className="fixed inset-0 z-50 overflow-y-auto bg-background px-4 font-sans animate-pulse">
            {/* Back Navigation Skeleton  */}
            <div className="group absolute left-5 top-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70 sm:left-8 sm:top-7">
                <Skeleton className="h-6 w-24 rounded-xl bg-foreground/10" />
            </div>

            <div className="flex min-h-full items-center justify-center py-12 sm:py-16">
                <div className="w-full max-w-xl rounded-none border-2 border-foreground/10 bg-[#F7F7F2] p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.04)] dark:bg-[#111015] dark:border-zinc-800/50 sm:p-10">
                    {/* Page Heading Skeleton */}
                    <header className="mb-6 text-left space-y-3">
                        <Skeleton className="h-10 md:h-12 w-2/3 max-w-sm rounded-lg bg-foreground/30" />
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-full max-w-lg rounded-md bg-foreground/10" />
                        </div>
                    </header>

                    {/* Form Fields Skeleton  */}
                    <div className="space-y-5">
                        {/* Product Name Field */}
                        <div className="space-y-1.5">
                            <Skeleton className="h-3.5 w-24 bg-foreground/20 rounded-md" />
                            <Skeleton className="h-10 w-full rounded-none bg-foreground/10" />
                        </div>

                        {/* Website URL Field */}
                        <div className="space-y-1.5">
                            <Skeleton className="h-3.5 w-24 bg-foreground/20 rounded-md" />
                            <Skeleton className="h-10 w-full rounded-none bg-foreground/10" />
                        </div>

                        {/* Tagline Field */}
                        <div className="space-y-1.5">
                            <Skeleton className="h-3.5 w-16 bg-foreground/20 rounded-md" />
                            <Skeleton className="h-10 w-full rounded-none bg-foreground/10" />
                        </div>

                        {/* Tags Field */}
                        <div className="space-y-1.5">
                            <Skeleton className="h-3.5 w-16 bg-foreground/20 rounded-md" />
                            <Skeleton className="h-10 w-full rounded-none bg-foreground/10" />
                        </div>

                        {/* Description */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-3.5 w-24 bg-foreground/20 rounded-md" />
                                <Skeleton className="h-3 w-28 bg-foreground/10 rounded-md" />
                            </div>
                            <Skeleton className="h-20 w-full rounded-none bg-foreground/10" />
                        </div>
                    </div>

                    {/* Bottom Actions Skeleton Divider & Footer */}
                    <div className="mt-6 pt-5 border-t-2 border-foreground/5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="space-y-2 min-w-0">
                                <Skeleton className="h-4 w-28 bg-foreground/20 rounded-md" />
                                <Skeleton className="h-3 w-48 bg-foreground/10 rounded-md" />
                            </div>

                            {/* Launch Button Skeleton */}
                            <Skeleton className="h-10 w-36 rounded-none bg-foreground/30 shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
